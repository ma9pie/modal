export type ModalProps = {
  key?: string;
  type?: string;
  title?: string;
  message?: string;
  btnText?: string;
  close?: () => void;
  confirm?: () => void;
  component?: () => JSX.Element;
};

export type Modals = Map<string, ModalProps>;
