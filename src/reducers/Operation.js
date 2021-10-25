
const initialState = "";
const result = (state=initialState,action) =>{
    switch (action.type) {
      
        case "CLICK" : try
						{ state= state + (action.payload);
							 }
						

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
			
			let i=0;
			let first=0;
			let second=0;
			let flag=1;
			let op;
			let result;
							

							for(i=0;i<state.length-1;i++)
							{
								if(state[i]=='+' || state[i]=='-' || state[i]=='*' || state[i]=='/'  )
								{
									op=state[i];
									flag=i;
									break;
								}
								
								
									first= (1*first) + state[i];
								
								
							}
							for(i=flag+1;i<state.length;i++)
							{
								
								
								
									second= (1*second) + state[i];
									
								
								
							}
							//console.log(first);
							//console.log(op);  
							//console.log(second);
							
							if(op=='+')
							{
								result= parseFloat(first) +  parseFloat(second);
							}
							else if(op=='-')
							{
								result= first-second;
							}
							else if(op=='*')
							{
								result= first*second;
							}
							else{
								result= first/second;
							}
							//console.log(state);
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



