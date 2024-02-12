import './TopBar.css'
function TopBar(){
    return(
        <nav id = "home" >
            <a className='phone'>Telefonummer: 04795958949</a>
            <a className='topBarItem'><img className='fbImg' src = "/assets/fbLogo.svg" alt=''/></a>
        </nav>
    )
}

export default TopBar; 