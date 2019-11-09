import React from 'react';

class AddQuiz extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            accounts: ['ala', 'mark', 'nngg', 'wweerr'],
            value: 'grapefruit',
            categoris: ['grapefruit','lime','coconut','mango'],
            name: undefined,
            questions:[],
            question:{name:undefined,answer1:{text:undefined,correct:false},answer2:{text:undefined,correct:false},answer3:{text:undefined,correct:false},answer4:{text:undefined,correct:false}}
        }
        ;


    }
    renderItem(index, key) {
        return (<div key={key}>{this.state.accounts[index]}</div>);
    }
    routeChange(e) {
        e.preventDefault();
        // let path = `http://localhost:3000`;
        // history.push(path);
        //console.log(e.target.elements.select);
        let j=-1;
        for(let i=0;i<e.target.elements.length+1;i++)
        {
            //console.log(this.state.categoris[i])
            if(this.state.value === this.state.categoris[i])
            {
                j=i;
            }
        }
        let table = e.target.elements;
        console.log(table[0].valueOf());
        console.log("Selected value is: "+j);
        console.log("quiz name is: "+this.state.name);
        // console.log(e.target.elements);
        // console.log(e.target.elements);

    }
    handleChange(event) {
        //console.log(event.target.value);
        this.setState({value: event.target.value});
    }
    updateInputValue(event)
    {
        //console.log(event.target.value);
        this.setState({name: event.target.value})
        //console.log(event.target.value);
    }
    setNameValue(e)
    {

        let val = e.target.value;
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                name: val
            }}));
        console.log(this.state.question.name)
    }
    setq1Value(e)
    {

        let val = e.target.value;
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                    answer1 :{
                    ...prevState.question.answer1,
                        text: val
                }
            }
        }));
        console.log(this.state.question.answer1.text);

    }
    setq2Value(e)
    {
        let val = e.target.value;
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer2 :{
                    ...prevState.question.answer2,
                    text: val
                }
            }
        }));
        console.log(this.state.question.answer2.text);
    }
    setq3Value(e)
    {
        let val = e.target.value;
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer3 :{
                    ...prevState.question.answer3,
                    text: val
                }
            }
        }));
        console.log(this.state.question.answer3.text);
    }
    setq4Value(e)
    {
        let val = e.target.value;
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer4 :{
                    ...prevState.question.answer4,
                    text: val
                }
            }
        }));
        console.log(this.state.question.answer4.text);
    }
    setq1Correction(e)
    {
        this.setAllqFalse();

        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer1 :{
                    ...prevState.question.answer1,
                    correct: true
                }
            }
        }));

    }
    setq2Correction(e)
    {
        this.setAllqFalse();
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer2 :{
                    ...prevState.question.answer2,
                    correct: true
                }
            }
        }));

    }
    setq3Correction(e)
    {
        this.setAllqFalse();
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer3 :{
                    ...prevState.question.answer3,
                    correct: true
                }
            }
        }));

    }
    setq4Correction(e)
    {
        this.setAllqFalse();
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer4 :{
                    ...prevState.question.answer4,
                    correct: true
                }
            }
        }));

    }

    setAllqFalse(){
        this.setState((prevState) =>({
            question : {
                ...prevState.question,
                answer1 :{
                    ...prevState.question.answer1,
                    correct: false
                },
                answer2 :{
                    ...prevState.question.answer2,
                    correct: false
                },
                answer3 :{
                    ...prevState.question.answer3,
                    correct: false
                },
                answer4 :{
                    ...prevState.question.answer4,
                    correct: false
                }
            }
        }));
    }

    addQuestion(e)
    {
        e.preventDefault();
        console.log(this.state.question);
        this.state.questions.push(this.state.question);
    }



    render()
    {

        return(

                <div className="addQuiz ">

                        <form className="addQuiz__form__haut" onSubmit= {e=>{this.routeChange(e)}}>
                            <div className="form-group">
                                <label className="addQuiz__label__quizzName" htmlFor="qName">Nom du quiz:</label>
                                <input className="addQuiz__input__quizzName form-control" type='text' name='qName' id="qName" onChange={e=>this.updateInputValue(e)}/>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="addQuiz__title__categorie input-group-text" htmlFor="qName">Catégorie:</label>
                                </div>
                                <select className="custom-select" id="qName" value={this.state.value} onChange={e=>this.handleChange(e)}>
                                    <option defaultValue value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>

                           {/*
                           Question:<br/>
                            showing all questions
                            {this.state.accounts.map(a => <div key={a}>{a}</div>)}
                            */}
                            <input type='submit' value='add quiz'/>
                        </form>




                        <form className="addQuiz__form__bas" onSubmit={e=>this.addQuestion(e)}>
                            <div className="form-group">
                                <label className="addQuiz__label__quizzQuestion" htmlFor="qQuestion">Question :</label>
                                <input className="addQuiz__input__quizzQuestion form-control" type='text' name='qQuestion' id="qQuestion" onChange={e=>this.setNameValue(e)}/>
                            </div>


                            <label className="addQuiz__label__quizzQuestion">Réponses :</label>

                            <div className="row">

                                <div className="col">

                                    <div className="input-group">

                                        <div className="input-group-prepend">
                                            <label htmlFor="qAnswer1">
                                                <div className="input-group-text">
                                                    <i className="fa fa-check"> </i>
                                                    <input type="radio" id="qAnswer1" name="qAnswer" aria-label="Radio button for following text input" onChange={e=>this.setq1Correction(e)} />
                                                </div>
                                            </label>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Text input with radio button"  onChange={e=>this.setq1Value(e)}/>
                                    </div>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <label htmlFor="qAnswer2">
                                                <div className="input-group-text">
                                                    <i className="fa fa-check"> </i>
                                                    <input type="radio" id="qAnswer2" name="qAnswer" aria-label="Radio button for following text input" onChange={e=>this.setq2Correction(e)} />
                                                </div>
                                            </label>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Text input with radio button"  onChange={e=>this.setq2Value(e)}/>
                                    </div>

                                </div>

                                <div className="col">

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <label htmlFor="qAnswer3">
                                                <div className="input-group-text">
                                                    <i className="fa fa-check"> </i>
                                                    <input type="radio" id="qAnswer3" name="qAnswer" aria-label="Radio button for following text input" onChange={e=>this.setq3Correction(e)} />
                                                </div>
                                            </label>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Text input with radio button"  onChange={e=>this.setq3Value(e)}/>
                                    </div>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <label htmlFor="qAnswer4">
                                                <div className="input-group-text">
                                                    <i className="fa fa-check"> </i>
                                                    <input type="radio" id="qAnswer4" name="qAnswer" aria-label="Radio button for following text input" onChange={e=>this.setq4Correction(e)}/>
                                                </div>
                                            </label>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Text input with radio button"  onChange={e=>this.setq4Value(e)}/>
                                    </div>
                                </div>

                            </div>

                            <input type='submit' value='Valider la question' />
                        </form>

                </div>

        )
    }
}

export default AddQuiz;
