/* @/pages/_app.tsx */

import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ModalProvider from "@/components/ModalProvider";
import { RecoilRoot } from "recoil";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ReduxModalRoot from "@/components/ReduxModalRoot";
import RecoilModalRoot from "@/components/RecoilModalRoot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <ReduxModalRoot></ReduxModalRoot>
        <RecoilModalRoot></RecoilModalRoot>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </RecoilRoot>
    </Provider>
  );
}
