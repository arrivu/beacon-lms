# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "ruby-saml-mod"
  s.version = "0.2.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["OneLogin LLC", "Bracken", "Zach", "Cody", "Jeremy", "Paul", "Nick"]
  s.date = "2014-11-06"
  s.description = "This is an early fork from https://github.com/onelogin/ruby-saml - I plan to \"rebase\" these changes ontop of their current version eventually. "
  s.homepage = "http://github.com/instructure/ruby-saml"
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Ruby library for SAML service providers"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<libxml-ruby>, [">= 2.3.0"])
      s.add_runtime_dependency(%q<ffi>, [">= 0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rspec>, ["= 2.14.1"])
    else
      s.add_dependency(%q<libxml-ruby>, [">= 2.3.0"])
      s.add_dependency(%q<ffi>, [">= 0"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rspec>, ["= 2.14.1"])
    end
  else
    s.add_dependency(%q<libxml-ruby>, [">= 2.3.0"])
    s.add_dependency(%q<ffi>, [">= 0"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rspec>, ["= 2.14.1"])
  end
end
