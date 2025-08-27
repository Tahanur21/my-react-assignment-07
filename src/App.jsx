import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner/Banner'

function App() {
  const [amount,setAmount] = useState(0);
  const handleAmount = (spend)=>{
    const newAmount = amount+spend;
    setAmount(newAmount)
  }

  return (
    <>
    <div>
      <div className='w-3/4 mx-auto p-6'>
     <Header amount={amount}/>
     <Banner handleAmount={handleAmount}/>

      </div>
    </div>
    </>
  )
}

export default App
