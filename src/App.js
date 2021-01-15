import './App.css';
import {  TwitterTweetEmbed } from "react-twitter-embed";
const tweetData = [
  '1349785510009425921',
  '1349385530102870017',
  '1349064904242647041',
  '1348706688702943234',
  '1348341536669528064',
  '1348106156372234241',
  '1347599921399021568',
  '1346908444431851522',
  '1346523347924860928',
  '1346169313225441280',
  '1345799138101719047',
  '1345402784921706497',
  '1345065254443577345',
  '1344704388024029184',
  '1344295001333714944',
  '1343877538204930048',
  '1343420727790239744'
]
function App() {
  return (
    <div className="App">
      <nav id="nav">
        <div className="container">
        <div className="logo">
          <h3>#151DaysOfCode</h3>
        </div>
        <ul>
          <li><a href="#nav">Home</a></li>
          <li><a href="#main">Journey</a></li>
          <li><a href="#contact">Connect</a></li>
        </ul>
        </div>
      </nav>
      <header>
        <div className="container">
        <h1>My Journey of #151DaysOfCode</h1>
        <p>I am sharing my journey of #151DaysOfCode on twitter. I created this webapp to create a collection
           of all my tweets at one place. So that I can keep count of my progress. </p>
        </div>
      </header>
      <main id="main">
        <div className="main-title">
            <h2>My Journey!</h2>
        </div>
        <div className="container">
            {
              tweetData.map((id)=>{ 
                return(
                  <TwitterTweetEmbed
                  tweetId={id} key={id}
                />             
                );
              })
            }
        </div>
      </main>
      <footer id="contact">
        <h3>Let's Connect on Social Platform.</h3>
      <ul>
            <li>
                <a href="https://github.com/rushi-173">
                    <i className="fab fa-github" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="https://rushikeshchaudhari.netlify.app/">
                    <i className="fas fa-briefcase"></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/rushi_173">
                    <i className="fab fa-twitter-square"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/rushi173">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
