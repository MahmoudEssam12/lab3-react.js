export const nextPage = (payload) => {
    return {
        type: "NEXT_PAGE",
        payload
    }
}

export const previousPage = (payload) => {
    return {
        type: "PREVIOUS_PAGE",
        payload
    }
}