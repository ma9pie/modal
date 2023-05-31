/* @/components/Portal.tsx */

import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

const Portal = ({ children }: Props) => {
  const node = document.getElementById("modal") as HTMLElement;

  return createPortal(children, node);
};

export default Portal;
