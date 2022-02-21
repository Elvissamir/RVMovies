import { Link } from "react-router-dom"

function Nav () {
    const menuLinks = [
        {url: '/', name: 'Home'},
        {url: '/movies', name: 'Movies'},
        {url: '/rentals', name: 'Rentals'},
        {url: '/customers', name: 'Customers'},
        {url: '/genres', name: 'Genres'},
    ]

    return (
        <nav className="bg-black">
            <div className="flex p-2 justify-between items-center text-white mx-auto w-10/12">
                <div className="font-black">V MOVIES</div>
                <div className="flex">
                    <ul className="flex">
                        {  menuLinks.map(link => 
                            <li className="flex" key={ link.name }>
                                <Link 
                                    className="mx-2 p-2" 
                                    to={ link.url }>
                                        { link.name }
                                </Link>
                            </li>) }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav