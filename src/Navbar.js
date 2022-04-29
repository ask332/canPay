import { Link } from 'react-router-dom';
import './App.css'

const Navbar = (props) => {
    return ( 
        <div className="navbar">
            <img src="http://127.0.0.1:8080/Desktop/mini_project_trials/trial1/logo/default.png" alt="" className='logo'/>
            <h1>canPay</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to= {`/pay/${props.addr}`}>Pay</Link>
                <Link to='/search'>Search</Link>
                <Link to='/console'>Console</Link>
                <div className="addr">
                    {props.addr}
                </div>
            </div>

        </div>
     );
}
 
export default Navbar;