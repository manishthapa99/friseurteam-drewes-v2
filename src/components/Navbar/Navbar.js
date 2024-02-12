// import './Navbar.css'
// function Navbar(){
//     return(
//         <div className='navBarHolder'>
//             <div className='logo'><img className='logoImg' src = "/assets/logo.png" alt=''/></div>
//             <div className='navBarSelectedItem'><h3>Home</h3></div>
//             <div className='navBarItem'><h3>Service</h3></div>
//             <div className='navBarItem'><h3>Shop</h3></div>
//             <div className='navBarItem'><h3>Team</h3></div>
//             <div className='navBarItem'><h3>Contact</h3></div>
//         </div>
//     )
// }
// export default Navbar;

import React,{Component} from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons"


class Navbar extends Component {           
    state ={ clicked:false }

    handleClick = () => {
        this.setState({ clicked:!this.state.clicked})
    }

    render(){
        return(
            <div className='MainNavbarContainer'>
                <img className='navbar-logo' src = "/assets/logo.png" alt=''/>
                <nav className='NavbarItems'>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <FontAwesomeIcon icon={this.state.clicked ? faXmark : faBars}></FontAwesomeIcon>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar