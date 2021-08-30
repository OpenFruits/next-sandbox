import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // cleanup function：初回マウント以降、先に呼ばれる
      document.body.style.backgroundColor = "";
    };
  }, []);
};
