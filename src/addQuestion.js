import React from 'react';

class addQuestion  extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {

        };

    }

    /**
     * @return {string}
     */
    ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
    };

    prepareRender(){

    let questions = this.props.questions.map((question, idx)=> {
        let answer1 = this.ID(),answer2= this.ID(),answer3= this.ID(),answer4= this.ID();
        //console.log(question)
        //question = question.question;

        let questionId = `question-${idx}`,
            answerId = `answer-${idx}`,
            answerTextId = `answerText-${idx}`;

        return(
            <div key={idx}>
                <div className="addQuiz__form__bas">
                    <div className="form-group">
                        <label className="addQuiz__label__quizzQuestion" htmlFor={questionId}>Question :</label>
                        <input className={questionId +" addQuiz__input__quizzQuestion form-control"}   data-id={idx} type='text' id={questionId} name={questionId} onChange={e => {this.props.setQuestionName(e)}}/>
                    </div>


                    <label className="addQuiz__label__quizzQuestion">Réponses :</label>

                    <div className="row">

                        <div className="col">

                            <div className="input-group">

                                <div className="input-group-prepend">
                                    <label htmlFor={answer1}>
                                        <div className="input-group-text">
                                            <i className="fa fa-check"> </i>
                                            <input type="radio" id={answer1} className={answerId} name={answerId} data-id={idx} onChange={e=>{this.props.setq1Correction(e)}} aria-label="Radio button for following text input"  />

                                        </div>
                                    </label>
                                </div>
                                <input type="text" id={answer1} name={answerTextId} className={"form-control " + answerTextId}  data-id={idx}  onChange={e=>{this.props.setq1Value(e)}} aria-label="Text input with radio button"  />
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label  htmlFor={answer2}>
                                        <div className="input-group-text">
                                            <i className="fa fa-check"> </i>
                                            <input type="radio" id={answer2} className={answerId} name={answerId} data-id={idx} onChange={e=>{this.props.setq2Correction(e)}} aria-label="Radio button for following text input" />
                                        </div>
                                    </label>
                                </div>
                                <input type="text" id={answer2} name={answerTextId} className={"form-control " + answerTextId}   data-id={idx}  onChange={e=>{this.props.setq2Value(e)}} aria-label="Text input with radio button" />
                            </div>

                        </div>

                        <div className="col">

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label  htmlFor={answer3}>
                                        <div className="input-group-text">
                                            <i className="fa fa-check"> </i>
                                            <input type="radio" id={answer3} className={answerId} name={answerId} data-id={idx} onChange={e=>{this.props.setq3Correction(e)}} aria-label="Radio button for following text input"  />
                                        </div>
                                    </label>
                                </div>
                                <input type="text" id={answer3} name={answerTextId} className={"form-control " + answerTextId}   data-id={idx} onChange={e=>{this.props.setq3Value(e)}} aria-label="Text input with radio button"  />
                            </div>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <label  htmlFor={answer4}>
                                        <div className="input-group-text">
                                            <i className="fa fa-check"> </i>
                                            <input type="radio" id={answer4} className={answerId} name={answerId} data-id={idx} onChange={e=>{this.props.setq4Correction(e)}} aria-label="Radio button for following text input" />
                                        </div>
                                    </label>
                                </div>
                                <input type="text" id={answer4} name={answerTextId} className={"form-control " + answerTextId}   data-id={idx}  onChange={e=>{this.props.setq4Value(e)}} aria-label="Text input with radio button"  />
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        )
    });
        return questions
}

    render(){

        return(
            <div>
                {this.prepareRender()}
            </div>
            )
        }

}


export default addQuestion;
