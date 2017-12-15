import {renderComponent,expect} from "../test_helper";

import  Commentlist  from '../../src/components/commentlist';



describe('commentlist',()=>{
  let component;


    beforeEach(() => {
        const props = { comments: ['new comment', ' new sexy'] };
        component = renderComponent(Commentlist, null, props);
    });




    it('each has li with comment',()=>{

        // returning the li arrtay and returnun g itgs lenght to 2
       expect(component.find('li').length).to.equal(2);





    });



    it('has all the comment into it',()=>{

        //$('.name').should.have.value('John Doe');
        //expect($('.year')).to.have.value('2012');

        expect(component).to.contain('new comment');
         expect(component).to.contain('new sexy');



    });


    // it('',()=>{
    //
    //
    // });








});

