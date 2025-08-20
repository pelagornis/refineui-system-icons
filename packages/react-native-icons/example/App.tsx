import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import { Icon } from '../src/Icon';

const { width } = Dimensions.get('window');

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState('add');
  const [selectedSize, setSelectedSize] = useState(24);
  const [selectedStyle, setSelectedStyle] = useState<'regular' | 'filled'>('regular');

  const iconNames = [
    'add', 'home', 'settings', 'heart', 'star', 'search', 
    'user', 'mail', 'phone', 'camera', 'folder', 'file',
    'edit', 'delete', 'share', 'download', 'upload', 'refresh'
  ];

  const sizes = [16, 20, 24, 28, 32, 48];

  const handleIconPress = (iconName: string) => {
    setSelectedIcon(iconName);
    Alert.alert('아이콘 선택', `${iconName} 아이콘이 선택되었습니다.`);
  };

  const handleSizePress = (size: number) => {
    setSelectedSize(size);
  };

  const handleStylePress = (style: 'regular' | 'filled') => {
    setSelectedStyle(style);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>RefineUI React Native Icons - 테스트</Text>
        
        {/* 선택된 아이콘 미리보기 */}
        <View style={styles.previewContainer}>
          <Text style={styles.sectionTitle}>선택된 아이콘</Text>
          <View style={styles.iconPreview}>
            <Icon
              name={selectedIcon}
              size={selectedSize}
              style={selectedStyle}
              color="#007AFF"
              onPress={() => Alert.alert('아이콘 클릭', `${selectedIcon} 아이콘이 클릭되었습니다.`)}
            />
          </View>
          <Text style={styles.iconInfo}>
            {selectedIcon} - {selectedSize}px, {selectedStyle}
          </Text>
        </View>

        {/* 크기 선택 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>크기 선택</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((size) => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeButton,
                  selectedSize === size && styles.sizeButtonActive
                ]}
                onPress={() => handleSizePress(size)}
              >
                <Text style={[
                  styles.sizeButtonText,
                  selectedSize === size && styles.sizeButtonTextActive
                ]}>
                  {size}px
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 스타일 선택 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>스타일 선택</Text>
          <View style={styles.styleContainer}>
            <TouchableOpacity
              style={[
                styles.styleButton,
                selectedStyle === 'regular' && styles.styleButtonActive
              ]}
              onPress={() => handleStylePress('regular')}
            >
              <Icon
                name="circle"
                size={20}
                style="regular"
                color={selectedStyle === 'regular' ? '#007AFF' : '#666'}
              />
              <Text style={[
                styles.styleButtonText,
                selectedStyle === 'regular' && styles.styleButtonTextActive
              ]}>
                Regular
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.styleButton,
                selectedStyle === 'filled' && styles.styleButtonActive
              ]}
              onPress={() => handleStylePress('filled')}
            >
              <Icon
                name="circle"
                size={20}
                style="filled"
                color={selectedStyle === 'filled' ? '#007AFF' : '#666'}
              />
              <Text style={[
                styles.styleButtonText,
                selectedStyle === 'filled' && styles.styleButtonTextActive
              ]}>
                Filled
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 아이콘 갤러리 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>아이콘 갤러리</Text>
          <View style={styles.iconGrid}>
            {iconNames.map((iconName) => (
              <TouchableOpacity
                key={iconName}
                style={[
                  styles.iconItem,
                  selectedIcon === iconName && styles.iconItemActive
                ]}
                onPress={() => handleIconPress(iconName)}
              >
                <Icon
                  name={iconName}
                  size={24}
                  style={selectedStyle}
                  color={selectedIcon === iconName ? '#007AFF' : '#333'}
                />
                <Text style={[
                  styles.iconName,
                  selectedIcon === iconName && styles.iconNameActive
                ]}>
                  {iconName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 다양한 크기 예시 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>다양한 크기 예시</Text>
          <View style={styles.sizeExampleContainer}>
            {sizes.map((size) => (
              <View key={size} style={styles.sizeExample}>
                <Icon
                  name={selectedIcon}
                  size={size}
                  style={selectedStyle}
                  color="#333"
                />
                <Text style={styles.sizeExampleText}>{size}px</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 스타일링 예시 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>스타일링 예시</Text>
          <View style={styles.stylingExamples}>
            <View style={styles.stylingExample}>
              <Icon
                name="heart"
                size={32}
                style="filled"
                color="#FF3B30"
                backgroundColor="#FFE5E5"
                borderRadius={8}
                padding={8}
              />
              <Text style={styles.stylingExampleText}>색상 + 배경</Text>
            </View>
            
            <View style={styles.stylingExample}>
              <Icon
                name="star"
                size={32}
                style="filled"
                color="#FFD700"
                backgroundColor="#FFF8DC"
                borderRadius={16}
                padding={8}
              />
              <Text style={styles.stylingExampleText}>둥근 배경</Text>
            </View>
            
            <View style={styles.stylingExample}>
              <Icon
                name="settings"
                size={32}
                style="regular"
                color="#007AFF"
                backgroundColor="#E3F2FD"
                borderRadius={4}
                padding={12}
              />
              <Text style={styles.stylingExampleText}>패딩 + 테두리</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  previewContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconPreview: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 10,
  },
  iconInfo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  sizeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sizeButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  sizeButtonText: {
    fontSize: 14,
    color: '#666',
  },
  sizeButtonTextActive: {
    color: 'white',
  },
  styleContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  styleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    gap: 8,
  },
  styleButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  styleButtonText: {
    fontSize: 14,
    color: '#666',
  },
  styleButtonTextActive: {
    color: 'white',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  iconItem: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    width: (width - 70) / 4,
  },
  iconItemActive: {
    borderColor: '#007AFF',
    backgroundColor: '#F0F8FF',
  },
  iconName: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  iconNameActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
  sizeExampleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  sizeExample: {
    alignItems: 'center',
  },
  sizeExampleText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  stylingExamples: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },
  stylingExample: {
    alignItems: 'center',
  },
  stylingExampleText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default App;
