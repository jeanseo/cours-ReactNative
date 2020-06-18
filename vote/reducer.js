const reducer = (state, action) => {
    switch (action.type){
        case 'vote':
            console.log(action.payload);
            return {...state, selectedCandidate: state.selectedCandidate.concat(action.payload),voteIndex: state.voteIndex + 1};
        case 'reset':
            return {...state, selectedCandidate: [], voteIndex: 0};
        default:
            return state;
    }

};

const candidates= [
    { choice_1: "Alan", choice_2: "Juliette" },
    { choice_1: "Phi", choice_2: "Bernard" },
    { choice_1: "Lisa", choice_2: "Elise" },
    { choice_1: "Cecilia", choice_2: "Alice" },
];

const initialState = {
    candidates: candidates,
    selectedCandidate: [],
    voteIndex: 0
};




export {reducer, initialState}
