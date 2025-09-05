import 'package:flutter/widgets.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

class SampleIcon {
  final String name;
  final IconData iconData;
  final int size;
  final String style;
  final String displayName;

  SampleIcon({
    required this.name,
    required this.iconData,
    required this.size,
    required this.style,
    required this.displayName,
  });
}

class SampleIcons {
  static List<SampleIcon> getAllIcons() {
    return [
      // Access
      SampleIcon(
        name: 'access',
        iconData: RefineIcons.Access,
        size: 16,
        style: 'regular',
        displayName: 'Access',
      ),
      SampleIcon(
        name: 'access',
        iconData: RefineIconsFilled.Access,
        size: 16,
        style: 'filled',
        displayName: 'Access',
      ),

      // Accessibility
      SampleIcon(
        name: 'accessibility',
        iconData: RefineIcons.Accessibility,
        size: 16,
        style: 'regular',
        displayName: 'Accessibility',
      ),
      SampleIcon(
        name: 'accessibility',
        iconData: RefineIconsFilled.Accessibility,
        size: 16,
        style: 'filled',
        displayName: 'Accessibility',
      ),

      // Add
      SampleIcon(
        name: 'add',
        iconData: RefineIcons.Add,
        size: 16,
        style: 'regular',
        displayName: 'Add',
      ),
      SampleIcon(
        name: 'add',
        iconData: RefineIconsFilled.Add,
        size: 16,
        style: 'filled',
        displayName: 'Add',
      ),

      // Airplane
      SampleIcon(
        name: 'airplane',
        iconData: RefineIcons.Airplane,
        size: 16,
        style: 'regular',
        displayName: 'Airplane',
      ),
      SampleIcon(
        name: 'airplane',
        iconData: RefineIconsFilled.Airplane,
        size: 16,
        style: 'filled',
        displayName: 'Airplane',
      ),

      // Album
      SampleIcon(
        name: 'album',
        iconData: RefineIcons.Album,
        size: 16,
        style: 'regular',
        displayName: 'Album',
      ),
      SampleIcon(
        name: 'album',
        iconData: RefineIconsFilled.Album,
        size: 16,
        style: 'filled',
        displayName: 'Album',
      ),

      // Alert
      SampleIcon(
        name: 'alert',
        iconData: RefineIcons.Alert,
        size: 16,
        style: 'regular',
        displayName: 'Alert',
      ),
      SampleIcon(
        name: 'alert',
        iconData: RefineIconsFilled.Alert,
        size: 16,
        style: 'filled',
        displayName: 'Alert',
      ),

      // Home
      SampleIcon(
        name: 'home',
        iconData: RefineIcons.Home,
        size: 16,
        style: 'regular',
        displayName: 'Home',
      ),
      SampleIcon(
        name: 'home',
        iconData: RefineIconsFilled.Home,
        size: 16,
        style: 'filled',
        displayName: 'Home',
      ),

      // Settings
      SampleIcon(
        name: 'settings',
        iconData: RefineIcons.Settings,
        size: 16,
        style: 'regular',
        displayName: 'Settings',
      ),
      SampleIcon(
        name: 'settings',
        iconData: RefineIconsFilled.Settings,
        size: 16,
        style: 'filled',
        displayName: 'Settings',
      ),

      // Search
      SampleIcon(
        name: 'search',
        iconData: RefineIcons.Search,
        size: 16,
        style: 'regular',
        displayName: 'Search',
      ),
      SampleIcon(
        name: 'search',
        iconData: RefineIconsFilled.Search,
        size: 16,
        style: 'filled',
        displayName: 'Search',
      ),

      // Heart
      SampleIcon(
        name: 'heart',
        iconData: RefineIcons.Heart,
        size: 16,
        style: 'regular',
        displayName: 'Heart',
      ),
      SampleIcon(
        name: 'heart',
        iconData: RefineIconsFilled.Heart,
        size: 16,
        style: 'filled',
        displayName: 'Heart',
      ),
    ];
  }

  static List<SampleIcon> getIconsByStyleAndSize(String style, String size) {
    return getAllIcons().where((icon) {
      return icon.style == style && icon.size.toString() == size;
    }).toList();
  }

  static List<SampleIcon> searchIcons(String query) {
    return getAllIcons().where((icon) {
      return icon.name.toLowerCase().contains(query.toLowerCase()) ||
             icon.displayName.toLowerCase().contains(query.toLowerCase());
    }).toList();
  }
}