
import React, { useState } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface Win95WindowProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  isActive?: boolean;
  initialPosition?: { x: number; y: number };
  width?: string;
  height?: string;
}

const Win95Window: React.FC<Win95WindowProps> = ({
  title,
  children,
  onClose,
  onMinimize,
  isActive = true,
  initialPosition = { x: 100, y: 100 },
  width = "400px",
  height = "300px"
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isMaximized, setIsMaximized] = useState(false);
  const [previousState, setPreviousState] = useState({ position: initialPosition, width, height });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return; // Don't allow dragging when maximized
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore to previous state
      setPosition(previousState.position);
      setIsMaximized(false);
    } else {
      // Save current state and maximize
      setPreviousState({ position, width, height });
      setPosition({ x: 0, y: 0 });
      setIsMaximized(true);
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const windowStyle = isMaximized 
    ? { left: 0, top: 0, width: '100vw', height: 'calc(100vh - 32px)' }
    : { left: position.x, top: position.y, width, height };

  return (
    <div
      className="win95-window fixed animate-window-open z-10"
      style={windowStyle}
    >
      {/* Title Bar */}
      <div
        className={`win95-title-bar ${!isActive ? 'inactive' : ''} ${!isMaximized ? 'cursor-move' : 'cursor-default'}`}
        onMouseDown={handleMouseDown}
      >
        <span>{title}</span>
        <div className="flex items-center gap-1">
          <button 
            className="w-4 h-4 bg-win95-gray border border-win95-gray-dark flex items-center justify-center hover:bg-win95-gray-light"
            onClick={onMinimize}
            title="Minimize"
          >
            <Minus size={8} />
          </button>
          <button 
            className="w-4 h-4 bg-win95-gray border border-win95-gray-dark flex items-center justify-center hover:bg-win95-gray-light"
            onClick={handleMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            <Square size={6} />
          </button>
          <button 
            className="w-4 h-4 bg-win95-gray border border-win95-gray-dark flex items-center justify-center hover:bg-red-400"
            onClick={onClose}
            title="Close"
          >
            <X size={8} />
          </button>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-2 bg-win95-gray h-full overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Win95Window;
