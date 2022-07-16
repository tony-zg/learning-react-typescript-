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
import { List } from './components/generics/List';
import RandomNumber from './components/restriction /RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/html /Button';
import { Text } from './components/polymorphic/Text';

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
      {/* <List
        items={['Apple', 'Orange', 'Peach']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
