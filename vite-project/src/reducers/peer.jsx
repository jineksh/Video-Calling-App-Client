export const peerReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_PEER":
            return {
                ...state,
                [action.payload.peerId]: {
                    stream: action.payload.stream
                }
            };
        default:
            return state;
    }
}