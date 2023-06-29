import styled from "../styles/Components.module.css";
import styles from "../styles/Sidebar.module.css";
import close from "../images/icon-close.svg";
import { useEffect, useState } from "react";
import request from "../utils/request";
import PieChart from "../components/Chart";

export default function Sidebar({ id, handleClick }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await request("/analytics", "POST", { linkId: id });
      const data = await res.json();
      setState({
        browser: {
          labels: Object.keys(data["data"]["browser"]),
          datasets: [
            {
              data: Object.values(data["data"]["browser"]),
            },
          ],
        },
        device: {
          labels: Object.keys(data["data"]["device"]),
          datasets: [
            {
              data: Object.values(data["data"]["device"]),
            },
          ],
        },
      });
    };

    fetchAnalytics();
  }, [id]);

  if (!state) return;

  return (
    <div className={styled.overlay}>
      <aside className={styles.sidebar}>
        <div className={styles.body}>
          <div className={styles.actions}>
            <button
              className={styles.action_button}
              onClick={() => handleClick(null)}
            >
              <img src={close} alt="miniurl" />
            </button>
          </div>
          <BrowserChart data={state["browser"]} />
          <DeviceChart data={state["device"]} />
        </div>
      </aside>
    </div>
  );
}

function BrowserChart({ data }) {
  return (
    <div>
      <h2>Clicks by Browsers</h2>
      <div className={styles.chart}>
        <PieChart data={data} />
      </div>
    </div>
  );
}

function DeviceChart({ data }) {
  return (
    <div>
      <h2>Clicks by Devices</h2>
      <div className={styles.chart}>
        <PieChart data={data} />
      </div>
    </div>
  );
}
