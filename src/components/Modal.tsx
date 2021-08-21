import React, { useRef } from 'react';
import { useOutsideAlerter } from '../hooks';
interface ModalProps {
    active: boolean;
    closeHandler: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ active, closeHandler, children }) => {
    const modalContentRef = useRef<HTMLDivElement | null>(null);
    useOutsideAlerter(modalContentRef, () => closeHandler());

    if (!active) return null;

    return (
        <div id="myModal" className="modal">
            <div className="modal-content" ref={modalContentRef}>
                <span className="close" onClick={() => closeHandler()}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};
