const NavBar = ({authenticated, customer, handleLogOut}) => {

  let authenticatedOptions
  if (customer) {
    authenticatedOptions = (
      <label className="navbar-default" id='navbar-default'>
          <input type="checkbox" className='menu_toggle'></input>
          <ul className='list'>
              <li>
              <a href="/" className="Home">Home</a>
              </li>
              <li>
              <a href={`/favorite/${customer.id}`} >Favorites</a>
              </li>
              <li>
              <a href={`/cart/${customer.id}`}>Cart</a>
              </li>
              <li>
              <a onClick={handleLogOut} href="/">Sign Out</a>
              </li>
          </ul>
      </label>

    )
  }
  const publicOptions = (
      <ul className="navbar-nav">
          <li>
          <a href='/login'> Login </a>
          <a href='/register'> Register</a>
          </li>
      </ul>
  )

  return (   
  <nav className="nav-bar">
      <div className="nav-container">
          <a href="/">
              <span>Door Drop</span>
          </a>
              {authenticated && customer ? authenticatedOptions : publicOptions}
      </div>
  </nav>

)
}

export default NavBar

