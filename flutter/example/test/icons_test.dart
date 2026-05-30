import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

void main() {
  testWidgets('RefineUI icons render from package fonts', (tester) async {
    const icons = [
      RefineUIIcons.task_list_24_regular,
      RefineUIIcons.weather_sunny_high_24_regular,
      RefineUIIcons.weather_sunny_low_24_regular,
      RefineUIIcons.home_24_regular,
    ];

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: Row(
            children: icons
                .map((icon) => Icon(icon, key: Key('icon-${icon.codePoint}')))
                .toList(),
          ),
        ),
      ),
    );

    for (final icon in icons) {
      expect(find.byKey(Key('icon-${icon.codePoint}')), findsOneWidget);
      expect(icon.fontPackage, 'refineui_system_icons');
      expect(icon.fontFamily, isNotEmpty);
    }

    expect(RefineUIIconCatalog.all.length, 5314);
    expect(
      RefineUIIconCatalog.all.any((entry) => entry.name == 'task-list'),
      isTrue,
    );
  });
}
