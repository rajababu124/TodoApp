import { RxCrossCircled } from "react-icons/rx";
import "../App.css";
const List = (props) => {

  return (
    <>
   
   <div className='col-md-4 shadow col-12 bg-light' >
      <span><RxCrossCircled onClick={() => {
          props.onSelect(props.id);
        }} /> </span> {props.text}
     </div>
    </>
  )
}

export default List
