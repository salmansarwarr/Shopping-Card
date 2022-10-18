import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setpage, showDetailDiv, showPromoDiv } from '../Redux/actionCreator';
import Form from './Form';

function ShoppingCard() {
    const state = useSelector(state => state)
    const { Price, showDetail, promoCode, discount } = state
    const newPrice = Price - discount
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setpage(100))
    }, [])

    function Detail() {
        dispatch(showDetailDiv(showDetail))
    }

    function Promo() {
        dispatch(showPromoDiv(promoCode))
    }

    return (
        <div className='container'>
            <div className='card wrapper'>
                <div className='price'>
                    <div className='bg-warning'>
                        <h3>Est. Total :</h3>
                    </div>
                    <div className='bg-success'>
                        <h3>${newPrice}.00</h3>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-body">
                        <button onClick={Detail} className="stretched-link">
                            {!showDetail ? "See item detail +" : "Hide item detail -"}
                        </button>
                    </div>
                </div>
                <div className={showDetail ? 'detail' : "none"}>
                    <img src='https://i5.walmartimages.com/asr/79916c35-3293-48ff-acff-be325b2e4c84_2.ef5b1bd1451de6b63a7c20d2485d56c6.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff' />
                    <div className={discount !== 0 ? 'none' :'bill'}>
                       <p> bill : ${newPrice}.00 </p>
                    </div>
                    <div className={discount === 0 ? 'none' :'new-bill'}>
                       <p> bill was : ${Price}.00 </p>
                       <p> off bill : <span className='strikethrough'> ${Price}.00 </span></p>
                       <p> new bill : ${newPrice}.00 </p>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-body">
                        <button onClick={Promo} className="stretched-link">
                            {!promoCode ? "Apply promo code +" : "Hide promo code -"}
                        </button>
                    </div>
                </div>
                <div className={promoCode ? "promo" : "none"}>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard