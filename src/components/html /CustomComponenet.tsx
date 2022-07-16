import Greet from '../props/Greet';

const CustomComponenet = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.isLoggedIn}</div>;
};

export default CustomComponenet;
