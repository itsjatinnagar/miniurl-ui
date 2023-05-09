import { ReactComponent as IconGraph } from "../images/icon-graph.svg";
import { PrimaryCard } from "../components/Card";
import { formatDate } from "../utils/datetime";
import styles from "../styles/LinkList.module.css";
import Button from "../components/Button";

export default function LinkList() {
  if (true) return;

  return (
    <div className={styles.list}>
      <LinkCard />
    </div>
  );
}

function LinkCard({ data }) {
  return (
    <PrimaryCard className={styles.card}>
      <div className={styles.header}>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${
            window.location.href + data.hash
          }&bgcolor=c9fce2`}
          alt="miniurl"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <p className={styles.info}>
            <span>{formatDate(data.created_at)}</span>
          </p>
          <p className={`${styles.info} ${styles.inline_row}`}>
            <span>{data.clicks}</span>

            <IconGraph />
          </p>
        </div>

        <p className={styles.long_link} title={data.long_link}>
          {data.long_link}
        </p>

        <a
          href={window.location.href + data.hash}
          className={styles.mini_link}
          target="_blank"
          rel="noreferrer"
        >
          {window.location.href + data.hash}
        </a>

        <div className={styles.actions}>
          <Button size="small" theme="primary-light" type="button">
            Copy MiniUrl
          </Button>
        </div>
      </div>
    </PrimaryCard>
  );
}
