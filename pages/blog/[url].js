import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers/index";
import styles from "../../styles/Entrada.module.css";


const EntradaBlog = ({ entrada }) => {

  const { content, image, published_at, title } = entrada[0]

  return (
    <Layout
    pagina={title}
    >
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.entrada}>
          <Image priority='true' layout="responsive" width={800} height={600} src={image} alt={`Imagen de ${title}`} />
          <div className={styles.content}>
            <p className={styles.date}>{formatearFecha(published_at)}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
    
  )
}


export async function getStaticPaths() {
  const urlBlog = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(urlBlog)
  const entradas = await respuesta.json()
  const paths = entradas.map(entrada => ({
    params: {url: entrada.url }
  }))
  return {
      paths,
      fallback: false,
  }
}

export async function getStaticProps({params: {url}}) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
  const respuesta = await fetch(urlBlog)
  const entrada = await respuesta.json()

  return {
    props: {
      entrada
    }
  }
}

export default EntradaBlog