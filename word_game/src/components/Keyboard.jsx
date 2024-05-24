import React,{useEffect, useState} from 'react'
import styles from "./Keyboard.module.css"
import Letterbutton from './KEYBOARD/Letterbutton'

function Keyboard({inputElement,focusedInput,inputs,setInputValues,conc,clickCount}) {
    const [inputValue, setInputValue] = useState([]);
   
    const [inputArray, setInputArray] = useState(new Array(inputs.length).fill(''));

    useEffect(()=>{
        console.log(focusedInput)
    },[focusedInput])


    const güncelle = (symbol) => {
        if(!inputElement ||focusedInput===null) return;
             

        inputElement.value=symbol;
        
      }
      useEffect(() => {
       handleInput2();
      }, [focusedInput]);
 

  
  
   
    const handleInput = (symbol) => {
      let newValue = '';
      if (symbol === "<--") {
          // Eğer tıklanan buton "<--" ise, son karakteri sil
          newValue = inputValue.slice(0, -1);
      } else if (symbol === "ENTER") {
          // Eğer tıklanan buton "ENTER" ise, bir işlem yapabilirsiniz (örneğin, formu göndermek)
          console.log("ENTER tuşuna basıldı. İşlem yapılabilir.");
          
          newValue = inputValue;
      } else {
          // Diğer durumlarda, tıklanan harfi input değerine ekle
          newValue = inputValue + symbol;
      }
      // Sadece bir karakter almasını sağla
      setInputValue(newValue.slice(0, 1));
  };
  const handleInput2 = (symbol) => {
    if (focusedInput ) { // focusedInput ve symbol değerlerinin doğruluğunu kontrol et
      setInputValues(prevInputValues => {
        const newInputValues = [...prevInputValues]; // Önce mevcut inputValues dizisinin bir kopyasını oluştur
        newInputValues[focusedInput] = symbol; // Kopya dizide ilgili indeksi güncelle
        return newInputValues; // Güncellenmiş kopya diziyi dön
      });
      güncelle(symbol); // setInputValues çağrıldıktan sonra güncelle fonksiyonunu çağır
    }
  }
  
  
       
    
  return (
    <div className={styles.gamekeyboard} style={{ visibility: clickCount !== 0 ? 'visible' : 'hidden' }}>
        <div className={styles.row}>
<Letterbutton symbol="Q" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="W" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="E" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="R" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="T" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="Y" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="U" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="I" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="O" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="P" handleInput={handleInput2} inputValue={inputValue}/>
</div>
<div className={styles.row}>
<Letterbutton symbol="A" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="S" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="D" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="F" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="G" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="H" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="J" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="K" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="L" handleInput={handleInput2} inputValue={inputValue}/>

</div>
<div className={styles.row}>
<Letterbutton symbol="<--" handleInput={handleInput} inputValue={inputValue}/>
<Letterbutton symbol="Z" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="X" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="C" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="V" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="B" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="N" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="M" handleInput={handleInput2} inputValue={inputValue}/>
<Letterbutton symbol="ENTER " handleInput={handleInput} inputValue={inputValue}/>


</div>


    </div>
  )
}

export default Keyboard