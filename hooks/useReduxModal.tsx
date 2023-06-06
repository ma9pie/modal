/* @/hooks/useReduxModal.tsx */

import { modalActions } from "@/redux/modal";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { ModalProps } from "@/types";

const useReduxModal = () => {
  const dispatch = useAppDispatch();
  const modals = useAppSelector((state) => state.modal);

  const openModal = (props: ModalProps) => {
    const key = Math.random().toString(36).substring(2);
    const nextProps = {
      key,
      close: () => dispatch(modalActions.setState([...modals])),
      ...props,
    };
    dispatch(modalActions.setState([...modals].concat(nextProps)));
  };

  return { openModal };
};

export default useReduxModal;
