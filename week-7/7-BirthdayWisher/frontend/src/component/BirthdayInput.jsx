export const BirthdayInput = ({ name, setName, onSubmit }) => {
  return (
    <div className="birthday-input">
      <h2>🎉 Create a Birthday Wish</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onSubmit} disabled={!name.trim()}>
        Done
      </button>
    </div>
  );
};