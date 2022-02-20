
function Pagination (props) {
    const { itemsCount, pageSize, currentPage, onPageChange } = props

    const pagesCount = Math.ceil(itemsCount / pageSize)
    const createPagesArray = (pagesCount) => {
        const pa = []
        for (let i=1; i <= pagesCount; i++)
            pa.push(i)
        return pa
    }
    const pagesArray = createPagesArray(pagesCount)

    if (pagesCount === 1) return null

    return (
        <div className="pagination">
            { pagesArray.map(page => 
                <div className="pagination-item" key={ page } >
                    <button 
                        className={ (page === currentPage)? 'active-page page-link':'page-link' } 
                        onClick={ () => onPageChange(page) }>
                            { page }
                    </button>     
                </div>
            )}    
        </div>
    )
}

export default Pagination