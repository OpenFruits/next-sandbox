import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      case "/advance": {
        return "mistyrose";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      // cleanup function：初回マウント以降、先に呼ばれる
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
