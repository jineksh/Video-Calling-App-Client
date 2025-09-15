export const addPeerAction = (peerId,stream) => (
    {
        type : "ADD_PEER",
        payload : { peerId, stream }
    }
)