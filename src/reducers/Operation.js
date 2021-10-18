
const initialState = "";
const result = (state=initialState,action) =>{
    switch (action.type) {
      
        case "CLICK" : try
						{ state= state + (action.payload); }

						catch(error)
   							 {
        						state= state.concat(action.payload);
    						}
        				
        return state;

        case "CLEAR": state="";
        			 return state;

        case "BACKSPACE": 	try{
        					state=state.slice(0,state.length - 1);
        					return state;
        					}
        					catch(error)
   							 {
        						state="";
        						return state;
    						}
    	case "RESULT":  try{
			let userInput = state;
			
			let result = Function("return " + userInput)();
							state=result;
							return state;
        					
        					}
       					 catch{
           					 state= "Wrong input";
           					 return state;
       						 }
           
    
        default: return state;
            
    }

}
export default result;



