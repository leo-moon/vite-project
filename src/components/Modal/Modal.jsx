import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import './modal.css';

export default function Modal({ children, open }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modalRef}>{children}</dialog>,
    document.getElementById('modal')
  );
}
