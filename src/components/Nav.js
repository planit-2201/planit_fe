import '../styles/Nav.css'
import DropdownMenu from './DropdownMenu'


const Nav = ({ username, currentPage, setCurrentPage }) => {
  return (
    <nav className='nav'>
      <section className='nav-title-logo'>
        <p className='nav-title'>PlanIt</p>
        <img src='../assets/app-logo.png' alt='logo of earth with leaves sprouting and wrapping around' className='nav-logo'/>
      </section>
      <DropdownMenu
        id='nav-btn'
        username={username}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </nav>
  )
}

export default Nav;
