# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "ruby-duration"
  s.version = "3.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jose Peleteiro", "Bruno Azisaka Maciel"]
  s.date = "2014-09-17"
  s.description = "Duration type"
  s.email = ["jose@peleteiro.net", "bruno@azisaka.com.br"]
  s.homepage = "http://github.com/peleteiro/ruby-duration"
  s.rdoc_options = ["--charset=UTF-8"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "ruby-duration"
  s.rubygems_version = "1.8.23.2"
  s.summary = "Duration type"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_runtime_dependency(%q<i18n>, [">= 0"])
      s.add_runtime_dependency(%q<iso8601>, [">= 0"])
      s.add_development_dependency(%q<bundler>, [">= 1.0.0"])
      s.add_development_dependency(%q<minitest>, [">= 0"])
      s.add_development_dependency(%q<yard>, [">= 0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<simplecov>, [">= 0.3.5"])
      s.add_development_dependency(%q<mongoid>, ["< 4.0.0", ">= 3.0.0"])
    else
      s.add_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_dependency(%q<i18n>, [">= 0"])
      s.add_dependency(%q<iso8601>, [">= 0"])
      s.add_dependency(%q<bundler>, [">= 1.0.0"])
      s.add_dependency(%q<minitest>, [">= 0"])
      s.add_dependency(%q<yard>, [">= 0"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<simplecov>, [">= 0.3.5"])
      s.add_dependency(%q<mongoid>, ["< 4.0.0", ">= 3.0.0"])
    end
  else
    s.add_dependency(%q<activesupport>, [">= 3.0.0"])
    s.add_dependency(%q<i18n>, [">= 0"])
    s.add_dependency(%q<iso8601>, [">= 0"])
    s.add_dependency(%q<bundler>, [">= 1.0.0"])
    s.add_dependency(%q<minitest>, [">= 0"])
    s.add_dependency(%q<yard>, [">= 0"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<simplecov>, [">= 0.3.5"])
    s.add_dependency(%q<mongoid>, ["< 4.0.0", ">= 3.0.0"])
  end
end
