import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>RefineUI React Icons - React Example</h1>
        <p>폰트 기반 아이콘 시스템을 React로 구현한 예시</p>
      </header>

      <main className="main">
        {/* 기본 테스트 */}
        <section className="preview-section">
          <h2>기본 테스트</h2>
          <div className="icon-preview">
            <div style={{ 
              fontFamily: 'RefineUI-System-Icons-Regular',
              fontSize: '48px',
              color: '#007AFF',
              border: '2px solid #ccc',
              padding: '10px',
              margin: '10px'
            }}>
              유니코드 0xF0000: {String.fromCharCode(0xF0000)}
            </div>
            <div style={{ 
              fontFamily: 'RefineUI-System-Icons-Filled',
              fontSize: '48px',
              color: '#FF3B30',
              border: '2px solid #ccc',
              padding: '10px',
              margin: '10px'
            }}>
              유니코드 0xF0000 (Filled): {String.fromCharCode(0xF0000)}
            </div>
            <div style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '48px',
              color: '#333',
              border: '2px solid #ccc',
              padding: '10px',
              margin: '10px'
            }}>
              일반 텍스트: ABC
            </div>
          </div>
          <div className="icon-info">
            <p><strong>폰트 로딩 테스트</strong></p>
            <p>위의 박스들이 어떻게 보이는지 확인해주세요.</p>
          </div>
        </section>

        {/* 간단한 정보 */}
        <section className="gallery-section">
          <h3>테스트 정보</h3>
          <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <p>이 텍스트가 보이면 React 앱이 정상적으로 작동하고 있습니다.</p>
            <p>폰트가 로드되면 위의 아이콘들이 표시될 것입니다.</p>
            <p>브라우저 개발자 도구(F12)를 열어서 Console 탭에서 오류 메시지를 확인해주세요.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
