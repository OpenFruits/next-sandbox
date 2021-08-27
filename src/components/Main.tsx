import { VFC } from "react";
import { Headine } from "./Headline";
import { Links } from "./Links";
import styles from "../../styles/Home.module.css";

type Props = {
  page: string;
};

export const Main: VFC<Props> = (props) => {
  return (
    <main className={styles.main}>
      <Headine page={props.page} />
      <Links />
    </main>
  );
};
