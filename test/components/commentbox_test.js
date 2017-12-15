import  {renderComponent,expect} from "../test_helper";


import  CommentBox from '../../src/components/commment_box';


// string to be tested the test name mainly
var check;
describe('commentbox',()=>{
    var component;

    beforeEach(()=>{
        component =renderComponent(CommentBox) ;
    });



    // actual testing  the testing specifiation
    it('has text text-area',()=>{


        // this componnet returned is nothing but an jquery obj in this we can use all jquery plugins
        // we want the test-area to testeed

        // const component =renderComponent(CommentBox) ;

      expect(component.find('textarea')).to.exist;
// as refence to the actual compnent mainly



    });

    it(' has a buttton',()=>{



       expect(component.find('button')).to.exist;


    });




    it('it has the correct class',()=>{



       expect(component).to.have.class('commentbox');


    })


    describe('input handling',()=> {


        beforeEach(()=>{

           component.find('textarea').simulate('change','hello');

        });



        it('show the text input', () => {

            expect(component.find('textarea')).to.have.value('hello');
            // console.log('check',check);


        });

        it('check if the input is clear', () => {


            component.simulate('submit');
           // expect(component.find('textarea')).to.have.value('');


        })

    });






});