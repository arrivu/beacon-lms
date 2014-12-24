# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "testingbot"
  s.version = "0.1.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jochen Delabie"]
  s.date = "2013-04-23"
  s.description = "This gem makes using our Selenium grid on testingbot.com easy"
  s.email = ["info@testingbot.com"]
  s.executables = ["testingbot"]
  s.files = ["bin/testingbot"]
  s.homepage = "http://www.testingbot.com"
  s.require_paths = ["lib"]
  s.rubyforge_project = "testingbot"
  s.rubygems_version = "1.8.23.2"
  s.summary = "Ruby Gem to be used with testingbot.com"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<json>, [">= 0"])
      s.add_runtime_dependency(%q<net-http-persistent>, [">= 0"])
      s.add_runtime_dependency(%q<selenium-webdriver>, [">= 0"])
      s.add_development_dependency(%q<rspec>, [">= 2.9.0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<json>, [">= 0"])
      s.add_dependency(%q<net-http-persistent>, [">= 0"])
      s.add_dependency(%q<selenium-webdriver>, [">= 0"])
      s.add_dependency(%q<rspec>, [">= 2.9.0"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<json>, [">= 0"])
    s.add_dependency(%q<net-http-persistent>, [">= 0"])
    s.add_dependency(%q<selenium-webdriver>, [">= 0"])
    s.add_dependency(%q<rspec>, [">= 2.9.0"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
