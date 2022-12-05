
import React, {useState, useEffect} from 'react'
import moment from 'moment'

// const About = () => {
  const UseEffect = ({ title, snippet, date, length }) => {
// const [effect, setEffect] = useState(false);
const [effect, setEffect] = useState("Users");
// const [effect, setEffect] = useState(1);
const [items, setItems] = useState([]);


const [windowWidth, setwindowWidth] = useState(window.innerWidth)

const [resource, setResource] = useState(0);


  // useEffect(()=>{
  //   console.warn(effect)
  // },[effect===5])

  
// console.log('render')
// -------------------------------------------------------------------------------------
// (1)
useEffect(()=>{
    // console.log("effect changed")
    // return () =>{
    //   console.log('return from effect change')
    // }

    fetch(`https://jsonplaceholder.typicode.com/${effect}`)
    .then(response => response.json())
    .then(json => setItems(json))
    console.log('it is effect '+ effect)

  }, [effect])
  
  // -------------------------------------------------------------------------------------
// (2)
  
  const handleResize = ()=>{
    setwindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    console.log(windowWidth)

    return() =>{
      window.removeEventListener('resize', handleResize)
    }

  }, [windowWidth])
// -------------------------------------------------------------------------------------
// thapa Section (3)

const [count, setCount] = useState(0);

useEffect(()=>{
  // console.log('Hello count useEffect');
  document.title = `Chats (${count})`
  console.log('count State is '+ count)
},[count]);

// -------------------------------------------------------------------------------------
// Resource effect (4)

useEffect(()=>{
  console.log('it is resource State '+ resource)
},[resource]);

// -------------------------------------------------------------------------------------
return (
    <>
    <article className='post'>
      <h2>Welcome to UseEffect Component</h2>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
{/* ---------------------------------------------------------------------------- */}
{/* useEffect Hook abc-5    (4)  */}

{/* <button onClick={() => setEffect(!effect)} style={{padding: "5px",margin:"10px",backgroundColor:"pink"}}>Toggle</button> */}
<button onClick={() => setResource(resource+1)} style={{padding: "5px",margin:"10px",backgroundColor:"pink"}}>Update State</button>
{resource ? <> 
            <h1>Starting useEffect resource State....{resource}</h1>
            </>
          : <p>The Value is false.(abc-5)</p>}


<hr /> <br />


{/* ---------------------------------------------------------------------------- */}
{/* const [effect, setEffect] = useState('Posts');    (1)  */}

<div className="buttons">
  <button onClick={()=> setEffect('Posts')}>Posts</button>
  <button className="m-2" onClick={()=> setEffect('Users')}>Users</button>
  <button onClick={()=> setEffect('Comments')}>Comments</button>
</div>
<h1>{effect}</h1>

{items.map(item => {
  return <pre>{JSON.stringify(item)}</pre>
})}


<hr /><br />
{/* ---------------------------------------------------------------------------- */}
{/* const [windowWidth, setwindowWidth] = useState(window.innerWidth)     (2) */}
<h2>window width auto resize</h2>
<div className="window">
  {windowWidth}
</div>

<hr /><br />

{/* ---------------------------------------------------------------------------- */}
{/* Thapa Section for useEffect       (3) */}

<div className="count">
  <h1>useEffect count State update title {count}</h1>
  <button onClick={() => setCount(count + 1)} style={{padding: "5px",margin:"10px",backgroundColor:"gray"}}>Click😉</button>
</div>

    </>
  )
}

export default UseEffect
