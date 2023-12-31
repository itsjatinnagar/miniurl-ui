import { ReactComponent as IconGraph } from "../images/icon-graph.svg";
import { ReactComponent as IconMore } from "../images/icon-more.svg";
import { PrimaryCard } from "../components/Card";
import { formatDate } from "../utils/datetime";
import styles from "../styles/LinkList.module.css";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchLinks } from "../services/reducers/shortenSlice";
import Sidebar from "./Sidebar";

export default function LinkList() {
  const [activeId, setActiveId] = useState(null);
  const dispatch = useDispatch();
  const { links, loading } = useSelector((state) => state.shorten);

  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  if (loading || links.length === 0) return;

  return (
    <div className={styles.list}>
      {links.map((data) => (
        <LinkCard data={data} key={data.id} handleClick={setActiveId} />
      ))}
      {activeId && <Sidebar id={activeId} handleClick={setActiveId} />}
    </div>
  );
}

function LinkCard({ data, handleClick }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const text = window.location.href + data.hash;
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      () => {
        setCopied(false);
      }
    );
  };

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
          <Button
            size="small"
            theme="primary-light"
            type="button"
            clickHandler={copyToClipboard}
          >
            {copied ? "Copied" : "Copy MiniUrl"}
          </Button>
          <Button
            size="small"
            theme="secondary-light"
            clickHandler={() => handleClick(data.id)}
          >
            <IconMore />
          </Button>
        </div>
      </div>
    </PrimaryCard>
  );
}
