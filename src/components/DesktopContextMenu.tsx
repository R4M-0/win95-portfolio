
import React from 'react';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from './ui/context-menu';
import { RefreshCw, Monitor, Palette, FolderPlus, FileText } from 'lucide-react';

interface DesktopContextMenuProps {
  children: React.ReactNode;
  onRefresh: () => void;
  onNewFolder: () => void;
  onNewDocument: () => void;
  onProperties: () => void;
}

const DesktopContextMenu: React.FC<DesktopContextMenuProps> = ({
  children,
  onRefresh,
  onProperties
}) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-48 bg-win95-gray border-2 border-t-win95-gray-light border-l-win95-gray-light border-r-win95-gray-darker border-b-win95-gray-darker">
        <ContextMenuItem 
          className="flex items-center gap-2 px-3 py-1 text-xs hover:bg-blue-600 hover:text-white"
          onClick={onRefresh}
        >
          <RefreshCw size={12} />
          Refresh
        </ContextMenuItem>
        <ContextMenuSeparator className="bg-win95-gray-dark h-px my-1" />
                <ContextMenuItem 
          className="flex items-center gap-2 px-3 py-1 text-xs hover:bg-blue-600 hover:text-white"
          onClick={onProperties}
        >
          <Palette size={12} />
          Properties
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default DesktopContextMenu;
