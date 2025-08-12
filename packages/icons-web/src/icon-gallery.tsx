import React, { useState, useEffect } from 'react';
import { IconGalleryProps, IconInfo } from './types';

export const IconGallery: React.FC<IconGalleryProps> = ({ 
  icons, 
  onIconClick, 
  searchTerm = '' 
}) => {
  const [filteredIcons, setFilteredIcons] = useState<IconInfo[]>(icons);
  const [selectedIcon, setSelectedIcon] = useState<IconInfo | null>(null);

  useEffect(() => {
    const filtered = icons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIcons(filtered);
  }, [icons, searchTerm]);

  const handleIconClick = (icon: IconInfo) => {
    setSelectedIcon(icon);
    onIconClick?.(icon);
  };

  return (
    <div className="icon-gallery">
      <div className="icon-grid">
        {filteredIcons.map((icon) => (
          <div
            key={`${icon.slug}-${icon.size}`}
            className="icon-item"
            onClick={() => handleIconClick(icon)}
          >
            <div className="icon-preview">
              <img 
                src={icon.url} 
                alt={icon.name}
                width={icon.size}
                height={icon.size}
              />
            </div>
            <div className="icon-info">
              <div className="icon-name">{icon.name}</div>
              <div className="icon-slug">{icon.slug}</div>
              <div className="icon-size">{icon.size}px</div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedIcon && (
        <div className="icon-modal">
          <div className="modal-content">
            <h3>{selectedIcon.name}</h3>
            <div className="icon-display">
              <img 
                src={selectedIcon.url} 
                alt={selectedIcon.name}
                width={selectedIcon.size * 2}
                height={selectedIcon.size * 2}
              />
            </div>
            <div className="icon-details">
              <p><strong>Slug:</strong> {selectedIcon.slug}</p>
              <p><strong>Size:</strong> {selectedIcon.size}px</p>
              <p><strong>URL:</strong> {selectedIcon.url}</p>
            </div>
            <button onClick={() => setSelectedIcon(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
