import React, { useState } from 'react';
import Win95Window from './Win95Window';

interface PropertiesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onBackgroundChange: (color: string) => void;
  currentBackground: string;
}

const PropertiesDialog: React.FC<PropertiesDialogProps> = ({
  isOpen,
  onClose,
  onBackgroundChange,
  currentBackground
}) => {
  const [selectedColor, setSelectedColor] = useState(currentBackground);
  const [customColor, setCustomColor] = useState('#008080'); // Default custom

  if (!isOpen) return null;

  const backgroundOptions = [
    { name: 'Teal (Default)', value: '#008080' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#008000' },
    { name: 'Purple', value: '#800080' },
    { name: 'Maroon', value: '#800000' },
    { name: 'Navy', value: '#000080' },
    { name: 'Gray', value: '#808080' },
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Custom Color', value: 'custom' }
  ];

  const handleConfirm = () => {
    onBackgroundChange(selectedColor === 'custom' ? customColor : selectedColor);
    onClose();
  };

  return (
    <Win95Window
      title="Display Properties"
      onClose={onClose}
      width="350px"
      height="420px"
      initialPosition={{ x: 200, y: 150 }}
    >
      <div className="p-2">
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2">Background</h3>
          <div className="grid grid-cols-2 gap-2">
            {backgroundOptions.map((option) => (
              <button
                key={option.value}
                className={`p-2 text-xs border-2 flex items-center gap-2 ${
                  selectedColor === option.value
                    ? 'border-blue-600 bg-blue-100'
                    : 'border-win95-gray-dark bg-win95-gray hover:bg-win95-gray-light'
                }`}
                onClick={() => setSelectedColor(option.value)}
              >
                <div
                  className="w-4 h-4 border border-black"
                  style={{
                    backgroundColor:
                      option.value === 'custom' ? customColor : option.value
                  }}
                />
                {option.name}
              </button>
            ))}
          </div>

          {/* Show color picker if "Custom" is selected */}
          {selectedColor === 'custom' && (
            <div className="mt-4 flex items-center gap-2 text-xs">
              <label htmlFor="customColor">Choose color:</label>
              <input
                id="customColor"
                type="color"
                value={customColor}
                onChange={(e) => setCustomColor(e.target.value)}
                className="border border-black"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button className="win95-button" onClick={handleConfirm}>
            OK
          </button>
          <button className="win95-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Win95Window>
  );
};

export default PropertiesDialog;
