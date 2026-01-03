import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-float">
      <div className="glass-panel px-6 py-4 rounded-xl flex items-center gap-3 border-l-4 border-l-cyan-400 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <CheckCircle className="w-6 h-6 text-cyan-400" />
        <div>
          <h4 className="font-bold text-white text-sm">Success</h4>
          <p className="text-white/80 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;