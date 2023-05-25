// Modal.tsx
import { gsap } from 'gsap'
import React from 'react'

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  title: string
};

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, title = 'Modal' }) => {
  React.useEffect(() => {
    if (isOpen) {
      gsap.to('.modal', { autoAlpha: 1 });
    } else {
      gsap.to('.modal', { autoAlpha: 0 });
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-full bg-white p-4 rounded shadow-lg max-w-4xl m-auto">
        <div className='w-full flex justify-between items-center mb-8'>
          <h2 className="text-2xl">{title}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300">X</button>
        </div>

        {children}
      </div>
    </div>
  );
};