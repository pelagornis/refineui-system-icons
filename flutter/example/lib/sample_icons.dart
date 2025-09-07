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
        iconData: RefineUIIcons.Access,
        size: 16,
        style: 'regular',
        displayName: 'Access',
      ),
      SampleIcon(
        name: 'access',
        iconData: RefineUIIconsFilled.Access,
        size: 16,
        style: 'filled',
        displayName: 'Access',
      ),

      // Accessibility
      SampleIcon(
        name: 'accessibility',
        iconData: RefineUIIcons.Accessibility,
        size: 16,
        style: 'regular',
        displayName: 'Accessibility',
      ),
      SampleIcon(
        name: 'accessibility',
        iconData: RefineUIIconsFilled.Accessibility,
        size: 16,
        style: 'filled',
        displayName: 'Accessibility',
      ),

      // Add
      SampleIcon(
        name: 'add',
        iconData: RefineUIIcons.Add,
        size: 16,
        style: 'regular',
        displayName: 'Add',
      ),
      SampleIcon(
        name: 'add',
        iconData: RefineUIIconsFilled.Add,
        size: 16,
        style: 'filled',
        displayName: 'Add',
      ),

      // Airplane
      SampleIcon(
        name: 'airplane',
        iconData: RefineUIIcons.Airplane,
        size: 16,
        style: 'regular',
        displayName: 'Airplane',
      ),
      SampleIcon(
        name: 'airplane',
        iconData: RefineUIIconsFilled.Airplane,
        size: 16,
        style: 'filled',
        displayName: 'Airplane',
      ),

      // Album
      SampleIcon(
        name: 'album',
        iconData: RefineUIIcons.Album,
        size: 16,
        style: 'regular',
        displayName: 'Album',
      ),
      SampleIcon(
        name: 'album',
        iconData: RefineUIIconsFilled.Album,
        size: 16,
        style: 'filled',
        displayName: 'Album',
      ),

      // Alert
      SampleIcon(
        name: 'alert',
        iconData: RefineUIIcons.Alert,
        size: 16,
        style: 'regular',
        displayName: 'Alert',
      ),
      SampleIcon(
        name: 'alert',
        iconData: RefineUIIconsFilled.Alert,
        size: 16,
        style: 'filled',
        displayName: 'Alert',
      ),

      // Home
      SampleIcon(
        name: 'home',
        iconData: RefineUIIcons.Home,
        size: 16,
        style: 'regular',
        displayName: 'Home',
      ),
      SampleIcon(
        name: 'home',
        iconData: RefineUIIconsFilled.Home,
        size: 16,
        style: 'filled',
        displayName: 'Home',
      ),

      // Settings
      SampleIcon(
        name: 'settings',
        iconData: RefineUIIcons.Settings,
        size: 16,
        style: 'regular',
        displayName: 'Settings',
      ),
      SampleIcon(
        name: 'settings',
        iconData: RefineUIIconsFilled.Settings,
        size: 16,
        style: 'filled',
        displayName: 'Settings',
      ),

      // Search
      SampleIcon(
        name: 'search',
        iconData: RefineUIIcons.Search,
        size: 16,
        style: 'regular',
        displayName: 'Search',
      ),
      SampleIcon(
        name: 'search',
        iconData: RefineUIIconsFilled.Search,
        size: 16,
        style: 'filled',
        displayName: 'Search',
      ),

      // Heart
      SampleIcon(
        name: 'heart',
        iconData: RefineUIIcons.Heart,
        size: 16,
        style: 'regular',
        displayName: 'Heart',
      ),
      SampleIcon(
        name: 'heart',
        iconData: RefineUIIconsFilled.Heart,
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