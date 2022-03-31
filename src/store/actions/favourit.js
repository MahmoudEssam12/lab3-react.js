export const setFavourit = (payload) => {
    return {
        type: "SET_FAVOURIT",
        payload,
    }
}

export const removeFavourit = (payload) => {
    return {
        type: "REMOVE_FAVOURIT",
        payload
    }
}