function load_dynamic_javascripts(html) {
  function waitForAllLoaded() {
    return new Promise(function(resolve) {
      if (Object.values(window.allPluginsLoaded).every(Boolean)) {
        resolve();
      } else {
        function handleLoad() {
          if (Object.values(window.allPluginsLoaded).every(Boolean)) {
            resolve();
            // Remove the event listener
            document.removeEventListener('loadPlugin', handleLoad);
          }
        }
        document.addEventListener('loadPlugin', handleLoad);
      }
    });
  }
  waitForAllLoaded().then(async function() {
    var template = document.createElement('template');
    template.innerHTML = html;
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var copyChildren = [...doc.head.children];
    const loadScript = async scripts => {
      if (scripts.length === 0) {
        // All scripts are loaded
        window.allJsLoaded = true;
        const loadJS = new Event('loadJS');
        document.dispatchEvent(loadJS);
        return;
      }
      const script = scripts.shift();
      if (script.src) {
        const scriptTag = document.createElement('script');
        scriptTag.src = script.src;
        scriptTag.onload = function() {
          // To load the next script only after the current one is loaded
          loadScript(scripts);
        };
        document.head.appendChild(scriptTag);
      } else {
        await eval(script.innerHTML);
        loadScript(scripts);
      }
    };
    loadScript(copyChildren);
  });
}
