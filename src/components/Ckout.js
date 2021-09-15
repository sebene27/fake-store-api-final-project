import React from 'react'
import  styled  from 'styled-components'
import { Link } from 'react-router-dom'
const Ckout=()=> {
    return (
 <Wrapper>
    <form className="checkout__form">
    <h4 className="checkout__subheading">Customer info</h4>
    <label className="checkout__label" for="firstName">First Name</label>
        <input className="checkout__input" type="text" name="firstName" placeholder="pls Enter your FN" required="" value="Seben"/>
        <label className="checkout__label" for="lastName">Last Name</label>
        <input
        className="checkout__input" type="text" name="lastName" placeholder="Enter your last name" required=""
        value="Alemu"/>
        <label className="checkout__label" for="email">Email</label>
        <input className="checkout__input" type="text"
        name="email" placeholder="Enter your email" required="" value="janedoe@email.com"/>
    <h4 className="checkout__subheading">Shipping details</h4>
    <label className="checkout__label" for="shippingName">Full NAme</label>
        <input className="checkout__input" type="text" name="shippingName"
        placeholder="Enter your shipping full name" required="" value="Sebene Shumet"/>
        <label className="checkout__label"
        for="shippingStreet">Street address</label>
        <input className="checkout__input" type="text" name="shippingStreet"
        placeholder="Enter your street address" required="" value="1234 Fake St"/>
        <select name="shippingCity"
        className="checkout__select">
        <option disabled="">City</option>
        <option value="CA" Selected="selected">Fresno</option>
        <option value="CA">Oakland</option>
        <option value="CA">Bakersfield</option>
        <option value="CA">Marced</option>;
    </select>
        
        <label className="checkout__label"
        for="shippingPostalZipCode">Postal/Zip code</label>
        <input className="checkout__input" type="text"
        name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required="" value=""/>
           <h4 className="checkout__subheading">Payment info</h4>
    <label className="checkout__label" for="cardNum">Credit Card
        Number</label>
        <input className="checkout__input" type="text" name="cardNum" placeholder="Enter your card number"
        value="4242 4242 4242 4242"/>
        <label className="checkout__label" for="expMonth">Expiry month</label>
        <input
        className="checkout__input" type="text" name="expMonth" placeholder="Card expiry month" value="11"/>
        <label
        className="checkout__label" for="expYear">Expiry year</label>
        <input className="checkout__input" type="text"
        name="expYear" placeholder="Card expiry year" value="2023"/>
        <label className="checkout__label"
        for="csv">CSV</label>
        <input className="checkout__input" type="text" name="ccv" placeholder="CSV (3 digits)"
        value="123"/>
    
        <Link to='/products' className='btn'>
            SUBMIT ORDER
          </Link>
</form>
</Wrapper>

    )
}


const Wrapper=styled.div`
.checkout__form {
background-color: #f0dede;
border: 2px solid #292b83;
width: 88%;
padding: 1.5rem 2rem;
margin: 1.5rem 3rem 3rem;
}

form {
display: block;
margin-top: 0em;
}
.btn{
    background: #3a55ec;
    font-size:1.05rem;
    font-weight:600;
    color:white;
    letter-spacing:1.03rem;
    margin-left:250px;
    margin-top: 30px;
}
input {
    margin-left:4px;
}
label {
    margin-left:4px;
    font-weight:bold;
}
h4{
    color:blue;
}
`

export default Ckout
