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
    return RefineUIIconCatalog.all
        .map(
          (entry) => SampleIcon(
            name: entry.name,
            iconData: entry.iconData,
            size: entry.size,
            style: entry.style,
            displayName: entry.displayName,
          ),
        )
        .toList();
  }

  static List<SampleIcon> searchIcons(String query) {
    return getAllIcons().where((icon) {
      return icon.name.toLowerCase().contains(query.toLowerCase()) ||
          icon.displayName.toLowerCase().contains(query.toLowerCase());
    }).toList();
  }
}
