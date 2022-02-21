import PropTypes from 'prop-types'

function TableHeader ({ columns, sortColumn, onSort }) {
    const raiseSort = (path) => {
        let order = 'asc'
        if (path === sortColumn.path && sortColumn.order === 'asc')
          order = 'desc'
    
        onSort({ path, order })
    }

    return ( 
        <thead>
            <tr className="">
            { columns.map(p => (
                <th 
                    key={ p.label } 
                    onClick={ () => raiseSort(p.value) } 
                    className="text-left">
                        { p.label }
                </th> ) 
            )}
            <th></th>
            </tr>
        </thead>)
}

TableHeader.propTypes = {
    columns: PropTypes.array.isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
}

export default TableHeader