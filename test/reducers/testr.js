import {renderComponent,expect} from "../test_helper";

import  savereducer from '../../src/reducers/savecomment_reducer';

import {save_comment} from "../../src/actions";


describe('tetsting the reducers',()=>{


// default case
    it('the action of unkouwn type',()=>{

        const fre=savereducer();

         console.log('fre',fre);


         expect(savereducer()).to.be.instanceOf(Array)

        expect(savereducer()).to.eql([]);

    });





    it('the action of save_comment type',()=>{

  const action={
      type:save_comment,
      payload:'new comment',
  }

        expect(savereducer([],action)).to.include('new comment')






    });







});