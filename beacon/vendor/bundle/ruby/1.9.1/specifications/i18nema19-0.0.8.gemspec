# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "i18nema19"
  s.version = "0.0.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.5") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jon Jensen"]
  s.date = "2014-01-16"
  s.description = "drop-in replacement for I18n::Backend::Simple for faster lookups and quicker gc runs. translations are stored outside of the ruby heap"
  s.email = "jon@instructure.com"
  s.extensions = ["ext/i18nema/extconf.rb"]
  s.files = ["ext/i18nema/extconf.rb"]
  s.homepage = "http://github.com/instructure/i18nema"
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubygems_version = "1.8.23.2"
  s.summary = "fast i18n backend that doesn't stop up the garbage collector"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<i18n>, [">= 0.5"])
      s.add_development_dependency(%q<rake-compiler>, [">= 0.8"])
    else
      s.add_dependency(%q<i18n>, [">= 0.5"])
      s.add_dependency(%q<rake-compiler>, [">= 0.8"])
    end
  else
    s.add_dependency(%q<i18n>, [">= 0.5"])
    s.add_dependency(%q<rake-compiler>, [">= 0.8"])
  end
end
