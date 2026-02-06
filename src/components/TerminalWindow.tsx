
import React, { useState, useRef, useEffect } from 'react';

interface TerminalWindowProps {
  onNewFolder?: () => void;
  onNewDocument?: () => void;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ onNewFolder, onNewDocument }) => {
  const [history, setHistory] = useState<string[]>([
    'Windows 95 Terminal [Version 95.0]',
    'Copyright (c) 1995 Microsoft Corporation. All rights reserved.',
    'Write "help" for a list of commands.',
    'C:\\WINDOWS>'
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let output: string[] = [];

    switch (cmd) {
      case 'help':
        output = [
          'Available commands:',
          '  help     - Show this help message',
          '  dir      - List directory contents',
          '  cls      - Clear the screen',
          '  ver      - Show version information',
          '  date     - Show current date',
          '  time     - Show current time',
          '  echo     - Echo back text (usage: echo [text])',
          '  about    - About this terminal'
        ];
        break;
      case 'dir':
        output = [
          ' Volume in drive C has no label.',
          ' Directory of C:\\WINDOWS',
          '',
          '12/19/2024  12:00 PM    <DIR>          .',
          '12/19/2024  12:00 PM    <DIR>          ..',
          '12/19/2024  10:30 AM         1,024 SYSTEM.INI',
          '12/19/2024  10:30 AM         2,048 WIN.INI',
          '12/19/2024  11:15 AM    <DIR>          SYSTEM',
          '               2 File(s)          3,072 bytes',
          '               3 Dir(s)   1,234,567,890 bytes free'
        ];
        break;
      case 'cls':
        setHistory(['C:\\WINDOWS>']);
        return;
      case 'ver':
        output = ['Windows 95 [Version 4.00.950]'];
        break;
      case 'date':
        output = [new Date().toLocaleDateString()];
        break;
      case 'time':
        output = [new Date().toLocaleTimeString()];
        break;
      case 'about':
        output = [
          'Windows 95 Terminal Emulator',
          'A nostalgic trip back to the 90s!',
          'Built with React and TypeScript'
        ];
        break;
      default:
        if (cmd.startsWith('echo ')) {
          output = [cmd.substring(5)];
        } else if (cmd === '') {
          output = [];
        } else {
          output = [`'${command}' is not recognized as an internal or external command,`, 'operable program or batch file.'];
        }
    }

    setHistory(prev => [
      ...prev,
      command,
      ...output,
      'C:\\WINDOWS>'
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="bg-black text-green-400 font-mono text-sm h-full p-2 overflow-auto cursor-text"
      onClick={handleTerminalClick}
      ref={terminalRef}
    >
      {history.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-transparent border-none outline-none text-green-400 font-mono flex-1"
          autoComplete="off"
          spellCheck={false}
        />
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
};

export default TerminalWindow;
