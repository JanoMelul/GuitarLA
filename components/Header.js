import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = ({ guitarra }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.svg"
                  width={400}
                  height={100}
                  alt="Imagen Logo"
                />
              </a>
            </Link>
          </div>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
            <Link href="/carrito">
              <a>
                <Image layout="fixed" width={30} height={25} src='/img/carrito.png' alt='Imagen carrito' />
              </a>
            </Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.model}>
            <h2>Model {guitarra.name}</h2>
            <p>{guitarra.description}</p>
            <p className={styles.price}>${guitarra.price}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.link}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <div 
        className={styles.guitar}
        >
          <Image
            src="/img/header_guitarra.png"
            alt="imagen header guitarra"
            width={500}
            height={1200}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
