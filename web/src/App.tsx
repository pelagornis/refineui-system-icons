import { useMemo, useState } from 'react';
import { IconCdnDemo } from './demos/IconCdnDemo';
import { ReactIconsDemo } from './demos/ReactIconsDemo';
import { ReactNativeIconsDemo } from './demos/ReactNativeIconsDemo';
import { WebIconsDemo } from './demos/WebIconsDemo';
import { ICON_SIZES, SAMPLE_ICONS, type IconStyle } from './sample-icons';

type TabId = 'web-icons' | 'react-icons' | 'react-native-icons' | 'icon-cdn';

const TABS: { id: TabId; label: string; description: string }[] = [
  {
    id: 'web-icons',
    label: '@refineui/web-icons',
    description: 'createIconHTML 기반 폰트 아이콘 HTML 문자열',
  },
  {
    id: 'react-icons',
    label: '@refineui/react-icons',
    description: 'React span 컴포넌트 + 아이콘 폰트',
  },
  {
    id: 'react-native-icons',
    label: '@refineui/react-native-icons',
    description: 'react-native-web으로 Text 컴포넌트 렌더링',
  },
  {
    id: 'icon-cdn',
    label: '@refineui/icon-cdn',
    description: 'SVG CDN URL — 기본은 로컬 packages/icon-cdn/icons (원격 CDN은 배포 URL 미갱신 시 404 가능)',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('web-icons');
  const [size, setSize] = useState<number>(24);
  const [style, setStyle] = useState<IconStyle>('regular');
  const [color, setColor] = useState('#2563eb');
  const [useRemoteCdn, setUseRemoteCdn] = useState(false);

  const activePanel = useMemo(
    () => TABS.find((tab) => tab.id === activeTab)!,
    [activeTab]
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>RefineUI Web Playground</h1>
        <p>web-icons, react-icons, react-native-icons, icon-cdn 패키지를 한 곳에서 테스트합니다.</p>
      </header>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="size">Size</label>
          <select id="size" value={size} onChange={(e) => setSize(Number(e.target.value))}>
            {ICON_SIZES.map((value) => (
              <option key={value} value={value}>
                {value}px
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="style">Style</label>
          <select
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value as IconStyle)}
          >
            <option value="regular">regular</option>
            <option value="filled">filled</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        {activeTab === 'icon-cdn' && (
          <div className="control-group">
            <label htmlFor="remote-cdn">
              <input
                id="remote-cdn"
                type="checkbox"
                checked={useRemoteCdn}
                onChange={(e) => setUseRemoteCdn(e.target.checked)}
              />
              원격 CDN 사용
            </label>
          </div>
        )}
      </div>

      <nav className="tabs" aria-label="패키지 탭">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="panel">
        <h2>{activePanel.label}</h2>
        <p className="panel-desc">{activePanel.description}</p>

        <div className="icon-grid">
          {SAMPLE_ICONS.map((icon) => (
            <article key={icon.id} className="icon-card">
              {activeTab === 'web-icons' && (
                <WebIconsDemo iconId={icon.id} size={size} style={style} color={color} />
              )}
              {activeTab === 'react-icons' && (
                <ReactIconsDemo iconId={icon.id} size={size} style={style} color={color} />
              )}
              {activeTab === 'react-native-icons' && (
                <ReactNativeIconsDemo iconId={icon.id} size={size} style={style} color={color} />
              )}
              {activeTab === 'icon-cdn' && (
                <IconCdnDemo
                  iconId={icon.id}
                  size={size}
                  style={style}
                  useRemoteCdn={useRemoteCdn}
                />
              )}
              <span className="icon-label">{icon.label}</span>
              {activeTab !== 'icon-cdn' && (
                <span className="icon-meta">
                  {icon.id} · {size}px · {style}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
