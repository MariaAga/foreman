require 'rack/proxy'

class ProxyMiddleware < Rack::Proxy
  # def perform_request(env)
  #   request = Rack::Request.new(env)

  #   case request.path
  #   when %r{^/apps/landing}
  #     env['HTTP_HOST'] = 'raw.githubusercontent.com'
  #     env['PATH_INFO'] = request.path.sub('/apps/landing', '/Hyperkid123/landing-page-frontend/satellite-poc')
  #     env['REQUEST_URI'] = env['PATH_INFO']
  #     super(env)
  #   when %r{^/apps/widget-layout}
  #     env['HTTP_HOST'] = 'raw.githubusercontent.com'
  #     env['PATH_INFO'] = request.path.sub('/apps/widget-layout', '/RedHatInsights/widget-layout/satellite-poc')
  #     env['REQUEST_URI'] = env['PATH_INFO']
  #     super(env)
  #   else
  #     @app.call(env)
  #   end
  # end
end
