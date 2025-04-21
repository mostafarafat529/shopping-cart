import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react';
import { CreateContextData } from '../context/ContextData';

import "./MyNavbar.css"

const MyNavbar = () => {
    const {cart} = useContext(CreateContextData)

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

return (
<>

<nav className="navbar navbar-expand-lg  position-sticky top-0 z-3">
<Container>
<div className="collapse navbar-collapse me-auto" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
        <Link className="nav-link active fs-3 me-3" to="/" aria-current="page" href="/#">Home</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active fs-3 me-3 " to="/store"  aria-current="page" href="/#">store</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link active fs-3 " to="/about" aria-current="page" href="/#">about</Link>
    </li>
    </ul>
</div>
<div className='btn position-relative'>
<Link to ="/cart" type="button" className="btn icon btn-outline-primary"
style={{
    borderRadius:"50%" ,
    width:"70px" ,
    height:"70px" ,
    lineHeight:"50px",
    border:"1px solid #fff" ,
    color:"#fff"
}}
>
<FaCartShopping style={{fontSize:"45px" ,textAlign:"center"}}/>
</Link>
<div style={{fontSize:"20px" ,width:"30px" ,
    color:"#fff" ,fontWeight:"bold" ,
    background:"red" , borderRadius:"50%" ,
    position:"absolute" ,
    right:"0" ,
    bottom:"0"
    }}>
    {totalItems}
</div>
</div>
</Container>
</nav>
</>
)
}

export default MyNavbar