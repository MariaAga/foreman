const searchParams = new URLSearchParams(window.location.search);
const plugin = searchParams.get('plugin');

window.tfm.tools.loadPluginModule(`/webpack/${plugin.replace('-','_')},'${plugin.replace('-','_')},'./index`)