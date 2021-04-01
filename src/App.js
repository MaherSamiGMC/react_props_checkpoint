
import './App.css';
import Profile from "./profile/Profile"

function App() {
  const handleName=(x)=>alert(x);
  return (
    <div className="App card">
  
     <Profile handleName={handleName} bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."> <img src='/maher.jpg' alt="myphoto" style={{width :"100%"}}/> </Profile>
    </div>
  );
}

export default App;
