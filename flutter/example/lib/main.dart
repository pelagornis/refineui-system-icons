import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:refineui_system_icons/refineui_system_icons.dart';
import 'sample_icons.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'RefineUI System Icons Example',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'RefineUI System Icons Example'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<SampleIcon> allIcons = [];
  List<SampleIcon> filteredIcons = [];
  String selectedStyle = 'regular';
  String selectedSize = '24';
  String searchQuery = '';
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadIcons();
    });
  }

  void _loadIcons() {
    print('Loading all icons from SampleIcons...');
    
    // SampleIcons에서 모든 아이콘 가져오기
    allIcons = SampleIcons.getAllIcons();
    
    print('Loaded ${allIcons.length} icons');
    
    setState(() {
      isLoading = false;
      _filterIcons();
    });
  }

  void _filterIcons() {
    filteredIcons = allIcons.where((icon) {
      final matchesStyle = icon.style == selectedStyle;
      final matchesSize = icon.size.toString() == selectedSize;
      final matchesSearch = searchQuery.isEmpty || 
          icon.name.toLowerCase().contains(searchQuery.toLowerCase()) ||
          icon.displayName.toLowerCase().contains(searchQuery.toLowerCase());
      
      return matchesStyle && matchesSize && matchesSearch;
    }).toList();
    
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
        actions: [
          // 스타일 선택
          DropdownButton<String>(
            value: selectedStyle,
            items: ['regular', 'filled'].map((style) {
              return DropdownMenuItem(
                value: style,
                child: Text(style.toUpperCase()),
              );
            }).toList(),
            onChanged: (value) {
              setState(() {
                selectedStyle = value!;
                _filterIcons();
              });
            },
          ),
          const SizedBox(width: 16),
          // 크기 선택
          DropdownButton<String>(
            value: selectedSize,
            items: ['16', '20', '24', '28', '32', '48'].map((size) {
              return DropdownMenuItem(
                value: size,
                child: Text('${size}px'),
              );
            }).toList(),
            onChanged: (value) {
              setState(() {
                selectedSize = value!;
                _filterIcons();
              });
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // 검색 바
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              decoration: const InputDecoration(
                labelText: 'Search icons...',
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(),
              ),
              onChanged: (value) {
                setState(() {
                  searchQuery = value;
                  _filterIcons();
                });
              },
            ),
          ),
          
          // 통계 정보
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Row(
              children: [
                Text(
                  '${filteredIcons.length} icons (${selectedStyle.toUpperCase()}, ${selectedSize}px)',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                const Spacer(),
                Text(
                  'Total: ${allIcons.length}',
                  style: const TextStyle(fontSize: 14, color: Colors.grey),
                ),
              ],
            ),
          ),
          
          const SizedBox(height: 16),
          
          // 아이콘 그리드
          Expanded(
            child: isLoading
                ? const Center(child: CircularProgressIndicator())
                : filteredIcons.isEmpty
                    ? const Center(
                        child: Text(
                          'No icons found',
                          style: TextStyle(fontSize: 18, color: Colors.grey),
                        ),
                      )
                    : GridView.builder(
                        padding: const EdgeInsets.all(16.0),
                        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 6,
                          childAspectRatio: 0.8, // 카드를 더 넓게 만들어 높이 부족 문제 해결
                          crossAxisSpacing: 8,
                          mainAxisSpacing: 8,
                        ),
                        itemCount: filteredIcons.length,
                        itemBuilder: (context, index) {
                          final icon = filteredIcons[index];
                          return _buildIconCard(icon);
                        },
                      ),
          ),
        ],
      ),
    );
  }

  Widget _buildIconCard(SampleIcon icon) {
    return Card(
      elevation: 2,
      child: InkWell(
        onTap: () {
          _showIconDetails(icon);
        },
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.min,
            children: [
              // 아이콘
              Icon(
                icon.iconData,
                size: double.parse(selectedSize) * 0.8, // 아이콘 크기를 약간 줄임
                color: Theme.of(context).primaryColor,
              ),
              const SizedBox(height: 4),
              
              // 아이콘 이름
              Flexible(
                child: Text(
                  icon.displayName,
                  style: const TextStyle(fontSize: 9),
                  textAlign: TextAlign.center,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              
              // 추가 정보
              Flexible(
                child: Text(
                  '${icon.size}px ${icon.style}',
                  style: const TextStyle(fontSize: 7, color: Colors.grey),
                  textAlign: TextAlign.center,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _showIconDetails(SampleIcon icon) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(icon.displayName),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            // 큰 아이콘
            Icon(
              icon.iconData,
              size: 64,
              color: Theme.of(context).primaryColor,
            ),
            const SizedBox(height: 16),
            
            // 정보 테이블
            Table(
              columnWidths: const {
                0: FlexColumnWidth(1),
                1: FlexColumnWidth(2),
              },
              children: [
                TableRow(children: [
                  const Text('Name:', style: TextStyle(fontWeight: FontWeight.bold)),
                  Text(icon.name),
                ]),
                TableRow(children: [
                  const Text('Size:', style: TextStyle(fontWeight: FontWeight.bold)),
                  Text('${icon.size}px'),
                ]),
                TableRow(children: [
                  const Text('Style:', style: TextStyle(fontWeight: FontWeight.bold)),
                  Text(icon.style),
                ]),
                TableRow(children: [
                  const Text('Unicode:', style: TextStyle(fontWeight: FontWeight.bold)),
                  Text('0x${icon.iconData.codePoint.toRadixString(16).toUpperCase()}'),
                ]),
                TableRow(children: [
                  const Text('Font:', style: TextStyle(fontWeight: FontWeight.bold)),
                  Text(icon.iconData.fontFamily ?? ''),
                ]),
              ],
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Close'),
          ),
          ElevatedButton(
            onPressed: () {
              // 코드 복사 기능 (실제로는 클립보드에 복사)
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text('Icon code copied: ${icon.name}_${icon.size}_${icon.style}'),
                ),
              );
              Navigator.of(context).pop();
            },
            child: const Text('Copy Code'),
          ),
        ],
      ),
    );
  }
}
