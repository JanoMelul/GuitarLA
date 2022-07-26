import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers/index";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const { title, abstract, image, published_at, id, url } = entrada;
  return (
    <article>
      <Image
        priority='true'
        width={800}
        height={600}
        layout="responsive"
        src={image}
        alt={`Imagen de ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatearFecha(published_at)}</p>
        <p className={styles.abstract}>{abstract}</p>
      </div>
      <Link href={`/blog/${url}`}>
        <a className={styles.link}>Leer Blog</a>
      </Link>
    </article>
  );
};

export default Entrada;
