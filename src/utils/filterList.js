
export function filterList (list, option) {
    if (option === 'All')
        return list
    return list.filter(item => item.genre === option)
}