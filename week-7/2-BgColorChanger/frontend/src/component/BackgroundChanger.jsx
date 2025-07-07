import { useState } from 'react';

export const BackgroundChanger = () => {
    console.log("Hola")
  const [currentColor, setCurrentColor] = useState('white');
  const colors = ['Red', 'Yellow', 'Black', 'Purple', 'Green', 'Blue'];

  function ChangeHandler(color) {
 
    setCurrentColor(color);
  }

  function resetToDefault() {
    setCurrentColor('white');
  }

  return (
    <div
      className="background-color-changer"
      style={{
        backgroundColor: currentColor,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}
    >
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => ChangeHandler(color)}
          style={{
            background: color,
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          {color}
        </button>
      ))}
      <button
        onClick={resetToDefault}
        style={{
          background: '#333',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Default
      </button>
    </div>
  );
};