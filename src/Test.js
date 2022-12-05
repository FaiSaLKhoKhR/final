import React, {useState, useEffect} from 'react'
import moment from 'moment'

const Test = ({ title, snippet, date, length }) => {
    // Using useState div-abc-2
const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <article className='post'>
      <h2>Welcome to Test Component (div abc-2)</h2>
      </article> 

{/* ---------------------------------------------------------------------------- */}

{/* abc-2 */}
<button onClick={() => setIsToggled(!isToggled)} style={{padding: "5px",margin:"10px",backgroundColor:"pink"}}>Toggle</button>
{/* {isToggled && <Test />} */}
{isToggled ? <> 
      <article className='post'>
      <h1>its using useState for toggle and Test component comes with toggle.</h1>
      <h1>Test and Article are attached for this method</h1>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article> 
    </>
  : <p>The Value is false.(abc-2)</p>}









    </>
  )
}

export default Test
