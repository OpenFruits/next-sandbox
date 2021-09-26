// await sleep(2000)：2秒待機
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
