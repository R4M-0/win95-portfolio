import React from 'react';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuClick: (item: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose, onMenuClick }) => {
  if (!isOpen) return null;

  const handleShutdown = () => {
    if (window.confirm('Are you sure you want to shut down Windows?')) {
      window.close();
      window.location.href = 'about:blank';
    }
  };

  const menuItems = [
    { icon: "/icons/user.ico", label: 'About Me', id: 'about' },
    { icon: "/icons/Folder.ico", label: 'My Projects', id: 'projects' },
    { icon: "/icons/terminal.ico", label: 'Terminal', id: 'terminal' },
    { icon: "/icons/Letter.ico", label: 'Contact', id: 'contact' },
    { icon: "/icons/shutdown.ico", label: 'Shut Down...', id: 'shutdown', action: handleShutdown }
  ];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-20" onClick={onClose} />

      {/* Menu */}
      <div className="fixed bottom-8 left-0 z-30 w-64 bg-win95-gray border-2 border-t-win95-gray-light border-l-win95-gray-light border-r-win95-gray-darker border-b-win95-gray-darker">
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-win95-blue-title to-blue-600 text-white px-2 py-1 text-xs font-bold flex items-center gap-2">
          <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center overflow-hidden">
            <img src="/icons/win95.ico" alt="Win95" className="w-full h-full object-contain" />
          </div>
          Windows 95
        </div>


        {/* Menu Items */}
        <div className="p-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-blue-600 hover:text-white text-xs"
              onClick={() => {
                if (item.action) {
                  item.action();
                } else {
                  onMenuClick(item.id);
                }
                onClose();
              }}
            >
              <img src={item.icon} alt={item.label} className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default StartMenu;
