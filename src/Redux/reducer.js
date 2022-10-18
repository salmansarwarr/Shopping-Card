import { SET_PAGE, DISCOUNT, SHOW_DETAIL, SHOW_PROMO, SET_PROMO } from './actionTypes'

function reducer(state = {}, action) {
    switch (action.type) {
        case SET_PAGE:
            return {
                Price: action.payload.price,
                showDetail: false,
                promoCode: false,
                discount: 0,
                promoValue: "discount"
            }

        case DISCOUNT:
            return {
                ...state,
                discount: action.payload.discount,
                // newPrice: `$${action.payload.discount}.00`
            }

        case SHOW_DETAIL:
            return {
                ...state,
                showDetail: action.payload.showDetail
            }

        case SHOW_PROMO:
            return {
                ...state,
                promoCode: action.payload.promoCode
            }
        
        default:
            return state
    }
}

export default reducer