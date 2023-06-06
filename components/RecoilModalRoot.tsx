/* @/components/ReduxModalRoot.tsx */

import React from "react";
import Modal from "@/components/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "@/recoil/atoms";

const RecoilModalRoot = () => {
  const modals = useRecoilValue(modalState);
  return (
    <div id="recoil-modal">
      {modals.map((modal) => (
        <Modal key={modal.key} {...modal}></Modal>
      ))}
    </div>
  );
};

export default RecoilModalRoot;
