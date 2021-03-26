import './NavBar.scss';
import hamburgerIcon from '../../assests/icons/hamburger.svg'

const Navbar = () => {
    return (
        <nav className='nav'>
            <img className="nav__menu" src={hamburgerIcon} alt='burger-menu' />
            <h1 className="nav__title">Google Health</h1>
        </nav>
    )
}

export default Navbar