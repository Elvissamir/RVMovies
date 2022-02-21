import _ from 'lodash'
import PropTypes from 'prop-types'

function TableBody ({ data, columns }) {
    const renderCell = (item, column) => {
        if (column.content) return column.content(item)
        return _.get(item, column.value)
    }

    return (
        <tbody>
            { data.map((item, itemIndex) => (
                <tr className="text-left" key={ itemIndex }>
                    { columns.map((column, columnIndex) => 
                        <td key={ columnIndex }>
                            { renderCell(item, column) }
                        </td>    
                    )}
                </tr>
            )) }
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
}

export default TableBody

/*
  <td>{ movie.title }</td>
                    <td>{ movie.genre }</td>
                    <td>{ movie.numberInStock }</td>
                    <td>{ movie.dailyRentalRate }</td>
                    <td className="flex justify-center h-full">
                    <div className="flex p-2">
                       
                    </div>
                    </td>
                    <td className="text-center">
                  
                    </td>

*/