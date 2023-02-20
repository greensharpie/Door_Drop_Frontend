const NavBar = ({authenticated, customer, handleLogOut}) => {

    let authenticatedOptions
        if (customer) {
    authenticatedOptions = 
//     (
//         <nav className="navbar navbar-expand-lg bg-light">
// <div className="container-fluid">
//     <a className="navbar-brand" href="/">Door Drop</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//         <a className="nav-link" href={`/favorite/${customer.id}`}>Favorites</a>
//         </li>
//         <li className="nav-item">
//         <a className="nav-link" href={`/order/${customer.id}`}>Order</a>
//         </li>
//         <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//         </a>
//         <ul className="dropdown-menu">
//             <li><a className="dropdown-item" onClick={handleLogOut} href="/">Log Out</a></li>
//             <li className="dropdown-item">
//         <a className="nav-link" href='/register'>Register</a>
//         </li>
//         <li className="dropdown-item">
//         <a className="nav-link" href='/restaurant/create'>Add New Restaurant</a>
//         </li>
//         </ul>
//         </li>
//     </ul>
//     </div>
// </div>
// </nav>
//     )

    (
        <div id="mainNavigation">
        <nav role="navigation">
          <div className="py-3 text-center border-bottom">
            <img src="https://i.imgur.com/RXFwLZe.jpg" alt="" className="img__logo"/>
          </div>
        </nav>
        <div className="navbar-expand-md">
          <div className="navbar-dark text-center my-2">
            <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
            </button>
          </div>
          <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"  href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/favorite/${customer.id}`}>Favorites</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`/order/${customer.id}`}>Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogOut} href="/">Log Out</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href='/restaurant/create'>Add New Restaurant</a></li>
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
const publicOptions = (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
<div className="container-fluid">
    <a className="navbar-brand" href="#">Door Drop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='/login'>Login</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='/register'>Register</a>
        </li>
        {/* <li className="nav-item">
        <a className="nav-link" onClick={handleLogOut} href="/">Logout</a>
        </li> */}
    </ul>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
</div>
</nav>
</div>

)

return (   
    <div>
    <nav className="nav-background"> 
        {authenticated && customer ? authenticatedOptions : publicOptions}
        </nav>
    </div>
)
}

export default NavBar

