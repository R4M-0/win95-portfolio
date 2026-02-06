import React, { useState, useEffect } from 'react';
import DesktopIcon from '../components/DesktopIcon';
import Win95Window from '../components/Win95Window';
import StartMenu from '../components/StartMenu';
import DesktopContextMenu from '../components/DesktopContextMenu';
import ProjectsWindow from '../components/ProjectsWindow';
import RecycleBinWindow from '../components/RecycleBinWindow';
import AboutWindow from '../components/AboutWindow';
import ContactWindow from '../components/ContactWindow';
import TerminalWindow from '../components/TerminalWindow';
import PropertiesDialog from '../components/PropertiesDialog';
import ImageWindowContent from '../components/ImageWindowContent';

const Index = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [backgroundColor, setBackgroundColor] = useState('#008080');
  const [folderCount, setFolderCount] = useState(0);
  const [documentCount, setDocumentCount] = useState(0);

  const [iconPositions, setIconPositions] = useState({
    computer: { x: 20, y: 20 },
    about: { x: 20, y: 120 },
    projects: { x: 20, y: 220 },
    terminal: { x: 140, y: 220 },
    recycle: { x: 20, y: 520 },
    omar: { x: 140, y: 20 },
    cv: { x: 140, y: 120 }
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindow = (windowId: string) => {
    if (windowId === 'cv') {
      window.open('https://drive.google.com/file/d/1HeMdRYy25VvECIvwY2jxa57rLBSy1Xl9/view?usp=sharing', '_blank');
      return;
    }
    if (windowId === 'omar') {
      setImageOpen(true);
      return;
    }
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
  };

  const minimizeWindow = (windowId: string) => {
    if (!minimizedWindows.includes(windowId)) {
      setMinimizedWindows([...minimizedWindows, windowId]);
    }
  };

  const restoreWindow = (windowId: string) => {
    setMinimizedWindows(prev => prev.filter(id => id !== windowId));
  };

  const handleStartMenuClick = (item: string) => {
    openWindow(item);
  };

  const updateIconPosition = (iconId: string, position: { x: number; y: number }) => {
    setIconPositions(prev => ({ ...prev, [iconId]: position }));
  };

  const handleNewFolder = () => {
    setFolderCount(prev => prev + 1);
    console.log(`New Folder ${folderCount + 1} created`);
  };

  const handleNewDocument = () => {
    setDocumentCount(prev => prev + 1);
    console.log(`New Text Document ${documentCount + 1} created`);
  };

  const handleRefresh = () => window.location.reload();
  const handleProperties = () => setPropertiesOpen(true);
  const handleBackgroundChange = (color: string) => setBackgroundColor(color);

  const desktopIcons = [
    { name: 'My Computer', icon: 'computer' as const, id: 'computer' },
    { name: 'My Projects', icon: 'folder' as const, id: 'projects' },
    { name: 'Recycle Bin', icon: 'trash' as const, id: 'recycle' },
    { name: 'About Me', icon: 'user' as const, id: 'about' },
    { name: 'Terminal', icon: 'terminal' as const, id: 'terminal' },
    { name: 'Omar Chiboub', icon: 'image' as const, id: 'omar' },
    { name: 'My CV', icon: 'pdf' as const, id: 'cv' }
  ];

  const renderWindow = (windowId: string) => {
    const isMinimized = minimizedWindows.includes(windowId);
    if (isMinimized) return null;

    const windowProps = {
      onClose: () => closeWindow(windowId),
      onMinimize: () => minimizeWindow(windowId),
      isActive: true,
      initialPosition: {
        x: 50 + openWindows.indexOf(windowId) * 30,
        y: 50 + openWindows.indexOf(windowId) * 30
      }
    };

    switch (windowId) {
      case 'projects':
        return (
          <Win95Window key={windowId} title="My Projects" {...windowProps} width="500px" height="400px">
            <ProjectsWindow />
          </Win95Window>
        );
      case 'recycle':
        return (
          <Win95Window key={windowId} title="Recycle Bin" {...windowProps} width="450px" height="350px">
            <RecycleBinWindow />
          </Win95Window>
        );
      case 'about':
        return (
          <Win95Window key={windowId} title="About Me" {...windowProps} width="400px" height="400px">
            <AboutWindow />
          </Win95Window>
        );
      case 'contact':
        return (
          <Win95Window key={windowId} title="Contact" {...windowProps} width="400px" height="450px">
            <ContactWindow />
          </Win95Window>
        );
      case 'terminal':
        return (
          <Win95Window key={windowId} title="Terminal" {...windowProps} width="600px" height="400px">
            <TerminalWindow onNewFolder={handleNewFolder} onNewDocument={handleNewDocument} />
          </Win95Window>
        );
      default:
        return null;
    }
  };

  return (
    <DesktopContextMenu
      onRefresh={handleRefresh}
      onNewFolder={handleNewFolder}
      onNewDocument={handleNewDocument}
      onProperties={handleProperties}
    >
      <div className="h-screen w-screen font-system overflow-hidden relative" style={{ backgroundColor }}>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px),
              repeating-linear-gradient(-45deg, transparent, transparent 2px, white 2px, white 4px)
            `
          }}
        />

        {/* Desktop Icons */}
        {desktopIcons.map(icon => (
          <DesktopIcon
            key={icon.id}
            name={icon.name}
            icon={icon.icon}
            position={iconPositions[icon.id as keyof typeof iconPositions]}
            onClick={() => openWindow(icon.id)}
            onPositionChange={(pos) => updateIconPosition(icon.id, pos)}
          />
        ))}

        {/* Regular Windows */}
        {openWindows.map(renderWindow)}

        {/* Image Viewer Window */}
        {imageOpen && (
          <Win95Window
            title="Omar Chiboub.jpg"
            width="500px"
            height="400px"
            onClose={() => setImageOpen(false)}
            onMinimize={() => minimizeWindow('omar')}
          >
            <ImageWindowContent imageSrc="Omar Chiboub.jpg" altText="Omar Chiboub" />
          </Win95Window>
        )}

        {/* Properties Dialog */}
        <PropertiesDialog
          isOpen={propertiesOpen}
          onClose={() => setPropertiesOpen(false)}
          onBackgroundChange={handleBackgroundChange}
          currentBackground={backgroundColor}
        />

        {/* Start Menu */}
        <StartMenu
          isOpen={startMenuOpen}
          onClose={() => setStartMenuOpen(false)}
          onMenuClick={handleStartMenuClick}
        />

        {/* Taskbar */}
        <div className="win95-taskbar absolute bottom-0 left-0 right-0">
          <button
            className="win95-start-button"
            onClick={() => setStartMenuOpen(!startMenuOpen)}
          >
            <div className="w-4 h-4 bg-win95-blue-title rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">⊞</span>
            </div>
            Start
          </button>

          <div className="flex gap-1 ml-2">
            {openWindows.map(windowId => (
              <button
                key={windowId}
                className={`px-3 py-1 text-xs border ${
                  minimizedWindows.includes(windowId)
                    ? 'bg-win95-gray'
                    : 'bg-win95-gray-light border-inset'
                }`}
                onClick={() =>
                  minimizedWindows.includes(windowId)
                    ? restoreWindow(windowId)
                    : minimizeWindow(windowId)
                }
              >
                {windowId === 'projects' && 'My Projects'}
                {windowId === 'recycle' && 'Recycle Bin'}
                {windowId === 'about' && 'About Me'}
                {windowId === 'terminal' && 'Terminal'}
                {windowId === 'omar' && 'Omar Chiboub'}
              </button>
            ))}
            {minimizedWindows.includes('omar') && (
              <button
                className="px-3 py-1 text-xs border bg-win95-gray-light border-inset"
                onClick={() => restoreWindow('omar')}
              >
                Omar Chiboub
              </button>
            )}
          </div>

          {/* Clock */}
          <div className="ml-auto mr-2 text-xs text-black bg-win95-gray px-2 py-1 border border-win95-gray-dark border-inset">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </DesktopContextMenu>
  );
};

export default Index;
