import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const refInput = useRef();

    // already input will be focused
    useEffect(() => {
        refInput.current.focus();
    }, []);

    const handleButtonClick = () => {
        refInput.current.focus();
    };

    return (
        <div>
            <input ref={refInput} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
