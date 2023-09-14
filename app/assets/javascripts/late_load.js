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
    var doc = new DOMParser().parseFromString(html, "text/html");
    var copyChildren = [...doc.head.children];
    for(var i = 0; i < copyChildren.length; i++) {
      if(copyChildren[i].src){
         await import(copyChildren[i].src);
      }
      else{
        await eval(copyChildren[i].innerHTML)
      }
    }
    const loadJS = new Event('loadJS');
    document.dispatchEvent(loadJS);
  });
}