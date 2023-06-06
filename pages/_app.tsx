/* @/pages/_app.tsx */

import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import RecoilModalRoot from "@/components/RecoilModalRoot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilModalRoot></RecoilModalRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
