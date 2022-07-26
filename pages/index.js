import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlogs from '../components/ListadoBlog'

export default function Home({ guitarras, curso, entradas }) {
  return (
    <div>
      <Layout
        pagina='Inicio'
        guitarra={guitarras[3]}
        >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado 
        guitars={guitarras}/>
      </main>

      <Curso 
      curso={curso}
      />

      <section className='contenedor'>
      <ListadoBlogs 
      entradas={entradas}
      />
      </section>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitars`
  const urlCursos = `${process.env.API_URL}/courses`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=published_at:desc`

  const [resGuitarras, resCursos, resEntradas] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resEntradas.json()
  ])

return {
  props: {
    guitarras,
    curso,
    entradas
  }
}
}