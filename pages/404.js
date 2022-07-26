import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/NoEncontrado.module.css";


const NotFound = () => {
  return (
<Layout
    pagina='No encontrado'>
    <div className={styles.notFound}>

      <h1 className="heading">Página no encontrada</h1>
      <Link href='/'>Volver al Inicio</Link>
    </div>

    </Layout>
    
  )
}

export default NotFound