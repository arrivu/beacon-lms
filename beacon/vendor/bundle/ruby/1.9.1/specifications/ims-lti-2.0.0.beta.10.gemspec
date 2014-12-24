# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "ims-lti"
  s.version = "2.0.0.beta.10"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1") if s.respond_to? :required_rubygems_version=
  s.authors = ["Instructure"]
  s.date = "2014-10-09"
  s.homepage = "http://github.com/instructure/ims-lti"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Ruby library for creating IMS LTI tool providers and consumers"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<simple_oauth>, ["= 0.2"])
      s.add_runtime_dependency(%q<faraday>, ["~> 0.8"])
      s.add_runtime_dependency(%q<faraday_middleware>, ["~> 0.8"])
      s.add_development_dependency(%q<rake>, ["~> 0"])
      s.add_development_dependency(%q<rspec>, ["~> 0"])
      s.add_development_dependency(%q<pry>, ["~> 0"])
    else
      s.add_dependency(%q<simple_oauth>, ["= 0.2"])
      s.add_dependency(%q<faraday>, ["~> 0.8"])
      s.add_dependency(%q<faraday_middleware>, ["~> 0.8"])
      s.add_dependency(%q<rake>, ["~> 0"])
      s.add_dependency(%q<rspec>, ["~> 0"])
      s.add_dependency(%q<pry>, ["~> 0"])
    end
  else
    s.add_dependency(%q<simple_oauth>, ["= 0.2"])
    s.add_dependency(%q<faraday>, ["~> 0.8"])
    s.add_dependency(%q<faraday_middleware>, ["~> 0.8"])
    s.add_dependency(%q<rake>, ["~> 0"])
    s.add_dependency(%q<rspec>, ["~> 0"])
    s.add_dependency(%q<pry>, ["~> 0"])
  end
end
