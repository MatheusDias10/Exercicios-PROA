import Styles from './css/Muralhas.module.css'
import ComponenteProps from './ComponentesProps'
import bandeira_eua from '../assets/images/bandeira_eua.png'

function Muralhas() {
    return (

        <section className={Styles.fundo_muralhas}>
            <h1>Venha conhecer a Muralha da China!</h1>
            <ComponenteProps 
                lugar="Estados Unidos"
                texto="O Grand Canyon impressiona com sua grandiosidade e cores vibrantes, esculpido pelo Rio Colorado ao longo de milhões de anos. Suas formações rochosas revelam a história da Terra, oferecendo vistas espetaculares e uma sensação profunda de imensidão e silêncio."
                bandeira={bandeira_eua}
            />
                

        </section>

    )
}

export default Muralhas