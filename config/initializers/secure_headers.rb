::SecureHeaders::Configuration.default do |config|
  if SETTINGS[:hsts_enabled]
    config.hsts = "max-age=#{20.years.to_i}; includeSubdomains"
  else
    config.hsts = "max-age=0; includeSubdomains"
  end
  config.csp = {
    :default_src => ["'self'"],
    :child_src   => ["'self'"],
    :connect_src => ["'self'", 'ws:', 'wss:', "http://localhost:8080", "ws://localhost:8080", "wss://localhost:8080", "http://localhost:8001"],
    :style_src   => ["'unsafe-inline'", "'self'", "http://localhost:8001", "http://localhost:8001"],
    # :script_src  => ["'unsafe-eval'", "'unsafe-inline'", "'self'", "http://localhost:3002"],
    :script_src  => ["'unsafe-eval'", "'unsafe-inline'", "'self'", "http://localhost:8080", "ws://localhost:8080", "wss://localhost:8080", "http://localhost:8001"],
    # script_src:  SecureHeaders::OPT_OUT,
    :img_src     => ["'self'", 'data:'],
  }
end
