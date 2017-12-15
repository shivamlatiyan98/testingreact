import  { renderComponent,expect} from "./test_helper";


import App from '../src/components/app';
import CommentBox from "../src/components/commment_box";





describe('App',()=>{
    let component;

    beforeEach(()=>{
         component=renderComponent(App);
    });


    // write atest for the cooment bxox

    it('has the comment box',()=>{

// the classname is selected to find by class name
        expect(component.find('.commentbox')).to.exist;

    });



    it('has the comment list',()=>{

// the classname is selected to find by class name
        expect(component.find('.commentlist')).to.exist;

    })







});
















