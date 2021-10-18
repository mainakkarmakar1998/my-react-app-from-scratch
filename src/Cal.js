import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {clear ,res ,backspace , click } from "./actions";
import "./Cal.css";


const Cal = (props) =>{ 

      const result = useSelector(state => state.result);
  
      const dispatch = useDispatch();

  
 
   return(
        <div className="ldiv">
        <h1>{props.heading}</h1><br/>
       
          <table border="0" cellSpacing="0" style={{height:"400px",width:"400px",alignSelf:"center"}}>
          
          <tr>
              <td colSpan="4"><input type="text" value={result}/></td>
          </tr>
          <tr>
              <td className="digit"><button name="7" onClick={() => dispatch(click(7))}>7</button></td>
              <td className="digit"><button name="8" onClick={() => dispatch(click(8))}>8</button></td>
              <td className="digit"><button name="9" onClick={() => dispatch(click(9))}>9</button></td>
              <td className="operator"><button name="*" onClick={() => dispatch(click("*"))}>X</button></td>
          </tr>
          <tr>
              <td className="digit"><button name="4" onClick={() => dispatch(click(4))}>4</button></td>
              <td className="digit"><button name="5" onClick={() => dispatch(click(5))}>5</button></td>
              <td className="digit"><button name="6" onClick={() => dispatch(click(6))}>6</button></td>
              <td className="operator"><button name="/" onClick={() => dispatch(click("/"))}>/</button></td>
          </tr>
          <tr>
              <td className="digit"><button name="1" onClick={() => dispatch(click(1))}>1</button></td>
              <td className="digit"><button name="2" onClick={() => dispatch(click(2))}>2</button></td>
              <td className="digit"><button name="3" onClick={() => dispatch(click(3))}>3</button></td>
              <td className="operator"><button name="-" onClick={() => dispatch(click("-"))}>-</button></td>
          </tr>
          <tr>
              <td className="digit"><button name="0" onClick={() => dispatch(click(0))}>0</button></td>
              <td className="C"><button id="backspace" onClick={() => dispatch(backspace())}>C</button></td>
              <td className="digit"><button name="." onClick={() => dispatch(click("."))}>.</button></td>
            
              <td className="operator"><button name="+" onClick={() => dispatch(click("+"))}>+</button></td>
          </tr>
          <tr>
              <td colSpan="3" className="clear"><button id="clear" onClick={() => dispatch(clear())}>Clear</button></td>
              <td className="res"><button id="res" onClick={() => dispatch(res())}>=</button></td>
          </tr>
         
          </table>
         
        </div>
    ) 
}
export default Cal;
