import { Link } from "react-router-dom";
import styles from "./Card.module.css"

function Card({ video }) {
  return (
    <section className={styles.card}>
        <Link to={`/watch/${video.key}`} >
          <img src={`./images/${video.id}.jpeg`} alt={`${video.id}`}/>
        </Link>
    </section>
  );
}

export default Card