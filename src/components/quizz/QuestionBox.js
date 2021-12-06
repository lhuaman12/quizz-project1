import React from 'react';

class QuestionBox extends React.Component{
    render(){
        return (
        <div>
            <p className="center-align border-1">{this.props.question}</p>
        </div>
        )
    }
}

export default QuestionBox;