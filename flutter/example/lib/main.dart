import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';

void main() {
  runApp(const RefineUIIconsApp());
}

class RefineUIIconsApp extends StatelessWidget {
  const RefineUIIconsApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'RefineUI System Icons',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const IconsGridPage(),
    );
  }
}

class IconsGridPage extends StatefulWidget {
  const IconsGridPage({super.key});

  @override
  State<IconsGridPage> createState() => _IconsGridPageState();
}

class _IconsGridPageState extends State<IconsGridPage> {
  String _searchQuery = '';
  String _selectedStyle = 'all'; // 'all', 'regular', 'filled'
  String _selectedSize = 'all'; // 'all', '16', '20', '24', '28', '32', '48'

  final List<String> _styles = ['all', 'regular', 'filled'];
  final List<String> _sizes = ['all', '16', '20', '24', '28', '32', '48'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('RefineUI System Icons'),
        actions: [
          IconButton(
            icon: const Icon(Icons.search),
            onPressed: () {
              showSearch(
                context: context,
                delegate: IconSearchDelegate(),
              );
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // Filters
          Container(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                // Style filter
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: _selectedStyle,
                    decoration: const InputDecoration(
                      labelText: 'Style',
                      border: OutlineInputBorder(),
                    ),
                    items: _styles.map((style) {
                      return DropdownMenuItem(
                        value: style,
                        child: Text(style.toUpperCase()),
                      );
                    }).toList(),
                    onChanged: (value) {
                      setState(() {
                        _selectedStyle = value!;
                      });
                    },
                  ),
                ),
                const SizedBox(width: 16),
                // Size filter
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: _selectedSize,
                    decoration: const InputDecoration(
                      labelText: 'Size',
                      border: OutlineInputBorder(),
                    ),
                    items: _sizes.map((size) {
                      return DropdownMenuItem(
                        value: size,
                        child: Text(size.toUpperCase()),
                      );
                    }).toList(),
                    onChanged: (value) {
                      setState(() {
                        _selectedSize = value!;
                      });
                    },
                  ),
                ),
              ],
            ),
          ),
          // Search bar
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: TextField(
              decoration: const InputDecoration(
                labelText: 'Search icons',
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(),
              ),
              onChanged: (value) {
                setState(() {
                  _searchQuery = value.toLowerCase();
                });
              },
            ),
          ),
          const SizedBox(height: 16),
          // Icons grid
          Expanded(
            child: _buildIconsGrid(),
          ),
        ],
      ),
    );
  }

  Widget _buildIconsGrid() {
    final filteredIcons = _getFilteredIcons();
    
    return GridView.builder(
      padding: const EdgeInsets.all(16),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 4,
        childAspectRatio: 1,
        crossAxisSpacing: 8,
        mainAxisSpacing: 8,
      ),
      itemCount: filteredIcons.length,
      itemBuilder: (context, index) {
        final icon = filteredIcons[index];
        return _buildIconCard(icon);
      },
    );
  }

  Widget _buildIconCard(Map<String, dynamic> icon) {
    return Card(
      child: InkWell(
        onTap: () {
          _showIconDetails(icon);
        },
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon['iconData'],
              size: 32,
              color: Theme.of(context).primaryColor,
            ),
            const SizedBox(height: 8),
            Text(
              icon['name'],
              style: const TextStyle(fontSize: 10),
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
            Text(
              '${icon['size']}px',
              style: const TextStyle(fontSize: 8, color: Colors.grey),
            ),
          ],
        ),
      ),
    );
  }

  void _showIconDetails(Map<String, dynamic> icon) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(icon['name']),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon['iconData'],
              size: 64,
              color: Theme.of(context).primaryColor,
            ),
            const SizedBox(height: 16),
            Text('Size: ${icon['size']}px'),
            Text('Style: ${icon['style']}'),
            const SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Icon(icon['iconData'], size: 16),
                Icon(icon['iconData'], size: 24),
                Icon(icon['iconData'], size: 32),
                Icon(icon['iconData'], size: 48),
              ],
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Close'),
          ),
        ],
      ),
    );
  }

  List<Map<String, dynamic>> _getFilteredIcons() {
    final allIcons = _getAllIcons();
    
    return allIcons.where((icon) {
      // Style filter
      if (_selectedStyle != 'all' && icon['style'] != _selectedStyle) {
        return false;
      }
      
      // Size filter
      if (_selectedSize != 'all' && icon['size'].toString() != _selectedSize) {
        return false;
      }
      
      // Search filter
      if (_searchQuery.isNotEmpty) {
        return icon['name'].toLowerCase().contains(_searchQuery);
      }
      
      return true;
    }).toList();
  }

  List<Map<String, dynamic>> _getAllIcons() {
    final icons = <Map<String, dynamic>>[];
    
    // Add RefineUIIcons (constant style) - sample icons
    icons.addAll([
      // Access Time icons
      {'name': 'access_time_20_regular', 'iconData': RefineUIIcons.access_time_20_regular, 'size': 20, 'style': 'regular'},
      {'name': 'access_time_24_regular', 'iconData': RefineUIIcons.access_time_24_regular, 'size': 24, 'style': 'regular'},
      {'name': 'access_time_28_regular', 'iconData': RefineUIIcons.access_time_28_regular, 'size': 28, 'style': 'regular'},
      {'name': 'access_time_32_regular', 'iconData': RefineUIIcons.access_time_32_regular, 'size': 32, 'style': 'regular'},
      {'name': 'access_time_48_regular', 'iconData': RefineUIIcons.access_time_48_regular, 'size': 48, 'style': 'regular'},
      {'name': 'access_time_16_regular', 'iconData': RefineUIIcons.access_time_16_regular, 'size': 16, 'style': 'regular'},
      {'name': 'access_time_20_filled', 'iconData': RefineUIIcons.access_time_20_filled, 'size': 20, 'style': 'filled'},
      {'name': 'access_time_24_filled', 'iconData': RefineUIIcons.access_time_24_filled, 'size': 24, 'style': 'filled'},
      {'name': 'access_time_28_filled', 'iconData': RefineUIIcons.access_time_28_filled, 'size': 28, 'style': 'filled'},
      {'name': 'access_time_32_filled', 'iconData': RefineUIIcons.access_time_32_filled, 'size': 32, 'style': 'filled'},
      {'name': 'access_time_48_filled', 'iconData': RefineUIIcons.access_time_48_filled, 'size': 48, 'style': 'filled'},
      {'name': 'access_time_16_filled', 'iconData': RefineUIIcons.access_time_16_filled, 'size': 16, 'style': 'filled'},
      
      // Add icons
      {'name': 'add_20_regular', 'iconData': RefineUIIcons.add_20_regular, 'size': 20, 'style': 'regular'},
      {'name': 'add_24_regular', 'iconData': RefineUIIcons.add_24_regular, 'size': 24, 'style': 'regular'},
      {'name': 'add_28_regular', 'iconData': RefineUIIcons.add_28_regular, 'size': 28, 'style': 'regular'},
      {'name': 'add_32_regular', 'iconData': RefineUIIcons.add_32_regular, 'size': 32, 'style': 'regular'},
      {'name': 'add_48_regular', 'iconData': RefineUIIcons.add_48_regular, 'size': 48, 'style': 'regular'},
      {'name': 'add_16_regular', 'iconData': RefineUIIcons.add_16_regular, 'size': 16, 'style': 'regular'},
      {'name': 'add_20_filled', 'iconData': RefineUIIcons.add_20_filled, 'size': 20, 'style': 'filled'},
      {'name': 'add_24_filled', 'iconData': RefineUIIcons.add_24_filled, 'size': 24, 'style': 'filled'},
      {'name': 'add_28_filled', 'iconData': RefineUIIcons.add_28_filled, 'size': 28, 'style': 'filled'},
      {'name': 'add_32_filled', 'iconData': RefineUIIcons.add_32_filled, 'size': 32, 'style': 'filled'},
      {'name': 'add_48_filled', 'iconData': RefineUIIcons.add_48_filled, 'size': 48, 'style': 'filled'},
      {'name': 'add_16_filled', 'iconData': RefineUIIcons.add_16_filled, 'size': 16, 'style': 'filled'},
      
      // Add Circle icons
      {'name': 'add_circle_20_regular', 'iconData': RefineUIIcons.add_circle_20_regular, 'size': 20, 'style': 'regular'},
      {'name': 'add_circle_24_regular', 'iconData': RefineUIIcons.add_circle_24_regular, 'size': 24, 'style': 'regular'},
      {'name': 'add_circle_28_regular', 'iconData': RefineUIIcons.add_circle_28_regular, 'size': 28, 'style': 'regular'},
      {'name': 'add_circle_32_regular', 'iconData': RefineUIIcons.add_circle_32_regular, 'size': 32, 'style': 'regular'},
      {'name': 'add_circle_48_regular', 'iconData': RefineUIIcons.add_circle_48_regular, 'size': 48, 'style': 'regular'},
      {'name': 'add_circle_16_regular', 'iconData': RefineUIIcons.add_circle_16_regular, 'size': 16, 'style': 'regular'},
      {'name': 'add_circle_20_filled', 'iconData': RefineUIIcons.add_circle_20_filled, 'size': 20, 'style': 'filled'},
      {'name': 'add_circle_24_filled', 'iconData': RefineUIIcons.add_circle_24_filled, 'size': 24, 'style': 'filled'},
      {'name': 'add_circle_28_filled', 'iconData': RefineUIIcons.add_circle_28_filled, 'size': 28, 'style': 'filled'},
      {'name': 'add_circle_32_filled', 'iconData': RefineUIIcons.add_circle_32_filled, 'size': 32, 'style': 'filled'},
      {'name': 'add_circle_48_filled', 'iconData': RefineUIIcons.add_circle_48_filled, 'size': 48, 'style': 'filled'},
      {'name': 'add_circle_16_filled', 'iconData': RefineUIIcons.add_circle_16_filled, 'size': 16, 'style': 'filled'},
      
      // Airplane icons
      {'name': 'airplane_20_regular', 'iconData': RefineUIIcons.airplane_20_regular, 'size': 20, 'style': 'regular'},
      {'name': 'airplane_24_regular', 'iconData': RefineUIIcons.airplane_24_regular, 'size': 24, 'style': 'regular'},
      {'name': 'airplane_28_regular', 'iconData': RefineUIIcons.airplane_28_regular, 'size': 28, 'style': 'regular'},
      {'name': 'airplane_32_regular', 'iconData': RefineUIIcons.airplane_32_regular, 'size': 32, 'style': 'regular'},
      {'name': 'airplane_48_regular', 'iconData': RefineUIIcons.airplane_48_regular, 'size': 48, 'style': 'regular'},
      {'name': 'airplane_16_regular', 'iconData': RefineUIIcons.airplane_16_regular, 'size': 16, 'style': 'regular'},
      {'name': 'airplane_20_filled', 'iconData': RefineUIIcons.airplane_20_filled, 'size': 20, 'style': 'filled'},
      {'name': 'airplane_24_filled', 'iconData': RefineUIIcons.airplane_24_filled, 'size': 24, 'style': 'filled'},
      {'name': 'airplane_28_filled', 'iconData': RefineUIIcons.airplane_28_filled, 'size': 28, 'style': 'filled'},
      {'name': 'airplane_32_filled', 'iconData': RefineUIIcons.airplane_32_filled, 'size': 32, 'style': 'filled'},
      {'name': 'airplane_48_filled', 'iconData': RefineUIIcons.airplane_48_filled, 'size': 48, 'style': 'filled'},
      {'name': 'airplane_16_filled', 'iconData': RefineUIIcons.airplane_16_filled, 'size': 16, 'style': 'filled'},
      
      // Album icons
      {'name': 'album_20_regular', 'iconData': RefineUIIcons.album_20_regular, 'size': 20, 'style': 'regular'},
      {'name': 'album_24_regular', 'iconData': RefineUIIcons.album_24_regular, 'size': 24, 'style': 'regular'},
      {'name': 'album_28_regular', 'iconData': RefineUIIcons.album_28_regular, 'size': 28, 'style': 'regular'},
      {'name': 'album_32_regular', 'iconData': RefineUIIcons.album_32_regular, 'size': 32, 'style': 'regular'},
      {'name': 'album_48_regular', 'iconData': RefineUIIcons.album_48_regular, 'size': 48, 'style': 'regular'},
      {'name': 'album_16_regular', 'iconData': RefineUIIcons.album_16_regular, 'size': 16, 'style': 'regular'},
      {'name': 'album_20_filled', 'iconData': RefineUIIcons.album_20_filled, 'size': 20, 'style': 'filled'},
      {'name': 'album_24_filled', 'iconData': RefineUIIcons.album_24_filled, 'size': 24, 'style': 'filled'},
      {'name': 'album_28_filled', 'iconData': RefineUIIcons.album_28_filled, 'size': 28, 'style': 'filled'},
      {'name': 'album_32_filled', 'iconData': RefineUIIcons.album_32_filled, 'size': 32, 'style': 'filled'},
      {'name': 'album_48_filled', 'iconData': RefineUIIcons.album_48_filled, 'size': 48, 'style': 'filled'},
      {'name': 'album_16_filled', 'iconData': RefineUIIcons.album_16_filled, 'size': 16, 'style': 'filled'},
    ]);
    
    return icons;
  }
}

class IconSearchDelegate extends SearchDelegate<String> {
  @override
  List<Widget> buildActions(BuildContext context) {
    return [
      IconButton(
        icon: const Icon(Icons.clear),
        onPressed: () {
          query = '';
        },
      ),
    ];
  }

  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: const Icon(Icons.arrow_back),
      onPressed: () {
        close(context, '');
      },
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return _buildSearchResults();
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    return _buildSearchResults();
  }

  Widget _buildSearchResults() {
    // This would be implemented with actual search results
    return const Center(
      child: Text('Search functionality would be implemented here'),
    );
  }
}
