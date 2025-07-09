import { WishCard } from './WishCard';

export const WishCardList = ({ name }) => {
  const messages = [
    `Wishing you an amazing year ahead, ${name}! 🎂`,
    `${name}, hope your birthday is as awesome as you are! 🥳`,
    `Have a blast today, ${name}. You deserve all the cake! 🍰`,
  ];

  return (
    <div className="wish-card-list">
      {messages.map((msg, idx) => (
        <WishCard key={idx} message={msg} />
      ))}
    </div>
  );
};