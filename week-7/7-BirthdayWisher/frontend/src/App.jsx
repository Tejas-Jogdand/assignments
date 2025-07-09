import { useState } from 'react';
import { BirthdayInput } from './component/BirthdayInput';
import { WishCardList } from './component/WishCardList';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="app-container">
      {!isSubmitted ? (
        <BirthdayInput
          name={name}
          setName={setName}
          onSubmit={() => setIsSubmitted(true)}
        />
      ) : (
        <WishCardList name={name} />
      )}
    </div>
  );
}

export default App;