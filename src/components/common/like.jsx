import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Likes ({ liked, onClick }) {
    const likedClass = 'text-red-800'
    const defaultClass = 'text-gray-800'
    let activeClass = defaultClass

    activeClass = (liked)? likedClass:defaultClass
    
    return <button onClick={ onClick }>
        <FontAwesomeIcon className={ activeClass } icon={'heart'} />
    </button>
}

Likes.propTypes = {
    liked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Likes