import Layout from "../components/Layout";
import Image from "next/image";
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
      <Layout
        pagina='Nosotros'
      >
      <main className="contenedor">
        <h2 className="nosotros">Nosotros</h2>
        <div className={styles.content}>
          <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros' />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit arcu a lorem egestas tempus et et ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pretium arcu sit amet felis imperdiet mattis. Morbi convallis, elit ac elementum pellentesque, dolor quam scelerisque risus, in ultricies lectus libero ac justo. Ut dapibus ipsum vitae rhoncus vestibulum. Vivamus a turpis in leo tincidunt tempor. Pellentesque luctus enim odio, ac fermentum purus sodales quis. Pellentesque vitae nisl diam. Fusce at mauris vel neque dictum eleifend. Nam pellentesqueviverra. In gravida ex pharetra, maximus ex et, convallis neque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit arcu a lorem egestas tempus et et ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pretium arcu sit amet felis imperdiet mattis. Morbi convallis, elit ac elementum pellentesque, dolor quam scelerisque risus, in ultricies lectus libero ac justo. Ut dapibus ipsum vitae rhoncus vestibulum. Vivamus a turpis in leo tincidunt tempor. Pellentesque luctus enim odio, ac fermentum purus sodales quis. Pellentesque vitae nisl diam. Fusce at mauris vel neque dictum eleifend. Nam pellentesque</p>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  );
};

export default Nosotros;
