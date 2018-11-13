export default function (state = 'Stranger', action) {
    switch (action.type) {
        case "USER":
            return action.payload;
        default: 
            return state;
    }
}