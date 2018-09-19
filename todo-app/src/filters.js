const filters = {
    searchText: '',
    hideCompleted: true
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if (typeof updates.hideCompleted === 'string') {
        filters.hideCompleted = updates.hideCompleted
    }
}

export { getFilters, setFilters }