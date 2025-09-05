#
# Be sure to run `pod lib lint RefineIcons.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
    s.name             = 'RefineIcons'
    s.version = '1.2.0'
    s.summary          = 'RefineIcons'
  
    s.description      = <<-DESC
    RefineIcons
                         DESC
  
    s.homepage         = 'https://github.com/pelagornis/refineui-system-icons'
    s.license          = { :type => 'Pelagornis', :file => 'LICENSE' }
    s.author           = { 'Pelagornis, Inc.' => 'official@pelagornis.com' }
    s.source           = { :git => 'https://github.com/pelagornis/refineui-system-icons.git', :tag => s.version.to_s }
    s.swift_version = "5.10"

    s.ios.deployment_target = '13.0'
    s.osx.deployment_target  = '12'
  
    # This podspec is symlinked to the root directory of this repo
    # so all paths will need the prefix `ios/RefineIcons`
  
    s.subspec 'Code' do |sp|
      sp.source_files = 'ios/RefineIcons/Sources/*.swift'
      sp.ios.source_files   = 'ios/RefineIcons/Sources/*.swift'
      sp.osx.source_files   = 'ios/RefineIcons/Sources/*.swift'
    end
  
    s.subspec 'Assets' do |sp|
      # Require this to be used as a dynamic framework
      # `resource_bundles` are unable to load around 1 in a thousand times
      # so we need to stick to `resources` here instead.
      sp.resource = 'ios/RefineIcons/Resources/IconAssets.xcassets'
    end
  
    s.default_subspecs = 'Code', 'Assets'
  
    # s.public_header_files = 'Pod/Classes/**/*.h'
    # s.frameworks = 'UIKit', 'MapKit'
    # s.dependency 'AFNetworking', '~> 2.3'
  end