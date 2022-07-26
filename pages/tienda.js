import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ guitars }) => {
  return (
          <Layout
        pagina='Tienda Virtual'
      >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado 
        guitars={guitars}
      />
      </main>
      </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars`
  const respuesta = await fetch(url)
  const guitars = await respuesta.json()

return {
  props: {
    guitars,
  }
}
}

export default Tienda;
