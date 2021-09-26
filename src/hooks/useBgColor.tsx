import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (true) {
      case /^\/post/.test(router.pathname): {
        return "mistyrose";
      }
      case /^\/users/.test(router.pathname): {
        return "lightblue";
      }
      case /^\/comments/.test(router.pathname): {
        return "beige";
      }
      case /^\/play/.test(router.pathname): {
        return "thistle";
      }
      default: {
        return "lightgray";
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
