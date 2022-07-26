import Guitarra from "./Guitarra"
import styles from '../styles/Listado.module.css'


const Listado = ({ guitars }) => {

  return (
    <div className={styles.listado}>
      {guitars.map(guitar => (
              <Guitarra 
              key={guitar.id}
              guitar={guitar}
              />
            ))}
    </div>
  )
}

export default Listado