import  React from 'react';
import {save_comment} from "../actions";




export default  function (state=[],action) {


    if(action) {
        switch (action.type) {

            case save_comment:

                return [...state, action.payload];



            default:
                return state;


        }
    }

   return state

}