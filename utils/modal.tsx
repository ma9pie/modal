/* @/utils/modal.tsx */
import ReactDOM from "react-dom/client";

import Alert from "@/components/Alert";

type Props = {
  isOpen?: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  component?: () => JSX.Element;
};

const modal = {
  open: (Component: (props: Props) => JSX.Element, props: Props) => {
    const defaultProps = {
      isOpen: true,
      close: () => {},
    };
    const container = document.getElementById("modal");
    if (!container) return;
    const root = ReactDOM.createRoot(container);

    defaultProps.close = () => {
      defaultProps.isOpen = false;
      root.unmount();
    };

    defaultProps.isOpen = true;
    root.render(<Component {...defaultProps} {...props}></Component>);
  },

  // alert
  openAlert: (props: Props) => {
    modal.open(Alert, props);
  },
};

export default modal;
