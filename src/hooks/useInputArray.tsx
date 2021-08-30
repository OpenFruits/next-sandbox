import { useState, useCallback } from "react";

export const useInputArray = () => {
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
    if (array.some((item) => item === text)) {
      alert("同じ要素が既に存在しています");
      return;
    }
    setArray((prevArray) => [...prevArray, text]);
    setText("");
  }, [array, text]);

  return { text, array, handleChange, handleAdd };
};
