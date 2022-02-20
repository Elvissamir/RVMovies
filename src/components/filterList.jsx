import PropTypes from 'prop-types'

function FilterList ({ filters, activeFilter, onSelectFilter}) {
    return (
        <div className='filter-list'>
            { filters.map(option => 
                <button 
                    onClick={ () => onSelectFilter(option) }
                    key={ option } 
                    className={ option === activeFilter? 'active-filter filter-option': 'filter-option' } >
                        { option }
                </button>
            )}
        </div>
    )
}

FilterList.propTypes = {
    filters: PropTypes.array.isRequired,
    activeFilter: PropTypes.string.isRequired
}

export default FilterList
