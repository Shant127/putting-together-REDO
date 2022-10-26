import UserCard from './components/UserCard';
import './App.css';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <UserCard firstName= "Jane" lastName= "Doe" age={45} hairColor= "Black"/>
      <UserCard firstName= "John" lastName= "Smith" age={88} hairColor= "Brown"/>
    </fieldset>
  );
}

export default App;
