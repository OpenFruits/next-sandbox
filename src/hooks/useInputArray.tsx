/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";

export type InputArray = {
  text: string;
  array: string[];
  handleChange: (e: any) => void;
  handleAdd: () => void;
};

export const useInputArray = (): InputArray => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    if (text === "") {
      alert("入力してください");
      return;
    }
    if (array.includes(text)) {
      alert("同じ要素が既に存在しています");
      return;
    }
    setArray((prevArray) => [...prevArray, text]);
    setText("");
  }, [array, text]);

  return { text, array, handleChange, handleAdd };
};
