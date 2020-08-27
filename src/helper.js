//function aux

//Description the discount
export const description_discount = (type) => {
    let msg = ''
    if(type === 0) msg = ''
    else if(type === 1) msg = 'Two article with 50% discount'
    else if(type === 2) msg = 'Pay Two, Get Three'
    return msg
}

export const calc_total = (price, count, type) => {
    if(type === 1){
        return price = (count*price) - (Math.floor(count/2)*price/2)
    }else if(type === 2){
        return price = (count*price) - (Math.floor(count/3)*price)
    }else{
        return price*count
    }
}

export const calc_total_purchase = (purchase) => {
    let x = []
    purchase.map(i => {
        let aux = calc_total(i.price, i.cantidad, i.type)
        x.push(aux)
    })
    return x.reduce((a, b) => a+b, 0)
}
