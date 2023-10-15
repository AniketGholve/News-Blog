import { Link, useLocation } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  let activeNav = useLocation().pathname.split('/');
  console.log(activeNav[1])
  return (
    <>
      <ul className='nav'>
        <li><Link className={activeNav[1] === "" ? "active" : ""} to={'/'}>Home</Link></li>
        <li><Link className={activeNav[1] === "bollywood" ? "active" : ""} to={'/bollywood'}>Bollywood</Link></li>
        <li><Link className={activeNav[1] === "technology" ? "active" : ""} to={'/technology'}>Technology</Link></li>
        <li><Link className={activeNav[1] === "hollywood" ? "active" : ""} to={'/hollywood'}>Hollywood</Link></li>
        <li><Link className={activeNav[1] === "fitness" ? "active" : ""} to={'/fitness'}>Fitness</Link></li>
        <li><Link className={activeNav[1] === "food" ? "active" : ""} to={'/food'}>Food</Link></li>
      </ul>
    </>
  )
}

export default Navbar