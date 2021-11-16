import react from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar= () => {

    
    return (
        <div className='Navbar'>
            <ul>
                <li><Link to='/show'>Show</Link></li>
                <li><Link to='/episodes'>Episodes</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;