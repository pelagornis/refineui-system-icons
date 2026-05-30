import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@refineui/web-icons/dist/fonts/refineui-system-icons-regular.css';
import '@refineui/web-icons/dist/fonts/refineui-system-icons-filled.css';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
