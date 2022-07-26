import styles from '../styles/Curso.module.css'

const Curso = ({ curso }) => {
  const { title, content, image } = curso
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className='heading'>{title}</h2>
          <p className={styles.text}>{content}</p>
          <a href='#' className={styles.link}>Ver Curso</a>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb(0 0 0 / .7)), url(${image});
          background-size: cover;
          background-position: 50%;
        }
      `}</style>
    </section>
  )
}

export default Curso