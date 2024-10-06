import React, {ChangeEvent, useState} from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { selectRandomPage } from "./app-selectors";
import { setRandomAddressTC } from "./app-thunks";
import { useAppDispatch } from "./store";
import axios from "axios";

function App() {
  const [hello, setHello] = useState('')
  const randomPage = useSelector(selectRandomPage);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(randomPage);

  const getHello = async () => {

   const result = await  axios.get('http://localhost:8080')
      console.log(result)
    setHello(result.data)

  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleButtonClick = () => {
    dispatch(setRandomAddressTC(inputValue));
  };

  return (
      <div className="App">
        <div>
          <input type="url" value={inputValue} onChange={handleInputChange} />
          <button onClick={getHello}>+</button>
          {hello && <h1>{hello}</h1>}
        </div>
      </div>
  );
}

export default App;
