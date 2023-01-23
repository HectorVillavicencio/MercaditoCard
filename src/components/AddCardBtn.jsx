import './AddCardBtn.css';

const AddCardBtn = () => {
  return (
    <button onClick={()=> {alert('Producto agregado al carro')}}>Comprar</button>
  )
}

export {AddCardBtn}