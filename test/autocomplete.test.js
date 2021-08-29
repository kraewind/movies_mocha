it('shows on autocomplete', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                {Title: 'Avengers'},
                {Title: 'Not Avengers'},
                {Title: 'Some other movie'}
            ]
        },
        renderOption(movie) {
            return movie.Title
        }
    })
    const dropdown = document.querySelector('.dropDown')
    it('does not show dropdown on page open', () => {
        
    })
})
