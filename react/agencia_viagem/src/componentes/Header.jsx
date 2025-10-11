import {Link} from 'react-router-dom'
import Styles from './css/Header.module.css'
import Logo from '../assets/images/viagens.jpg'
import Lupa from '../assets/images/lupa.png'

function Header () {
    return (

        <header>
            <img src={Logo} alt='Logo' className={Styles.logo_imagem}/>

            <nav className={Styles.menu_header}>
                <Link to='/'>HOME</Link>
                    <Link to='/Escocia'>Escócia</Link>
                        <Link to='/GrandCanion'>Grand Canyon</Link>
                            <Link to='/Muralhas'>Muralhas da China</Link>
                                <Link to='/Aruba'>Aruba</Link>
            </nav>

            <div className={Styles.busca}>
                <input type="search" />
            </div>

            <img src={Lupa} alt='Lupita' className={Styles.lupa}/>

        </header>
    )
}

export default Header