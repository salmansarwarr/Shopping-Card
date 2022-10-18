import { SET_PAGE, DISCOUNT, SHOW_DETAIL, SHOW_PROMO, SET_PROMO } from './actionTypes'

export function setpage(price) {
    return ({
        type: SET_PAGE,
        payload: {
            price
        }
    })
} 

export function setDiscount(discount) {
    return({
        type: DISCOUNT,
        payload: {
            discount
        }
    })
}

export function showDetailDiv(isShowing) {
    return({
        type: SHOW_DETAIL,
        payload: {
            showDetail: !isShowing
        }
    })
}

export function showPromoDiv(isShowing) {
    return({
        type: SHOW_PROMO,
        payload: {
            promoCode: !isShowing
        }
    })
}
