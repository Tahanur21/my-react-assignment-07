import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner/Banner'
import Buttons from './components/Buttons/Buttons';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [amount, setAmount] = useState(0);
  const handleAmount = (spend) => {
    const newAmount = amount + spend;
    setAmount(newAmount)
    notify()
  }
  // tostify
  const notify = () => toast("Coins added",)
  // for button activation
  const [isActive,setActive] = useState({
    content: true,
    status : 'available',
  });
  const handleActive = (status)=>{
    if(status == 'available'){
      setActive({
        content: true,
        status : 'available',
      })
    }
    else{
      setActive({
        content: false,
        status : 'selected',
      })
    }
  }
  return (
    <>
      <div>
        <div className='w-3/4 mx-auto p-6'>
          <Header amount={amount} />
          <Banner handleAmount={handleAmount} />
          <Buttons
          isActive={isActive}
          handleActive={handleActive}/>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  )
}

export default App
