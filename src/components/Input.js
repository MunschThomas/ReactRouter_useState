const Input = (props) => {
  const { userInput, setUserInput, nameInput } = props;

  return (
    <label htmlFor="name">
      {nameInput} :{" "}
      <input
        id="name"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </label>
  );
};
export default Input;
