import Styles from './css/Aruba.module.css'
import ComponenteProps from './ComponentesProps'
import bandeira_aruba from '../assets/images/bandeira_aruba.png'

function Aruba() {
    return (

        <section className={Styles.fundo_aruba}>
            <h1>Venha conhecer a Aruba!</h1>
            <ComponenteProps 
                lugar="Escócia"
                texto="Aruba é um paraíso caribenho de praias cristalinas, areia branca e clima ensolarado o ano todo. A ilha combina belezas naturais com cultura vibrante, hospitalidade calorosa e um estilo de vida leve que encanta quem a visita."
                bandeira={bandeira_aruba}
            />

        </section>

    )
}

export default Aruba