import './App.css';
import Greet from './components/props/Greet';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import Heading from './components/props/Heading';
import Oscar from './components/props/Oscar';
import Button from './components/props/Button';
import Input from './components/props/Input';
import Container from './components/props/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/contextFutureValue/UserContext';
import User2 from './components/contextFutureValue/User2';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Lee'
  };

  const nameList = [
    {
      first: 'Harry',
      last: 'king'
    },
    {
      first: 'Cayle',
      last: 'Kent'
    },
    {
      first: 'Roy',
      last: 'Edison'
    }
  ];

  return (
    <div className="App">
      {/* <Greet name="tony" messageCount={20} isLoggedIn={false} /> */}
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo </Heading>
      </Oscar>
      <Greet name="tony" isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log('click', event, id);
        }}
      />
      <Input value="" handlgeChange={(e) => console.log(e)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User2 />
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
