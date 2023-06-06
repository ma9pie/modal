/* @/components/ModalProvider.tsx */

import React, { createContext, ReactNode, useState } from "react";

import Alert from "@/components/Alert";
import Confirm from "@/components/Confirm";
import Modal from "@/components/Modal";
import { ModalProps, Modals } from "@/hooks/useContextModal";

type Props = {
  children: ReactNode;
};

export const ModalContext = createContext({
  modals: new Map(),
  setModals: (state: Modals) => {},
});

const ModalProvider = ({ children }: Props) => {
  const [modals, setModals] = useState<Modals>(new Map());

  const alertList: ModalProps[] = [];
  const confirmList: ModalProps[] = [];
  const modalList: ModalProps[] = [];

  modals.forEach((value, key) => {
    switch (value.type) {
      case "ALERT":
        alertList.push(value);
        break;
      case "CONFIRM":
        confirmList.push(value);
        break;
      default:
        modalList.push(value);
        break;
    }
  });

  return (
    <ModalContext.Provider value={{ modals, setModals }}>
      <div id="alert">
        {alertList.map((modal) => (
          <Alert key={modal.key} {...modal}></Alert>
        ))}
      </div>
      <div id="confirm">
        {confirmList.map((modal) => (
          <Confirm key={modal.key} {...modal}></Confirm>
        ))}
      </div>
      <div id="modal">
        {modalList.map((modal) => (
          <Modal key={modal.key} {...modal}></Modal>
        ))}
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
