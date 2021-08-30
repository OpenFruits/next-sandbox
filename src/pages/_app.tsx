import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // document.body.style.color === "red";
  const [state] = useState();

  useEffect(() => {
    if (state) return;
  }, [state]);

  return <Component {...pageProps} />;
}
export default MyApp;
