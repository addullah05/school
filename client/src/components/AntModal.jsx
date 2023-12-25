import React, { Children, useState } from "react";
import { Button, Modal } from "antd";
const AntModal = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button
        type="primary"
        style={{ float: "right", marginTop: "14px" }}
        onClick={() => setModalOpen(true)}
      >
        Add School
      </Button>          
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        {children}
      </Modal>
    </>
  );
};
export default AntModal;
