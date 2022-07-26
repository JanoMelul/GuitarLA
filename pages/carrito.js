import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Carrito.module.css";

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal ] = useState(0)
  
  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.price), 0)

    setTotal(calculoTotal)
  }, [carrito])

  return (
    <Layout pagina={"Carrito de Compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.content}`}>
        <div className={styles.cart}>
          <h2>Artículos</h2>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image layout="responsive" width={250} height={480} src={producto.image} alt={producto.name} />
                  </div>
                  <div>
                    <p className={styles.name}>{producto.name}</p>
                    <div className={styles.cantidad}>
                    <p >Cantidad: </p>

                    <select
          value={producto.cantidad}
          className={styles.select}
          onChange={e => actualizarCantidad({
            cantidad: e.target.value,
            id:producto.id
          })}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
                    </div>
                    <p className={styles.price}>$<span>{producto.price}</span></p>
                    <p className={styles.subtotal}>Subtotal: <span>${producto.cantidad * producto.price}</span></p>
                  </div>
                  <button type="button" className={styles.delete} onClick={() => eliminarProducto(producto.id)}>
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>Resumen del Pedido</p>
              <p>Total a pagar: ${total}</p>
            </>
          ): <p> No hay productos en el carrito</p>}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
