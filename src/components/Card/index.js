import styles from "./Card.module.css"

function Card({ id }) {
  return (
    <section className={styles.card}>
        <a 
          href={``}
          rel="renoferrer noopener"
          target="_blank">
          <img src={`./images/${id}.jpeg`} alt={`${id}`}/>
        </a>
    </section>
  );
}

export default Card