type InputProps = {
  value: string;
  handlgeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handlgeChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Input;
