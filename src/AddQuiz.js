import React from 'react';
import Select from 'react-select';
import AddQuestion from './addQuestion.js';


class AddQuiz extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            quizzName: "Sans Titre",
            DefaultSelectValue: "Culture",
            categories: [
                {label : 'Culture',value : 'culture'},
                {label : 'Politique', value : 'politique'},
                {label : 'Histoire',value : 'histoire'},
                {label : 'Enigme',value : 'enigme'}],
            nbrQuestion: 3,
            question0: {
                    name:undefined,
                    answerText1:'undefined',
                    answerText2:'undefined',
                    answerText3:'undefined',
                    answerText4:'undefined',
                    answerCorrect1: false,
                    answerCorrect2: false,
                    answerCorrect3: false,
                    answerCorrect4: false,
                },
            question1: {
                    name:undefined,
                    answerText1:'undefined',
                    answerText2:'undefined',
                    answerText3:'undefined',
                    answerText4:'undefined',
                    answerCorrect1: false,
                    answerCorrect2: false,
                    answerCorrect3: false,
                    answerCorrect4: false,
                },
            question2: {
                    name:undefined,
                    answerText1:'undefined',
                    answerText2:'undefined',
                    answerText3:'undefined',
                    answerText4:'undefined',
                    answerCorrect1: false,
                    answerCorrect2: false,
                    answerCorrect3: false,
                    answerCorrect4: false,
                }



        };
        this.setQuestionName = this.setQuestionName.bind(this)
        this.setq1Value = this.setq1Value.bind(this)
        this.setq2Value = this.setq2Value.bind(this)
        this.setq3Value = this.setq3Value.bind(this)
        this.setq4Value = this.setq4Value.bind(this)

        this.setq1Correction = this.setq1Correction.bind(this)
        this.setq2Correction = this.setq2Correction.bind(this)
        this.setq3Correction = this.setq3Correction.bind(this)
        this.setq4Correction = this.setq4Correction.bind(this)
    }

    routeChange(e) {
        e.preventDefault();

        // let path = `http://localhost:3000`;
        // history.push(path);
        //console.log(e.target.elements.select);
        console.log(this.state.questions);
        console.log("Selected value is: ");
        console.log("quiz name is: "+this.state.name);
    }



    setQuizzName(event)
    {
        this.setState({quizzName: event.target.value})
    }

    setQuestionName(e)
    {

        let id = e.target.dataset.id;
        let val = e.target.value;
        this.updateItem(id, {name: val});

    }


    setq1Value(e)
    {

        let id = e.target.dataset.id;
        let val = e.target.value;
        let q1 = "question"+id;
        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerText1: val

            }
        }),function(){
            console.log(this.state)
        })
    }
    setq2Value(e)
    {
        let id = e.target.dataset.id;
        let val = e.target.value;
        let q1 = "question"+id;
        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerText2: val

            }
        }),function(){
            console.log(this.state)
        })
    }
    setq3Value(e)
    {
        let id = e.target.dataset.id;
        let val = e.target.value;
        let q1 = "question"+id;
        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerText3: val

            }
        }),function(){
            console.log(this.state)
        })
    }
    setq4Value(e)
    {
        let id = e.target.dataset.id;
        let val = e.target.value;
        let q1 = "question"+id;
        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerText4: val

            }
        }),function(){
            console.log(this.state)
        })
    }
    setq1Correction(e)
    {

        let id = e.target.dataset.id;
        let q1 = "question"+id;

        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerCorrect1:true,
                answerCorrect2: false,
                answerCorrect3: false,
                answerCorrect4: false,

            }
        }),function(){
            console.log(this.state)
        })


    }
    setq2Correction(e)
    {

        let id = e.target.dataset.id;
        let q1 = "question"+id;


        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerCorrect1:false,
                answerCorrect2: true,
                answerCorrect3: false,
                answerCorrect4: false,

            }
        }),function(){
            console.log(this.state)
        })


    }
    setq3Correction(e)
    {

        let id = e.target.dataset.id;
        let q1 = "question"+id;


        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerCorrect1:false,
                answerCorrect2: false,
                answerCorrect3: true,
                answerCorrect4: false,

            }
        }),function(){
            console.log(this.state)
        })


    }
    setq4Correction(e)
    {

        let id = e.target.dataset.id;
        let q1 = "question"+id;


        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                answerCorrect1:false,
                answerCorrect2: false,
                answerCorrect3: false,
                answerCorrect4: true,

            }
        }),function(){
            console.log(this.state)
        })


    }


    addQuestion(e)
    {
        e.preventDefault();
        this.setState({
            nbrQuestion : +1
        })
        let qid = "question"+ this.state.nbrQuestion;
        this.setState({

        [qid]: {
                name:undefined,
                answerCorrect1: false,
                answerCorrect2: false,
                answerCorrect3: false,
                answerCorrect4: false,
                answerText1:'undefined',
                answerText2:'undefined',
                answerText3:'undefined',
                answerText4:'undefined',
        }});
    this.renderQuestion(qid);

    }
    renderQuestion(question){
        return(
            <AddQuestion
                questions={[]}
                setQuestionName={this.setQuestionName}
                setq1Value={this.setq1Value}
                setq2Value={this.setq2Value}
                setq3Value={this.setq3Value}
                setq4Value={this.setq4Value}
                setq1Correction={this.setq1Correction}
                setq2Correction={this.setq2Correction}
                setq3Correction={this.setq3Correction}
                setq4Correction={this.setq4Correction}

            />
            )

    }



    render()
    {


        return(

            <div className="addQuiz ">

                <form id="quizzform" className="addQuiz__form__haut" onSubmit= {e=>{this.routeChange(e)}}>

                    <div className="form-group">
                        <label className="addQuiz__label__quizzName" htmlFor="qName">Nom du quiz:</label>
                        <input className="addQuiz__input__quizzName form-control" type='text' name='qName' id="qName" onChange={e=>this.setQuizzName(e)}/>
                    </div>

                    <div className="form-group">
                        <label className="addQuiz__title__categorie" htmlFor="qName">Catégorie:</label>
                        <Select  id="qName" value={this.state.value} options = {this.state.categories} onChange={e=>this.handleChange(e)}/>
                    </div>

                </form>


                <div className="row">

                    <div className="col-md-12">
                        Liste des questions minimum (3) :
                        <AddQuestion
                            questions={[this.state.question1,this.state.question2,this.state.question3]}
                            setQuestionName={this.setQuestionName}
                            setq1Value={this.setq1Value}
                            setq2Value={this.setq2Value}
                            setq3Value={this.setq3Value}
                            setq4Value={this.setq4Value}
                            setq1Correction={this.setq1Correction}
                            setq2Correction={this.setq2Correction}
                            setq3Correction={this.setq3Correction}
                            setq4Correction={this.setq4Correction}

                        />
                        {this.renderQuestion()}

                        <input type='submit' className="btn btn-primary" value='Ajoutez une question'   onClick={e=>this.addQuestion(e)}/>
                    </div>

                    <input type='submit' form="quizzform" className="btn btn-primary" value='Ajoutez le quiz'/>

                </div>
            </div>


        )
    }
}

export default AddQuiz;

