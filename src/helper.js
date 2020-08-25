//function aux

//Description the discount
export const description_discount = (type) => {
    let msg = ''
    if(type === 0) msg = ''
    else if(type === 1) msg = 'Two article with 50% discount'
    else if(type === 2) msg = 'Pay Two, Get Three'
    return msg
}

export const calc_discount = (price, type) => {
    return
}
