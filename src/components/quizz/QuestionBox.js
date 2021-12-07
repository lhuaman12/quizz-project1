import React from 'react';

class QuestionBox extends React.Component{
    render(){
        return (
        <div>
            <p className="center-align">{this.props.question}</p>
        </div>
        )
    }
}

export default QuestionBox;