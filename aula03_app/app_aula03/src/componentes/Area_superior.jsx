import styles from './Area_superior.module.css'

function Area_superior () {
    return (

        <div>
            
            <header className={styles.header_esquerdo}>
                <p>Conteúdo da camada 1</p>
            </header>

            <header className={styles.header_direito}>
                <p>Conteúdo da camada 2</p>
            </header>

        </div>

    )
}

export default Area_superior