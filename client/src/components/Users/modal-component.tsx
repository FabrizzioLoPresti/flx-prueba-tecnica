/**
 * The `ModalComponent` function is a React component that renders an Ant Design modal with
 * customizable title, content, footer, and event handlers.
 * @param {Props}  - 1. `title`: The title of the modal.
 * @returns The `ModalComponent` functional component is being returned. It renders an Ant Design Modal
 * component with the specified props such as title, isOpen, handleClose function, handleOk function,
 * children, footer, destroyOnClose, and centered.
 */

import { Modal } from "antd";

type Props = {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
  handleOk: () => void;
  children: React.ReactNode;
  footer: React.ReactNode;
};

const ModalComponent = ({
  title,
  isOpen,
  handleClose,
  handleOk,
  children,
  footer,
}: Props) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleClose}
      footer={footer}
      destroyOnClose
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
