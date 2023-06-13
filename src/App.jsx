import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import List from './assets/list';
import {useState} from "react";
function App() {
const [inputList, setInputList] = useState("");
const [inputItems, setInputItems] = useState([]);



const itemEvent = (event) => {
setInputList(event.target.value);
}

const clickHandler = (event) =>{
setInputItems((oldItems) => {
  return [...oldItems, inputList];
});
setInputList('');
event.preventDefault();
}

const deleteItems = (id) => {
  console.log('delete');

  setInputItems( (oldItems) => {
  return oldItems.filter((arrelem, index) => {
    return id !== index;
  });
});
};

return (
<>
 <form required className='mt-5'>
 <input type='text' value={inputList}  onChange={itemEvent} />
 <input type="submit" onClick={clickHandler} value="+" />
 </form>

   <div className='container bg-dark mt-5'>
   <div className='row grid gx-4 gy-4  bg-primary'>

    {inputItems.map((itemsval, index) => {
    return  <List 
    key={index}
    id={index}
    onSelect={deleteItems}
    text={itemsval} 
    />
    })}
    </div>
   </div>


  
</>
)
}

export default App