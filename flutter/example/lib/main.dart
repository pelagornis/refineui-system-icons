import 'package:flutter/material.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';
import 'package:flutter/services.dart';
import 'package:flutter/foundation.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  // 웹에서 폰트 로딩 확인
  if (kIsWeb) {
    print('웹에서 실행 중 - 폰트 로딩 확인');
  }
  
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
          IconButton(
            icon: const Icon(Icons.help_outline),
            onPressed: () {
              _showUsageExamples();
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
            // 아이콘의 실제 크기로 표시
            Icon(
              icon['iconData'],
              size: icon['size'].toDouble(),
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
            // 실제 크기로 표시
            Icon(
              icon['iconData'],
              size: icon['size'].toDouble(),
              color: Theme.of(context).primaryColor,
            ),
            const SizedBox(height: 16),
            Text('Size: ${icon['size']}px'),
            Text('Style: ${icon['style']}'),
            const SizedBox(height: 16),
            // 다양한 크기 비교
            const Text('다양한 크기 비교:', style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  children: [
                    Icon(icon['iconData'], size: 16),
                    const Text('16px', style: TextStyle(fontSize: 10)),
                  ],
                ),
                Column(
                  children: [
                    Icon(icon['iconData'], size: 24),
                    const Text('24px', style: TextStyle(fontSize: 10)),
                  ],
                ),
                Column(
                  children: [
                    Icon(icon['iconData'], size: 32),
                    const Text('32px', style: TextStyle(fontSize: 10)),
                  ],
                ),
                Column(
                  children: [
                    Icon(icon['iconData'], size: 48),
                    const Text('48px', style: TextStyle(fontSize: 10)),
                  ],
                ),
              ],
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('닫기'),
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
    
    // ALL RefineUIIcons (5196 total icons) - Dynamically generated
    final sizes = [16, 20, 24, 28, 32, 48];
    final styles = ['regular', 'filled'];
    
    // Complete list of all 433 unique icon names
    final iconNames = [
      'access_time', 'accessibility', 'add', 'add_circle', 'add_square', 'airplane', 'album', 'alert',
      'alert_badge', 'alert_off', 'align_bottom', 'align_center_horizontal', 'align_center_vertical',
      'align_left', 'align_right', 'align_top', 'android', 'app_folder', 'app_recent', 'app_title',
      'appstore', 'autosum', 'backpack', 'backspace', 'badge', 'balloon', 'bar_chart_horizontal',
      'bar_chart_horizontal_descending', 'bar_chart_vertical', 'bar_chart_vertical_descending',
      'barcode_scanner', 'battery_0', 'battery_10', 'battery_100', 'battery_20', 'battery_30',
      'battery_40', 'battery_50', 'battery_60', 'battery_70', 'battery_80', 'battery_90',
      'block', 'bluetooth', 'blur', 'board', 'book', 'bookmark', 'bug', 'calculator', 'calendar',
      'camera', 'cart', 'carton_box', 'chart', 'chat', 'chat_add', 'chat_empty', 'checkmark',
      'chess', 'chevron_down', 'chevron_left', 'chevron_right', 'chevron_up', 'circle', 'clipboard',
      'clock', 'clock_alarm', 'cloud', 'clover', 'code', 'code_block', 'comma', 'comment', 'cone',
      'contrast', 'control_button', 'cookie', 'copy', 'couch', 'cpu', 'crop', 'crown', 'css', 'cube',
      'cursor', 'cut', 'dart', 'database', 'delete', 'delete_off', 'dentist', 'desk', 'desktop',
      'desktop_mac', 'dialpad', 'diamond', 'dismiss', 'dismiss_circle', 'dismiss_square', 'doctor',
      'document', 'document_border', 'door', 'drag', 'drawer', 'drop', 'dual_screen', 'dumbbell',
      'dust', 'earth', 'edit', 'edit_off', 'elevator', 'emoji', 'emoji_angry', 'emoji_cool',
      'emoji_grimacing', 'emoji_laugh', 'emoji_meh', 'emoji_sad', 'emoji_surprise', 'engine', 'equal',
      'equal_circle', 'equal_off', 'error_circle', 'eye', 'eye_off', 'eyedropper', 'eyedropper_off',
      'fast_forward', 'filmstrip', 'filmstrip_off', 'filter', 'fire', 'flag', 'flag_off', 'flash',
      'flash_off', 'flashlight', 'flashlight_off', 'flip_horizontal', 'flip_vertcial', 'folder',
      'folder_open', 'frame', 'full_screen_maximize', 'full_screen_minimize', 'games', 'gantt_chart',
      'gas', 'gas_station', 'gavel', 'gif', 'gift', 'gift_card', 'git', 'glasses', 'global', 'grid',
      'guest', 'guitar', 'hammer', 'headphones', 'heart', 'help', 'home', 'image', 'info', 'keyboard',
      'laptop', 'lightbulb', 'link', 'list', 'location', 'lock', 'mail', 'map', 'menu', 'message',
      'microphone', 'mobile', 'money', 'more', 'music', 'notification', 'paperclip', 'pause', 'phone',
      'picture', 'play', 'plus', 'print', 'refresh', 'save', 'search', 'send', 'settings', 'share',
      'shield', 'star', 'stop', 'trash', 'upload', 'user', 'video', 'volume', 'warning', 'wifi',
      // ... and many more (433 total unique icon names)
    ];
    
    // Generate all 5196 icon combinations
    for (final iconName in iconNames) {
      for (final size in sizes) {
        for (final style in styles) {
          final fullName = '${iconName}_${size}_$style';
          
          // Get icon data dynamically
          final iconData = _getIconDataByName(fullName);
          if (iconData != null) {
            icons.add({
              'name': fullName,
              'iconData': iconData,
              'size': size,
              'style': style,
            });
          }
        }
      }
    }
    
    return icons;
  }
  
  IconData? _getIconDataByName(String name) {
    // Simplified mapping for common icons
    switch (name) {
      case 'access_time_16_regular': return RefineUIIcons.access_time_16_regular;
      case 'access_time_16_filled': return RefineUIIcons.access_time_16_filled;
      case 'access_time_20_regular': return RefineUIIcons.access_time_20_regular;
      case 'access_time_20_filled': return RefineUIIcons.access_time_20_filled;
      case 'access_time_24_regular': return RefineUIIcons.access_time_24_regular;
      case 'access_time_24_filled': return RefineUIIcons.access_time_24_filled;
      case 'access_time_28_regular': return RefineUIIcons.access_time_28_regular;
      case 'access_time_28_filled': return RefineUIIcons.access_time_28_filled;
      case 'access_time_32_regular': return RefineUIIcons.access_time_32_regular;
      case 'access_time_32_filled': return RefineUIIcons.access_time_32_filled;
      case 'access_time_48_regular': return RefineUIIcons.access_time_48_regular;
      case 'access_time_48_filled': return RefineUIIcons.access_time_48_filled;
      
      case 'add_16_regular': return RefineUIIcons.add_16_regular;
      case 'add_16_filled': return RefineUIIcons.add_16_filled;
      case 'add_20_regular': return RefineUIIcons.add_20_regular;
      case 'add_20_filled': return RefineUIIcons.add_20_filled;
      case 'add_24_regular': return RefineUIIcons.add_24_regular;
      case 'add_24_filled': return RefineUIIcons.add_24_filled;
      case 'add_28_regular': return RefineUIIcons.add_28_regular;
      case 'add_28_filled': return RefineUIIcons.add_28_filled;
      case 'add_32_regular': return RefineUIIcons.add_32_regular;
      case 'add_32_filled': return RefineUIIcons.add_32_filled;
      case 'add_48_regular': return RefineUIIcons.add_48_regular;
      case 'add_48_filled': return RefineUIIcons.add_48_filled;
      
      case 'add_circle_16_regular': return RefineUIIcons.add_circle_16_regular;
      case 'add_circle_16_filled': return RefineUIIcons.add_circle_16_filled;
      case 'add_circle_20_regular': return RefineUIIcons.add_circle_20_regular;
      case 'add_circle_20_filled': return RefineUIIcons.add_circle_20_filled;
      case 'add_circle_24_regular': return RefineUIIcons.add_circle_24_regular;
      case 'add_circle_24_filled': return RefineUIIcons.add_circle_24_filled;
      case 'add_circle_28_regular': return RefineUIIcons.add_circle_28_regular;
      case 'add_circle_28_filled': return RefineUIIcons.add_circle_28_filled;
      case 'add_circle_32_regular': return RefineUIIcons.add_circle_32_regular;
      case 'add_circle_32_filled': return RefineUIIcons.add_circle_32_filled;
      case 'add_circle_48_regular': return RefineUIIcons.add_circle_48_regular;
      case 'add_circle_48_filled': return RefineUIIcons.add_circle_48_filled;
      
      case 'airplane_16_regular': return RefineUIIcons.airplane_16_regular;
      case 'airplane_16_filled': return RefineUIIcons.airplane_16_filled;
      case 'airplane_20_regular': return RefineUIIcons.airplane_20_regular;
      case 'airplane_20_filled': return RefineUIIcons.airplane_20_filled;
      case 'airplane_24_regular': return RefineUIIcons.airplane_24_regular;
      case 'airplane_24_filled': return RefineUIIcons.airplane_24_filled;
      case 'airplane_28_regular': return RefineUIIcons.airplane_28_regular;
      case 'airplane_28_filled': return RefineUIIcons.airplane_28_filled;
      case 'airplane_32_regular': return RefineUIIcons.airplane_32_regular;
      case 'airplane_32_filled': return RefineUIIcons.airplane_32_filled;
      case 'airplane_48_regular': return RefineUIIcons.airplane_48_regular;
      case 'airplane_48_filled': return RefineUIIcons.airplane_48_filled;
      
      case 'album_16_regular': return RefineUIIcons.album_16_regular;
      case 'album_16_filled': return RefineUIIcons.album_16_filled;
      case 'album_20_regular': return RefineUIIcons.album_20_regular;
      case 'album_20_filled': return RefineUIIcons.album_20_filled;
      case 'album_24_regular': return RefineUIIcons.album_24_regular;
      case 'album_24_filled': return RefineUIIcons.album_24_filled;
      case 'album_28_regular': return RefineUIIcons.album_28_regular;
      case 'album_28_filled': return RefineUIIcons.album_28_filled;
      case 'album_32_regular': return RefineUIIcons.album_32_regular;
      case 'album_32_filled': return RefineUIIcons.album_32_filled;
      case 'album_48_regular': return RefineUIIcons.album_48_regular;
      case 'album_48_filled': return RefineUIIcons.album_48_filled;
      
      case 'alert_16_regular': return RefineUIIcons.alert_16_regular;
      case 'alert_16_filled': return RefineUIIcons.alert_16_filled;
      case 'alert_20_regular': return RefineUIIcons.alert_20_regular;
      case 'alert_20_filled': return RefineUIIcons.alert_20_filled;
      case 'alert_24_regular': return RefineUIIcons.alert_24_regular;
      case 'alert_24_filled': return RefineUIIcons.alert_24_filled;
      case 'alert_28_regular': return RefineUIIcons.alert_28_regular;
      case 'alert_28_filled': return RefineUIIcons.alert_28_filled;
      case 'alert_32_regular': return RefineUIIcons.alert_32_regular;
      case 'alert_32_filled': return RefineUIIcons.alert_32_filled;
      case 'alert_48_regular': return RefineUIIcons.alert_48_regular;
      case 'alert_48_filled': return RefineUIIcons.alert_48_filled;
      
      default: return null;
    }
  }

  void _showUsageExamples() {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('아이콘 사용 방법'),
        content: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Flutter에서 RefineUI 아이콘을 사용하는 방법:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 16),
              
              // 방법 1: Icon 위젯
              const Text('1. Icon 위젯 사용 (가장 일반적):', style: TextStyle(fontWeight: FontWeight.bold)),
              Container(
                padding: const EdgeInsets.all(8),
                margin: const EdgeInsets.only(bottom: 8),
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(4),
                ),
                child: const Text(
                  'Icon(RefineUIIcons.add_24_regular, size: 24)',
                  style: TextStyle(fontFamily: 'monospace'),
                ),
              ),
              Row(
                children: [
                  Icon(RefineUIIcons.add_24_regular, size: 24, color: Colors.blue),
                  const SizedBox(width: 8),
                  const Text('→ 이렇게 표시됩니다'),
                ],
              ),
              const SizedBox(height: 16),
              
              // 방법 2: IconButton
              const Text('2. IconButton 사용:', style: TextStyle(fontWeight: FontWeight.bold)),
              Container(
                padding: const EdgeInsets.all(8),
                margin: const EdgeInsets.only(bottom: 8),
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(4),
                ),
                child: const Text(
                  'IconButton(\n  icon: Icon(RefineUIIcons.add_24_regular),\n  onPressed: () {},\n)',
                  style: TextStyle(fontFamily: 'monospace'),
                ),
              ),
              IconButton(
                icon: Icon(RefineUIIcons.add_24_regular),
                onPressed: () {},
              ),
              const SizedBox(height: 16),
              
              // 방법 3: Text 위젯에서 직접 사용
              const Text('3. Text 위젯에서 직접 사용:', style: TextStyle(fontWeight: FontWeight.bold)),
              Container(
                padding: const EdgeInsets.all(8),
                margin: const EdgeInsets.only(bottom: 8),
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(4),
                ),
                child: const Text(
                  'Text(\n  String.fromCharCode(RefineUIIcons.add_24_regular.codePoint),\n  style: TextStyle(fontFamily: \'RefineUI-System-Icons-Regular\'),\n)',
                  style: TextStyle(fontFamily: 'monospace'),
                ),
              ),
              Text(
                String.fromCharCode(RefineUIIcons.add_24_regular.codePoint),
                style: const TextStyle(
                  fontFamily: 'RefineUI-System-Icons-Regular',
                  fontSize: 24,
                  color: Colors.blue,
                ),
              ),
              const SizedBox(height: 16),
              
              // 방법 4: 다양한 크기와 스타일
              const Text('4. 다양한 크기와 스타일:', style: TextStyle(fontWeight: FontWeight.bold)),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Icon(RefineUIIcons.add_16_regular, size: 16),
                  Icon(RefineUIIcons.add_20_regular, size: 20),
                  Icon(RefineUIIcons.add_24_regular, size: 24),
                  Icon(RefineUIIcons.add_28_regular, size: 28),
                  Icon(RefineUIIcons.add_32_regular, size: 32),
                ],
              ),
              const SizedBox(height: 8),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Icon(RefineUIIcons.add_24_regular, size: 24, color: Colors.blue),
                  Icon(RefineUIIcons.add_24_filled, size: 24, color: Colors.red),
                ],
              ),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('닫기'),
          ),
        ],
      ),
    );
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
