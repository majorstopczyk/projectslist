const initState = {
    projects: [
        {id: '1', title: 'Probably possibly', content: 'oui oui monsieur'},
        {id: '2', title: 'Probably most likely', content: 'oui oui mon ami'},
        {id: '3', title: 'Probably never ever', content: 'oui oui madamme'},
    ]
};

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;