/* @/pages/_app.tsx */

import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ReduxModalRoot from "@/components/ReduxModalRoot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ReduxModalRoot></ReduxModalRoot>
      <Component {...pageProps} />
    </Provider>
  );
}
