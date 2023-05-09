import FeatureList from "./FeatureList";
import styled from "../styles/Components.module.css";
import styles from "../styles/Main.module.css";
import LinkList from "./LinkList";

export default function Main() {
  return (
    <main className={`${styled.container} ${styles.main}`}>
      <MainHead />
      <MainBody />
    </main>
  );
}

function MainHead() {
  return (
    <div className={styles.main_head}>
      {true ? (
        <h2 className={styles.title}>
          Hello, <i>itsjatinnagar</i>
        </h2>
      ) : (
        <>
          <h2 className={styles.title}>
            What is <i>MiniUrl</i>
            <span> ?</span>
          </h2>
          <p className={styles.description}>
            MiniUrl is an all-in-one Link Management Platform for all your links
            and needs. It is an advanced URL Shortener with extensive Link
            Analytics. MiniUrl offers solutions that will allow you to manage
            your links, thanks to which you can develop your business while
            having your links under control. MiniUrl is also a platform for
            generating QR Codes, so you can combine offline and online
            solutions.
          </p>
        </>
      )}
    </div>
  );
}

function MainBody() {
  return <>{true ? <LinkList /> : <FeatureList />}</>;
}
