import { useState } from "react";
import Image from "next/image"
import Layout from "../../components/Layout"
import styles from "../../styles/Guitars.module.css";


const Producto = ({ guitar, agregarCarrito }) => {
  const [cantidad, setCantidad ] = useState(1)

  const { description, image, name , price, id} = guitar[0]

  const handleSubmit = e => {
    e.preventDefault()

    const guitarraSeleccionada = {
      id,
      image,
      price,
      name,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <Layout
    pagina={name}
    >
      <div className={styles.guitar}>
      <Image layout="responsive" width={180} height={350} src={image} alt={`Imagen Guitarra ${name}`} />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Cantidad:</label>
          <select
          value={cantidad}
          onChange={ e => setCantidad(parseInt(e.target.value))}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <input type='submit' value='Agregar al Carrito' />
        </form>
      </div>
    </div>
    </Layout>
    
  )
}


export async function getServerSideProps({query: {url}}) {
  const urlProducto = `${process.env.API_URL}/guitars?url=${url}`
  const respuesta = await fetch(urlProducto)
  const guitar = await respuesta.json()

  return {
    props: {
      guitar
    }
  }
}

export default Producto