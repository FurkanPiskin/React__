import React, { useEffect, useState } from 'react';
import { words } from './WordList';
import Scorboard from './Scorboard';
import styles from "./guess.module.css";
import Questions from './Questions';
import Keyboard from './Keyboard';
import Timer from './Timer';

function Guess() {

  const [score, setScore] = useState(0);
  const [availableNumbers, setAvailableNumbers] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);
  const [inputValues, setInputValues] = useState([])
  var [lastRandomIndexs, setlastRandomIndexs] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [jokerletter, setjokerletter] = useState("");
  const [jokerIndex, setJokerIndex] = useState(null);
  const [jokerValue, setJokerValue] = useState('');
  const [controlclick, setcontrolclick] = useState(0);
  const[check,setCheck]=useState(null);


  const questions = words.map(word => word.question);
  const available = words.map(word => word.id - 1);


  useEffect(() => {

    setAvailableNumbers(available);
  

  }, []);





  const RandomNumberGenerator = () => {
    if (availableNumbers.length === 0) {
      alert("Oyun Bitti");
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers[randomIndex];
    setRandomNumber(selectedNumber);
    setAvailableNumbers(prevNumbers =>
      prevNumbers.filter(num => num !== selectedNumber)
    );
    setCheck(false);
  };

  useEffect(() => {



    setlastRandomIndexs([""]);
    setJokerIndex(null);
    setJokerValue('');
    clear();
  }, [randomNumber]);

  useEffect(() => {

  }, [])

  const clear = () => {
    
    const wordlength = words[randomNumber]?.word.length || 0;
    setInputValues(Array(wordlength).fill(''));
  };
 

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
const [concatenatedInput2,setconcatenatedInput2]=useState("");
  const checkForWord = () => {
    const inputValuesCopy = [...inputValues];
    const concatenatedInput = inputValuesCopy.join("");
    setconcatenatedInput2(concatenatedInput);
    const isTrue = concatenatedInput.includes(words[randomNumber].word);
    setCheck(isTrue);
    if (isTrue === true) {
      setScore(score + 10);
    }
    console.log(isTrue);
  };
  const [focusedInput, setFocusedInput] = useState(null);
  const handleInputFocus = (inputKey) => {
    setFocusedInput(inputKey);
  };



  const wordlength = words[randomNumber]?.word.length || 0;

  const inputs = [];
  for (let index = 0; index < wordlength; index++) {
    inputs.push(

      <input
        onFocus={() => handleInputFocus(index)}
        id={index}
        className='inputss'
        key={index}
        style={{ margin: "15px", cursor: "pointer" }}
        type="text"
        value={inputValues[index] || ''}
        onChange={e => handleInputChange(index, e.target.value)}
        maxLength={1}
        readonly
      ></input>
    );
  }
  const [inputElement, setİnputElement] = useState([]);
 





 








  const randomInputGenerator = () => {

    let randomIndex = Math.floor(Math.random() * (inputs.length));
    console.log(`${lastRandomIndexs.length}`);


    // Eğer lastRandomIndex dizisindeki herhangi bir elemanla eşleşiyorsa, yeni bir indeks üret

    while (lastRandomIndexs.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * inputs.length);
    }
    lastRandomIndexs.push(randomIndex);


    




 


    const letter = words[randomNumber].word[randomIndex];
    setjokerletter(letter);
    setJokerIndex(randomIndex);
    setJokerValue(letter);
    console.log(letter);



  };
  

  const handleJokerClick = () => {
    
    const yeniDizi = Array(wordlength).fill('').map((_, index) => inputValues[index] || '');
setInputValues(yeniDizi);

    if (jokerIndex !== null) {
      if (!Array.isArray(inputValues)) {
        console.error("inputValues is not an array!");
        return;
      }
    
      const newInputValues = [...inputValues];
      newInputValues[jokerIndex] = jokerValue;
      setInputValues(newInputValues);


    }
  };
  

 
  useEffect(() => {
    if (jokerIndex !== null && jokerValue !== '') {

      handleJokerClick();
    }
  }, [jokerIndex, jokerValue]);

  useEffect(() => {
    if (clickCount === 10) {

    }
    else if (clickCount < 10) {
      document.getElementById("jokerButton").style.display = "";
    }
  }, [clickCount])

  useEffect(() => {
    if (controlclick === 1) {
      document.getElementById("kontrolbutton").style.display = "none";
    }
    if (controlclick === 0) {
      document.getElementById("kontrolbutton").style.display = "";
    }

  }, [controlclick])



  return (
    <div className={styles.container}>
     {check && <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you correct answer</p>
  
</div>}

<div className={styles.wordgame} style={{ visibility: clickCount === 0 ? 'visible' : 'hidden' }} > 
  WORD GAME
</div>
     
      <div><Timer/></div>
      <div><Questions question={questions[randomNumber]} /></div>
      <div className={styles.bilgi}>
        {inputs}
        <br />

        <button id='kontrolbutton' onClick={() => { checkForWord(); setcontrolclick(1) }} type="button" className="btn btn-dark" style={{ visibility: clickCount !== 0 ? 'visible' : 'hidden' }}>KONTROL ET</button>
        <br />

        <button onClick={() => { RandomNumberGenerator(); setcontrolclick(0);setClickCount(clickCount+1) }} type="button" className="btn btn-outline-dark"> {clickCount === 0 ? "START" : "NEXT"}</button>

        <br />
        <Scorboard clickCount={clickCount} score={score}  />
        <button id="jokerButton" onClick={() => { randomInputGenerator(); setClickCount(clickCount + 1); }}style={{ visibility: clickCount !== 0 ? 'visible' : 'hidden' }}>JOKER</button>
        
      

        <br />
        <Keyboard clickCount={clickCount} focusedInput={focusedInput} inputElement={inputElement} setInputValues={setInputValues} inputs={inputs} conc={concatenatedInput2} />
        <br />
      
      </div>
    </div>
  );
}

export default Guess;
