import React, { useState, useEffect } from 'react';
import { Computer, Trash2, Folder, FileText, User } from 'lucide-react';

interface DesktopIconProps {
  name: string;
  icon: 'computer' | 'trash' | 'folder' | 'file' | 'user' | 'terminal' | 'image' | 'pdf';
  onClick: () => void;
  position: { x: number; y: number };
  onPositionChange: (position: { x: number; y: number }) => void;
}

// Map icon names to either Lucide components or .ico image paths in public/icons
const iconMap: Record<string, React.ElementType | string> = {
  computer: '/icons/computer.ico',
  trash: '/icons/trash.ico',
  folder: '/icons/Folder.ico',
  file: '/icons/pdf.ico',
  user: '/icons/user.ico',
  terminal: '/icons/terminal.ico',
  image: '/icons/image.ico',
  pdf: '/icons/pdf.ico'
};

const DesktopIcon: React.FC<DesktopIconProps> = ({
  name,
  icon,
  onClick,
  position,
  onPositionChange
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const Icon = iconMap[icon];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      onPositionChange({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleIconClick = () => {
    if (icon === 'pdf') {
      window.open(
        'https://drive.google.com/file/d/1BENe96isIDsIRc3YKiEHe0fNm1tvGjN-/view?usp=drive_link',
        '_blank'
      );
    } else {
      onClick();
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      className="win95-desktop-icon absolute select-none cursor-move"
      style={{ left: position.x, top: position.y }}
      onDoubleClick={handleIconClick}
      onMouseDown={handleMouseDown}
    >
      {icon === 'image' ? (
        <img src="/Omar Chiboub.jpg" alt={name} className="w-8 h-8 object-cover mb-1" />
      ) : typeof Icon === 'string' ? (
        <img src={Icon} alt={name} className="w-8 h-8 object-contain mb-1" />
      ) : (
        <Icon size={32} className="mb-1" />
      )}
      <span className="text-center text-white text-xs font-system leading-tight">
        {name}
      </span>
    </div>
  );
};

export default DesktopIcon;
