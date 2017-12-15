// import _$ from 'jquery';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import jsdom from 'jsdom';
// import chai, { expect } from 'chai';
// import chaiJquery from 'chai-jquery';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../src/reducers';
//
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = global.document.defaultView;
// global.navigator = global.window.navigator;
// const $ = _$(window);
//
// chaiJquery(chai, chai.util, $);
//
// function renderComponent(ComponentClass, props = {}, state = {}) {
//   const componentInstance =  TestUtils.renderIntoDocument(
//     <Provider store={createStore(reducers, state)}>
//       <ComponentClass {...props} />
//     </Provider>
//   );
//
//   return $(ReactDOM.findDOMNode(componentInstance));
// }
//
// $.fn.simulate = function(eventName, value) {
//   if (value) {
//     this.val(value);
//   }
//   TestUtils.Simulate[eventName](this[0]);
// };
//
// export {renderComponent, expect};

//setting up a browser



// jsdom a fake  browser bundle.js-> nodejs
import  {Provider} from 'react-redux';

import  { createStore ,applyMiddleware} from 'redux';




import jsdom  from 'jsdom';

import React from 'react';

global.document=jsdom.jsdom('<html> <body> </body> </html>');

global.window=document.defaultView;
import TestUtilis from 'react-addons-test-utils';
import Reactdom from 'react-dom';
import jquery from 'jquery';

import  reducers from '../src/reducers/index'
import {expect} from 'chai';

import  chai from 'chai';
//fake jquery

import chaijquery from 'chai-jquery';
const $=jquery(global.window);
// actual jquery with fake window fake the window entire jquery libary

// actaual acess of the react-dom

// render the react componnet  to the fake dom and a virtual instance is there
// the state here is an applicatgion level state mainly
// we want to add inatial level state to it mainly





chaijquery(chai,chai.util,$);






                                                      //data needed to be added
    function renderComponent(Componentclass,props,state)  {

     // the reference of the actual render eleme   // html dom
     const componnentinstance=TestUtilis.renderIntoDocument(

         <Provider store={createStore(reducers,state)}>
         <Componentclass  {...props} />
         </Provider>);
// it gives us the html we are intersted in mainly

       const html= Reactdom.findDOMNode(componnentinstance
       );// as refernce to the html

       return $(html);



   }



   $.fn.simulate=function(eventName,value){

        if(value){
            this.val(value);
        }

        //this as refernce to that parte
          TestUtilis.Simulate[eventName](this[0]);
// tu.stimulatr.(property)(refernce we passed);

              };




   export {
       expect,
       renderComponent
   };




//global===window;

// creates a fake js dom a terminal  to fool the jquery
















// bulid rendercomponent for the react compnnent












// build to check the errors buliding stimulating errors







// build chai jquery for the writing of the tests





