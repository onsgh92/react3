import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FullName/>
       <ProfilePhoto/>
<Address/>
      </header>
    </div>
  );
}

export default App;
