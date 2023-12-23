




import './navbar.scss'

function Navbar() {
  return (
   <div className="navbar">
    <div className="logo">
        <img src="logo.svg" alt=""/>
        <span>kamundia</span>
    </div>
    <div className="icons">
        <img src="/search.svg" alt="icon" className="icon" />
        <img src="/app.svg" alt="icon" className="icon"/>
        <img src="/expand.svg" alt="icon" className="icon"/>
        <div className="notification">
            <img src='/notifications.svg' alt=""/>
            <span>1</span>
        </div>
        <div className="user">
            <img src="https://images.pexels.com/photos/15587225/pexels-photo-15587225/free-photo-of-low-angle-shot-of-woman-wearing-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>antony</span>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
    </div>
   </div>
  )
}

export default Navbar