import moment from 'moment'
import React, {useState, useEffect} from 'react'



// const About = () => {
const Profile = ({ title, snippet, date, length }) => {

      // Using useState div-abc-3
// const [loggedIn, setLoggedIn] = useState(true);
const [loggedIn, setLoggedIn] = useState(0);

  return (
    <>
    <article className='post'>
      <h2>Welcome to Profile Component (div abc-3)</h2>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
{/* ---------------------------------------------------------------------------- */}

{/* abc-3 */}
<button onClick={() => setLoggedIn(!loggedIn)} style={{padding: "5px",margin:"10px",backgroundColor:"pink"}}>Toggle</button>

{/*                                     if-condition                                           else-condition               */}
{loggedIn ? <> 
{loggedIn ? <h1>Welcome to div abc-3 - profile and Article mixed - . (if-else-loggedIn)</h1> : <h1>Welcome to div abc-3 profile and Article mixed. (if-else-loggedIn)</h1>}


{/* multiConditions */}
{loggedIn==1?<h1>Welcome to user-1(if-else)</h1>: loggedIn==2?<h1>Welcome to user-2(if-else)</h1>: <h1>Welcome to user-3(if-else)</h1>}
</>
  : <p>The Value is false.(abc-3)</p>}









    </>
  )
}

export default Profile
