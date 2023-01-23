import './Product.css'

const Product = () => {
  return (
    <div className='product'>
        <img className='product__img' src='https://picsum.photos/200' alt='product' />
        <h2 className='product__name'>Paisaje</h2>
        <div className='product__details'>
            <p className='product__old'>$200</p>
            <p className='product__price'>$150</p>
        </div>
    </div>
  )
}

export {Product}