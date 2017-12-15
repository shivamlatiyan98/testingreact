import React, { Component} from 'react';


import {connect} from 'react-redux';



//  class Commentlist extends Component{
//
//      constructor(props){
//          super(props);
//
//      }
//
//
//      componentDidMount(){
//
//       console.log(this.props.comments);
//
//
//         console.log(list);
//
//      }
//
//
//
//
//
//
//
//      // renderlist() {
//
//
//
//
//
//
//
//     render(){
//         const list = this.props.comments.map(comment => <li key={comment}>{comment}</li>);
//
//
//         return (
//
//
//             <ul className="commentlist">
//
//                 {list}
//
//
//
//             </ul>
//
//
//         );
//
//     }
//
//
//
//
//
//
// }
const Commentlist = (props) => {
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

    return (
        <ul className="commentlist">{list}</ul>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(Commentlist);





























