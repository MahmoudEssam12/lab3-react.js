const INITIAL_STATE = {
    page_num: 1
}

export function paginationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "NEXT_PAGE":
            return {
                page_num: state.page_num + 1
            };
        case "PREVIOUS_PAGE":
            return {
                page_num: state.page_num - 1
            }
        default:
            return state
    }
}