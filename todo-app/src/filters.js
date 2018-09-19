const filters = {
    searchText: '',
    hideCompleted: true
}

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted}) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'string') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFilters }