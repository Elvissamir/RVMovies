import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Likes (props) {
    const likedClass = 'text-red-800'
    const defaultClass = 'text-gray-800'
    let activeClass = defaultClass

    activeClass = (props.liked)? likedClass:defaultClass
    
    return <button onClick={ props.onClick }>
        <FontAwesomeIcon className={ activeClass } icon={'heart'} />
    </button>
}

export default Likes