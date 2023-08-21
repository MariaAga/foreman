require 'webpack-rails'
module ReactjsHelper
  # Mount react component in views
  # Params:
  # +name+:: the component name from the componentRegistry
  # +props+:: props to pass to the component
  #          valid value types: Hash, json-string, nil
  
  def react_component(name, props = {})
    props = props.to_json if props.is_a?(Hash)

    content_tag('foreman-react-component', '', :name => name, :data => { props: props })
  end

  def webpack_root_url(plugin)
    "/webpack/#{plugin}/index.js"
  end

  def js_tags_for(requested_plugins)
    requested_plugins.map do |plugin|
      javascript_tag("window.tfm.tools.loadPluginModule('/webpack/#{plugin.to_s.tr('-', '_')}','#{plugin.to_s.tr('-', '_')}','./index');".html_safe)
    end
  end

  def test1
    javascript_include_tag(*webpack_asset_paths('katello:common', :extension => 'js'))
  end

  def test2
     content_for(:javascripts) do
       webpacked_plugins_js_for :katello 
    end 
  end 

  def webpack_asset_paths(plugin_name, extension: 'js')
    # javascript_include_tag 'load_templates', plugin: plugin_name
  end

  def webpacked_plugins_js_for(*plugin_names)
    js_tags_for(select_requested_plugins(plugin_names)).join.html_safe
  end

  def other_webpack_plugin(plugin_name, file)
    javascript_tag("window.tfm.tools.loadPluginModule('/webpack/#{plugin_name.to_s.tr('-', '_')}','#{plugin_name.to_s.tr('-', '_')}','./#{file}_index');".html_safe)
  end

  def global_js_tags(requested_plugins)
    puts "\n\n\n\n\n\n\n\n\n"
    puts requested_plugins
    puts "\n\n\n\n\n\n\n\n\n"
    requested_plugins.map do |plugin|
      plugin[:files].map do |file|
        javascript_tag("window.tfm.tools.loadPluginModule('/webpack/#{plugin[:id].to_s.tr('-', '_')}','#{plugin[:id].to_s.tr('-', '_')}','./#{file}_index');".html_safe)
      end
    end
  end

  def remote_webpack
    # javascript_tag("window.tfm.tools.loadPluginModule('/webpack','foremanReact','./', false);".html_safe)
  end

  def webpacked_plugins_with_global_js
    global_js_tags(global_plugins_list).join.html_safe
  end

  def webpacked_plugins_css_for(*plugin_names)
  end

  def js_chunks
    if ENV['RAILS_ENV'] == 'production'
      javascript_include_tag("/webpack/#{File.basename(Dir.glob('public/webpack/foreman-vendor*production*js')[0])}")
    else
      javascript_include_tag("/webpack/#{File.basename(Dir.glob('public/webpack/foreman-vendor*development*js')[0])}")
    end
  end

  def css_chunks
    if ENV['RAILS_ENV'] == 'production'
      stylesheet_link_tag("/webpack/#{File.basename(Dir.glob('public/webpack/foreman-vendor*production*css')[0])}")
    else
      stylesheet_link_tag("/webpack/#{File.basename(Dir.glob('public/webpack/foreman-vendor*development*css')[0])}")
    end
end

  def select_requested_plugins(plugin_names)
    available_plugins = Foreman::Plugin.with_webpack.map(&:id)
    missing_plugins = plugin_names - available_plugins
    if missing_plugins.any?
      logger.error { "Failed to include webpack assets for plugins: #{missing_plugins}" }
      raise ::Foreman::Exception.new("Failed to include webpack assets for plugins: #{missing_plugins}") if Rails.env.development?
    end
    plugin_names & available_plugins
  end

  def locale_js_tags
    locale = FastGettext.locale
    ::Foreman::Plugin.all.filter_map do |plugin|
      domain = plugin.gettext_domain
      if domain && (FastGettext.translation_repositories[domain]&.available_locales || []).include?(locale)
        javascript_include_tag("#{plugin.name}/locale/#{locale}/#{domain}")
      end
    end.join.html_safe
  end

  private

  def global_plugins_list
    puts "\n\n\n\n\n\n\n\n\n"
    puts Foreman::Plugin.with_global_js[0].global_js_files
    puts Foreman::Plugin.with_global_js[1].global_js_files
    puts Foreman::Plugin.with_global_js[2].global_js_files
    puts "\n\n\n\n\n\n\n\n\n"
    Foreman::Plugin.with_global_js.map { |plugin| { id: plugin.id, files: plugin.global_js_files } }
  end
end
