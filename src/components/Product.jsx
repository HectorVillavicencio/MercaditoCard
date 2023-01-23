import './Product.css'
import { AddCardBtn } from './AddCardBtn'
import { Discount } from './Discount';
import { FaHeart } from 'react-icons/fa';


const Product = (props) => {
  return (
    <div className='product'>
      <Discount discount = {props.discount} />
      <FaHeart/>
        <img className='product__img' src='https://picsum.photos/180' alt='product' />
        <h2 className='product__name'>{props.name}</h2>
        <div className='product__details'>
            <p className='product__old'>${props.oldPrice}</p>
            <p className='product__price'>${props.newPrice}</p>
            <AddCardBtn />
        </div>
    </div>
  )
}

export {Product}