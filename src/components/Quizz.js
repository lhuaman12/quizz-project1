import React from 'react';
import QuestionBox from './quizz/QuestionBox';
import questions from '../examples/questions.json';
//import Options from './quizz/Options';

class Quizz extends React.Component{
    
      constructor(props){
       super(props)

       this.state = {
          questions: questions,
          index: 0,
          score : 0,
          showScore : false
        }
      this.handleAnswer=this.handleAnswer.bind(this);
      this.showQuestions=this.showQuestions.bind(this);
      this.shuffleQuestions=this.shuffleQuestions.bind(this);
      }
      componentDidMount(){
         this.shuffleQuestions(); // Mezclamos las preguntas al iniciar componente
      }
    
    shuffleQuestions(){
          const result = questions.sort((a, b) => 0.5 - Math.random());
          this.setState({questions:result});
    }
    handleAnswer(isCorrect){
      const {questions,index,score} =this.state
      if(isCorrect)
        this.setState({score:score+1});
      
      if(index<questions.length-1){

        this.setState({index:index+1});
      }
      else {
        this.setState({showScore:true});
      }

    }

    showQuestions(){
      const {index} = this.state;
      return(
        <div>
          <div className="row">
            <div className="col s6">
              <div className="card">
                  <div className="card-content">
                    <QuestionBox  question={questions[index].question }/>
                    <div className="collection">
                      {questions[index].possible_answers.map
                      (o=>{return <a href="#!" onClick={()=>{this.handleAnswer(o.isCorrect)}} class="collection-item">{o.text}</a>})}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
      
    render(){
        const {showScore} = this.state;
        if(!showScore){
          return (this.showQuestions());
        }
        else {
          return( 
          <div>
            <div className="row">
              <div className="col s6">
                <div className="card">
                  <div className="card-content">
                    <span className="card-title">Quizz finalizado</span>
                    <br/>
                    <p>{"Tu puntuacion es "+ this.state.score}</p>
                    <p>Quieres intentarlo de nuevo?</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          )
        }
    }
  }

export default Quizz;