/* @/hooks/useContextModal .tsx */

import { useContext } from "react";
import { ModalContext } from "@/components/ModalProvider";
import { ModalProps } from "@/types";

const useContextModal = () => {
  const { modals, setModals } = useContext(ModalContext);

  const openModal = (props: ModalProps) => {
    const hashMapA: Map<string, ModalProps> = new Map(modals);
    const key = Math.random().toString(36).substring(2);
    props.key = props.key || key;
    props.close = async () => {
      const hashMapB = new Map(hashMapA);
      if (props.key) {
        hashMapB.delete(props.key!);
        setModals(new Map(hashMapB));
      }
    };
    hashMapA.set(props.key, props);
    setModals(hashMapA);
  };

  const closeModal = (key?: string) => {
    const hashMap: Map<string, ModalProps> = new Map(modals);
    if (key) {
      const props = hashMap.get(key);
      if (props) {
        hashMap.delete(key);
        setModals(new Map(hashMap));
      }
      return;
    }
  };

  return {
    openModal,
    openAlert: (props: ModalProps) => openModal({ ...props, type: "ALERT" }),
    openConfirm: (props: ModalProps) =>
      openModal({ ...props, type: "CONFIRM" }),
    closeModal,
  };
};

export default useContextModal;
