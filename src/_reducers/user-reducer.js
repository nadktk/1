let initialState = (localStorage.getItem('name')!=null)
    ? localStorage.getItem('name')
    : 'Stranger'

export default function (state = initialState, action) {
    switch (action.type) {
        case "USER":
            return action.payload;
        default: 
            return state;
    }
}