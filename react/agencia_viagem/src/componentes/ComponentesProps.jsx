import Styles from './css/ComponentesProps.module.css'

function ComponenteProps({lugar, bandeira, texto}) {
    return (

        <div className={Styles.corpo_texto}>
            <h2>Venha conhecer as belezas  de {lugar}!!</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="Logo da firma" className={Styles.imagem_props}/>

        </div>
    )
}

export default ComponenteProps