import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Test from './Test';
import Classprofile from './Classprofile';
import Profile from './Profile';
import UseEffect from './UseEffect';

const Article = ({ title, snippet, date, length }) => {
  // Using useState div-abc
const [text, setText] = useState({first:"Faisal", last:"Ishfaq"});


  return (
<>
    <article className='post text-center'>
      <h2>Welcome to Article-Home (Div abc)</h2>
      <h2>Using (useState) Hook</h2>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
{/* ---------------------------------------------------------------------------- */}
{/* UseState Processing (div abc)*/}
<div className="abc text-center">
  <h1>(div abc)</h1>
  <h1>First name is {text.first} and Last name is {text.last}</h1>


<button type='button' onClick={()=> setText({first:"Faisal", last:"Ishfaq"})} 
style={{padding: "5px 15px",backgroundColor:"pink"}}>Full Name</button>

<button type='button' onClick={() => setText({ first:"Op_fasi", last:"Khokhar"})} 
style={{padding: "5px",margin:"10px",backgroundColor:"red"}}>setFull Name</button>

<button type='button' onClick={() => setText({...text, first:"(Op_fasi)"})} 
style={{padding: "5px",margin:"10px",backgroundColor:"green"}}>firstName</button>

<button type='button' onClick={() => setText({...text, last:"(Khokhar)"})} 
style={{padding: "5px",margin:"10px",backgroundColor:"orange"}}>lastName</button>

</div>

<hr />
<br />


<div className="abc-2 text-center">

<Test/>


</div>


<hr />
<br />


<div className="abc-3 text-center">

<Profile/>

</div>



<hr />
<br />


<div className="abc-4 text-center">

<Classprofile />

</div>


<hr />
<br />

{/* --------------------------------------------------------------------------------------------- */}
{/* useEffect Hook processing now */}
<div className="abc-5 text-center">
  <UseEffect/>

</div>











</>

  )
}

export default Article