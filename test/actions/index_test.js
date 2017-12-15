import {renderComponent,expect} from "../test_helper";

import { savecomment } from "../../src/actions/index";
import {save_comment} from "../../src/actions";

describe('action tester',()=>
{



    describe('saving comment',()=>
    {

        it('has the correct type',()=>{

            const action=savecomment();
            expect(action.type).to.equal(save_comment)





        });



        it('has the correct payload',()=>{
            const action=savecomment('new comment');
            expect(action.payload).to.equal('new comment')



        })





    });






});