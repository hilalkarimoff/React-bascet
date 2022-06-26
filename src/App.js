import{useState} from 'react'
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Bascet from './components/Bascet';
import Basketitem from './components/Basketitem';
import mehsullar from './components/mehsullar.json'

const App = () => {
   
   const [total,setTotal] = useState(0)
   const [money,setMoney] = useState(127000000)
   const [bascet, setBascet] = useState([])

   const resetBascet = _ => {
      setBascet([{},{},{}])
   }

  
  return (
      <>
      {/* props */}
       <Header total={total} money={money}  />
       <div className='container product'>
      {mehsullar.map(mehsul=>(
        <Product key={mehsul.id} total={total} money={money} bascet={bascet} setBascet={setBascet} product={mehsul} />
      ))}
       </div>




      </>
  );
}

export default App;
