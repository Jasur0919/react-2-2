import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsPersonWalking } from "react-icons/bs";
import Aos from 'aos';
import AnimatedCursor from "react-animated-cursor"



function App() {
  const [count, setCount] = useState(0)
  const [countbig, setCountbig] = useState(0)

  const [text, setText] = useState(true)

  useEffect(() => {
    Aos.init({duration: 1000})
  },[])

  const [active, setActive] = useState(false)
  const changeActive = () => {
    setActive(!active)
  }
  

  const [counters, setCounters] = useState([0])

  const addCounters = () => {
    let item = counters[counters.length-1]
    counters.push(item + 1)
    setCounters([...counters])
  }

  const increment = (index) => {
    counters[index] = counters[index] + 1
    setCounters([...counters])
  }

  const discrement = (index) => {
    counters[index] = counters[index] - 1
    setCounters([...counters])
  }

  return (
    <>

 <div className="App">
      <AnimatedCursor 
        color='3, 90, 90'
      />

    </div>


     <div className="container main">
      <div className="box">
       <div className="metr_yurish">
          <h1> {count} metr  <BsPersonWalking className='metr_yurish_person' /></h1>
          <button  className='btns'  onClick={() => setCount(per => (per + countbig))}>Oldinga ...</button>
          <button disabled={count <= 0}  className='btn_1 btns' onClick={() => setCount(per => per - countbig)}>Orqaga ...</button>
       </div>

       <div className="qadam_kattaligi">
          <h1>Qadam kattaligi: {countbig} metr</h1>
          <button  data-aos="fade-right"
            onClick={() => setCountbig(e => e + 1)}>qadam kengaytirish</button>
          <button disabled={ countbig <= 0} data-aos="fade-left" className='btn_2' onClick={() => setCountbig(e => e - 1)}>qadam qisqartirish</button>
       </div>
     

     <div className="login" data-aos="flip-up">
      {
        active ? <h1>Welcom</h1> : <h1>Login</h1>
      }
      {
        active ? <button  onClick={changeActive}>Logout</button> :  <button onClick={changeActive}>Login</button>   

      }

        
     </div>
        

      </div>

      <div className="add_counter" >

        <button className='btn_6' onClick={addCounters}>Add counter</button>

        {
           counters?.map((item, index)=> {
            return(
              <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500" className='add_counter_child' key={index}>

              <button onClick={() => increment(index)} className='btn_4'>+</button>
              <h3>{item}</h3>
               <button disabled={ item <= 0 } onClick={() => discrement(index)}  className='btn_5'>-</button>
          </div>
            )
          })
           
            
        }
        
      </div>
     </div>


    </>





  )
}

export default App
