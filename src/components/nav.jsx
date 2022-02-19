
function Nav () {
    const menuLinks = [
        {url: '', name: 'Home'},
        {url: '', name: 'Movies'},
        {url: '', name: 'Rentals'},
        {url: '', name: 'Customers'},
        {url: '', name: 'Genres'},
    ]

    const renderMenuLinks = () => { 
        return (
            menuLinks.map(link => <li className="flex" key={link.name}><a className="mx-2 p-2" href={link.url}>{link.name}</a></li>)
        )
    }

    return (
        <nav className="bg-black">
            <div className="flex p-2 justify-between items-center text-white mx-auto w-10/12">
                <div className="font-black">V MOVIES</div>
                <div className="flex">
                    <ul className="flex">
                        { renderMenuLinks() }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav