let isAuthorized = localStorage.getItem('user')!=null;

export default function (state = isAuthorized, action) {
    switch (action.type) {
        case "AUTHORIZATION":
            return action.payload;
        default: 
            return state;
    }
}