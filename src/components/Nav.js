import '../styles/Nav.css'
import DropdownMenu from './DropdownMenu'


const Nav = () => {
  return (
    <nav className='nav'>
      <section className='nav-title-logo'>
        <p className='nav-title'>PlanIt</p>
        <img src='../assets/app-logo.png' alt='logo of earth with leaves sprouting and wrapping around' className='nav-logo'/>
      </section>
      <DropdownMenu />
    </nav>
  )
}

export default Nav;
