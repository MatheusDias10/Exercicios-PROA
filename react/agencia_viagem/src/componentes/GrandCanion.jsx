import Styles from './css/Grand.module.css'
import ComponenteProps from './ComponentesProps'
import bandeira_china from '../assets/images/bandeira_china.jpeg'

function GrandCanion() {
    return (

        <section className={Styles.fundo_canion}>
            <h1>Venha conhecer o GrandCanion!</h1>
            <ComponenteProps 
                lugar="Estados Unidos"
                texto="A Grande Muralha da China encanta pela sua imponência e história milenar. Serpenteando por montanhas e vales, ela simboliza a força e a determinação de um povo, oferecendo paisagens deslumbrantes e uma viagem única ao passado."
                bandeira={bandeira_china}
            />

        </section>

    )
}

export default GrandCanion