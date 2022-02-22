import { NavLink } from "react-router-dom"

function Nav () {
    const menuLinks = [
        {url: '/', name: 'Home'},
        {url: '/movies', name: 'Movies'},
        {url: '/rentals', name: 'Rentals'},
        {url: '/customers', name: 'Customers'},
        {url: '/genres', name: 'Genres'},
    ]

    return (
        <nav className="nav">
            <div className="nav-content">
                <div className="font-black">V MOVIES</div>
                <div className="menu-wrapper">
                    <ul className="menu">
                        {  menuLinks.map(link => 
                            <li className="flex" key={ link.name }>
                                <NavLink 
                                    className="menu-link" 
                                    to={ link.url }>
                                        { link.name }
                                </NavLink>
                            </li>) }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav