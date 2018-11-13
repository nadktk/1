export default function (state = false, action) {
    switch (action.type) {
        case "AUTHORIZATION":
            return action.payload;
        default: 
            return state;
    }
}