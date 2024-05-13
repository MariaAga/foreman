function load_dynamic_javascripts(html) {
  {
    // parse html string
    var template = document.createElement('template');
    template.innerHTML = html;
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var copyChildren = [...doc.head.children];

    const loadScripts = scripts => {
      const urlScripts = scripts.filter(script => script.src);
      const inlineScripts = scripts.filter(script => !script.src);
      console.log('urlScripts', urlScripts);
      Promise.all([
        ...inlineScripts.map(script => {
          // console.log('loading script', script.innerHTML);
          eval(script.innerHTML);
          // console.log('loaded script', script.innerHTML);
        }),
        ...urlScripts.map(script => {
          const scriptTag = document.createElement('script');
          scriptTag.src = script.src;
          document.head.appendChild(scriptTag);
        }),
      ]).then(() => {
        console.log('all scripts loaded');
        window.allJsLoaded = true;
        const loadJS = new Event('loadJS');
        document.dispatchEvent(loadJS);
      });
    };
    loadScripts(copyChildren);
  }
}
