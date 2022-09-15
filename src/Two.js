import React, { useState } from 'react'

export default function Two() {
  const [text, setText] = useState( 'If you run a fitness gym, this is one slogan that can bring customers in... ')
 const [btn, setBtn] = useState('Read more')
  const more = () =>{
 
    if (text ===  'If you run a fitness gym, this is one slogan that can bring customers in... ' ){
      setText(  'If you run a fitness gym, this is one slogan that can bring customers in. No one likes having to drive miles out of their way to go to the gym. It is always easier to have a gym that is actually close to home. Your body do what your brain says')
      setBtn('Read less')
    }
    else{
      setText('If you run a fitness gym, this is one slogan that can bring customers in... ')
      setBtn('Read more')
    }
  }
   
  return (
   <>
   <div className="photos">
    <div className="classic">
        <h4>Body building with Classic</h4>
        <p>Trained achieve your goals</p>
      <button>$60*/M</button>
    </div>
    <div className="standard">
        <h4>Body building with standard</h4>
        <p>Trained under best trainers</p>
        <button>$120*/M</button>    </div>
    <div className="premium">
        <h4>Body building with Premium</h4>
        <p>Trained day and night</p>
        <button>$200*/M</button>
        </div>
   </div>
   <div className="grid">
    <div className="text">
       <p id='about'>ABOUT US</p>
       <h1>Welcome to Be strong!</h1>
       <h4>From the moment you walk through the door <br />You know gym base is a unique place</h4>
     <h5 >{text}
     </h5>
     <button onClick={more}>{btn}</button>
    </div>
    <div className="diff">
    <div className="fitness">
        </div>
   <div className="both">
   <div className="weight">
       </div> <br />
       <div className="weightt"></div>
   </div>
    </div>
   </div>
   </>
  )
}
