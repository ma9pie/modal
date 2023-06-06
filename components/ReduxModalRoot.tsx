/* @/components/ReduxModalRoot.tsx */

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import Modal from "@/components/Modal";

const ReduxModalRoot = () => {
  const modals = useAppSelector((state) => state.modal);
  return (
    <div id="redux-modal">
      {modals.map((modal) => (
        <Modal key={modal.key} {...modal}></Modal>
      ))}
    </div>
  );
};

export default ReduxModalRoot;
