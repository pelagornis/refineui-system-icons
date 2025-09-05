import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

import '../lib/main.dart';

void main() {
  testWidgets('RefineUI Icons app smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that the app title is displayed
    expect(find.text('RefineUI System Icons Example'), findsOneWidget);
    
    // Verify that search field is present
    expect(find.byType(TextField), findsOneWidget);
    
    // Verify that icons are displayed (should show some icons)
    expect(find.byType(Icon), findsWidgets);
  });

  testWidgets('RefineUI Icons basic functionality test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Wait for icons to load
    await tester.pumpAndSettle();

    // Verify that we have some icons displayed
    expect(find.byType(Icon), findsWidgets);
    
    // Test search functionality
    await tester.enterText(find.byType(TextField), 'home');
    await tester.pump();
    
    // Should still have icons after search
    expect(find.byType(Icon), findsWidgets);
  });
}