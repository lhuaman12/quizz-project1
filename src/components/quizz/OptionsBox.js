
import React from 'react';

class OptionsBox extends React.Component{
    
   constructor(props){
      super(props);
   }
    render(){
        return( 
         <div className="collection">
            {this.props.possible_answers.map
            (o=>{return <a href="#!" onClick={()=>{this.props.handleAnswer(o.isCorrect)}} class="collection-item">{o.text}</a>})}
        </div>
        
        )
     }
}

export default OptionsBox

