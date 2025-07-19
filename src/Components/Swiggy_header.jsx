import Logo from '../assets/Swiggy_Logo.png'
import About from '../assets/About.svg'
import Cart from '../assets/Cart.svg'
import Home from '../assets/Home.svg'
import Location from '../assets/Location.svg'
import Naveen from '../assets/Naveen.svg'
import Search from '../assets/Search.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Swiggy_header = () => {
  const [btnlog, setbtnlog] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items)


  return (
    <div className='Swiggy-header'>
      <div className='Swiggy-logo'>
        <img src={Logo} alt="Swiggy Logo" />
        <p className='Location-img-logo'><img className='Location-logo' src={Location} alt="Location" /><b>Location</b></p>
      </div>

      <div className='Nav-bar'>
        <ul>
          <li>
            <Link className='Links' to='/'><img src={Search} alt="Search" />Search</Link>
          </li>
          <li>
            <Link className='Links' to="/"><img src={Home} alt="Home" />Home</Link>
          </li>
          <li>
            <Link className='Links' to="/about"><img src={About} alt="" />About</Link>
          </li>
          <li>
            <Link className='Links'><img src={Naveen} alt="Naveen" />Naveen</Link>
          </li>
          <li>


            <Link className='Links'  to="/Cart"><img src={Cart} alt="Cart" />Cart <div >({cartItems.length})</div></Link>


          </li>
          <li className='Login'
            onClick={() => {
              btnlog === "Login"
                ? setbtnlog("Log Out")
                : setbtnlog("Login");
            }}
          >{btnlog}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Swiggy_header;