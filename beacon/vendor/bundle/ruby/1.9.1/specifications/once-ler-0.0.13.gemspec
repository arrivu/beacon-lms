# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "once-ler"
  s.version = "0.0.13"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.5") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jon Jensen"]
  s.date = "2014-07-08"
  s.description = "once-ler supercharges your let's and before's with the performance of before(:all)"
  s.email = "jon@instructure.com"
  s.homepage = "http://github.com/instructure/onceler"
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubygems_version = "1.8.23.2"
  s.summary = "rspec supercharger"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activerecord>, [">= 3.0"])
      s.add_runtime_dependency(%q<rspec>, [">= 2.14"])
    else
      s.add_dependency(%q<activerecord>, [">= 3.0"])
      s.add_dependency(%q<rspec>, [">= 2.14"])
    end
  else
    s.add_dependency(%q<activerecord>, [">= 3.0"])
    s.add_dependency(%q<rspec>, [">= 2.14"])
  end
end
