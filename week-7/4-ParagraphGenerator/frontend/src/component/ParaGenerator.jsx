import { useRef } from 'react'

export const ParaGenerator = () => {

    const inputRef = useRef();
    const paraRef = useRef();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const generatePara = () => {
        const count = parseInt(inputRef.current.value) || 0;
        let para = '';
        
        for (let i = 0; i < count; i++) {
            let wordLenght = Math.floor(Math.random() * 8) + 1;
            let word = ''
            for (let j = 0; j < wordLenght; j++) {
                const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
                word += randomChar;
            }
            para += " "+word;
        }

        paraRef.current.textContent = para.trim();
    }

    return (
        <>
            <div>
                <h3>Para Generator</h3>
                <input ref={inputRef} type="number" name="wordCount" id="wordCount" placeholder="Enter number of words" />
                <button onClick={() => { generatePara() }}>Generator</button>
            </div>
            <div>
                <p ref={paraRef}></p>
            </div>
        </>
    )
}