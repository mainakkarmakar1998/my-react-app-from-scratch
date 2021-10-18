import React from 'react';
import {render} from 'react-dom';
import Cal from './Cal';
import store from './store';
import {Provider}  from "react-redux";

render(
        <div>
         <Provider store={store}>
      <Cal heading="Basic React Calculator"/>
      </Provider>
       
        </div>
       ,document.getElementById("root")
        );