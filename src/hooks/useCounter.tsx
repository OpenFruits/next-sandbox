import { useState, useCallback } from "react";

export type Counter = {
  count: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
};

export const useCounter = (): Counter => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
