import { FC, ReactElement, ReactNode, useState } from "react";
import styles from './modal.module.scss'
import React from "react";

export type TriggerProps = {
  children: ReactElement;
  modal: ReactElement;
}

export function Trigger({children, modal}: TriggerProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div onClick={() => setIsOpen(true)}>
      {children}
    </div>
    {isOpen && 
      React.cloneElement(modal as React.ReactElement, { isOpen: true, 
        onClose: () => setIsOpen(false)
      })}
    </>
  )
}

export type ModalProps = {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ className, isOpen, onClose, children}: ModalProps) => {
  if (!isOpen) return null;
        return (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                  ×
                </button>
                {children}
              </div>
            </div>
    )
}