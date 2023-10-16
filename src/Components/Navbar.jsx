import { Link, useLocation } from 'react-router-dom'
import './style.css'
import { useState } from 'react';

const Navbar = () => {
  let activeNav = useLocation().pathname.split('/');
  let [toggleNav, setToggleNav] = useState(false);
  return (
    <>
      <div className='w-80 m-auto hideBars' style={{ justifyContent: "flex-end", fontSize: '1.5em' }}>
        <i className="fa-solid fa-bars" onClick={() => setToggleNav(!toggleNav)}></i>
      </div>
      {toggleNav && <ul className='nav-mob'>
        <li><Link className={activeNav[1] === "" ? "active" : ""} to={'/'}>Home</Link></li>
        <li><Link className={activeNav[1] === "bollywood" ? "active" : ""} to={'/bollywood'}>Bollywood</Link></li>
        <li><Link className={activeNav[1] === "technology" ? "active" : ""} to={'/technology'}>Technology</Link></li>
        <li><Link className={activeNav[1] === "hollywood" ? "active" : ""} to={'/hollywood'}>Hollywood</Link></li>
        <li><Link className={activeNav[1] === "fitness" ? "active" : ""} to={'/fitness'}>Fitness</Link></li>
        <li><Link className={activeNav[1] === "food" ? "active" : ""} to={'/food'}>Food</Link></li>
      </ul>}
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