
import React from 'react';
import { FileX, Trash } from 'lucide-react';

const RecycleBinWindow = () => {
  const deletedItems = [
    { name: "failed-startup-idea.txt", size: "2KB", dateDeleted: "12/15/2024" },
    { name: "buggy-calculator.exe", size: "45KB", dateDeleted: "12/10/2024" },
    { name: "unfinished-game.zip", size: "1.2MB", dateDeleted: "12/08/2024" },
    { name: "old-resume-v1.doc", size: "28KB", dateDeleted: "12/05/2024" }
  ];

  return (
    <div className="p-4 bg-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Trash size={16} />
        <h2 className="text-lg font-bold text-win95-blue-title">Recycle Bin</h2>
      </div>
      
      <div className="text-xs mb-4 text-win95-gray-darker">
        {deletedItems.length} object(s)
      </div>

      <div className="space-y-2">
        {deletedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-2 hover:bg-blue-100 cursor-pointer">
            <FileX size={16} className="text-win95-gray-darker" />
            <div className="flex-1">
              <div className="text-xs font-medium">{item.name}</div>
              <div className="text-xs text-win95-gray-darker">
                {item.size} • Deleted: {item.dateDeleted}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default RecycleBinWindow;
