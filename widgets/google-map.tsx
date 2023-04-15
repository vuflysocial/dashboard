import styles from '../styles/Home.module.css';

export const GoogleMappage = () => {
  return (
    <iframe
                  src="https://voltichange.net/api/widget/?chain=56&darktheme=false&tokenin=Native&tokenout=0x5c12C812794B874fe4Fdea9A4960df599C89b8E5&slippage=0.5"
                  frameBorder="0"
                  className={styles.voltiChangeWidget}
                  width="400"
                  height="650"
                ></iframe>

  );
}