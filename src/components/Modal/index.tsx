import React from "react";
import { Modal } from "react-bootstrap";

interface IModalWindowProps {
  children?: any;
  isOpen?: boolean | undefined;
  onClose: () => void;
}

const ModalWindow: React.SFC<IModalWindowProps> = ({ children, isOpen, onClose }) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      {children}
    </Modal>
  );
};

export default ModalWindow;
