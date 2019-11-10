import React from 'react';
import Select from 'react-select';
import AddQuestion from './addQuestion.js';


class AddQuiz extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            quizzName: "undefined",
            categorieSelectedValue: "undefined",  //categorie selectionné
            categories: [
                {label : 'Culture',value : 'culture'},
                {label : 'Politique', value : 'politique'},
                {label : 'Histoire',value : 'histoire'},
                {label : 'Enigme',value : 'enigme'}],
            nbrQuestion: 2,                     //Compteur qui permet d'ajouter des questions
            question0: {
                    name:"undefined",
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
                    name:"undefined",
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
                    name:"undefined",
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
        this.setQuestionName = this.setQuestionName.bind(this);
        this.setq1Value = this.setq1Value.bind(this);
        this.setq2Value = this.setq2Value.bind(this);
        this.setq3Value = this.setq3Value.bind(this);
        this.setq4Value = this.setq4Value.bind(this);

        this.setq1Correction = this.setq1Correction.bind(this);
        this.setq2Correction = this.setq2Correction.bind(this);
        this.setq3Correction = this.setq3Correction.bind(this);
        this.setq4Correction = this.setq4Correction.bind(this);
    }

    //Fonction appelé a la soumission du formulaire verifie les champs
    submitForm(e){
        e.preventDefault();
        let errors = 0;

        if(this.state.quizzName === "undefined"){
            //console.log("QuizzName n'est pas remplie");
            e.target.querySelector('input.addQuiz__input__quizzName').classList.add('is-invalid');
            errors++;
        }

        if(this.state.categorieSelectedValue ==="undefined"){
            e.target.querySelector('div.quizzSelectCategorie').style.border= " 1px solid red";
            errors++;
        }


        //Gestions des erreurs pour les questions !
        let questions = [];
        for (let [key] of Object.entries(this.state)) {
            if(key.includes('question') ){
                //console.log(`${key}`);
                questions.push(this.state[key]);
            }
        }

        questions.forEach((question,i)=>{

            if(question.name === "undefined"){
                //console.log("name de la question n'est pas remplie");
                //console.log(e.target.querySelector('input.question-'+i).classList.add('is-invalid'));
                e.target.querySelector('input.question-'+i).classList.add('is-invalid');
                errors++;
            }

            if(question.answerCorrect1 === false &&
                question.answerCorrect2 === false &&
                question.answerCorrect3 === false &&
                question.answerCorrect4 === false  ){

            //console.log(question,i);
                errors++;
                e.target.querySelectorAll('input.answer-'+i).forEach(x=>{
                    //x.classList.add('is-invalid')
                    //x = input checkbox
                    //x.parentElement = div.input-group-text
                    x.parentElement.style.border =  "2px solid red";

                });
            //console.log(e.target.querySelectorAll('input.answer-'+i));

            }else{
                e.target.querySelectorAll('input.answer-'+i).forEach(x=>{
                    //x.classList.add('is-invalid')
                    //x = input checkbox
                    //x.parentElement = div.input-group-text
                    x.parentElement.style.border =  "2px solid green";

                });
            }

           // console.log( question.answerText1 === "undefined");

            if(question.answerText1 === "undefined"){
                //console.log("answerText1 n'est pas remplie");
                e.target.querySelectorAll('input.answerText-'+i)[0].classList.add('is-invalid');
                errors++;
            }else{
                e.target.querySelectorAll('input.answerText-'+i)[0].classList.add('is-valid');

            }
            if(question.answerText2 === "undefined"){
                //console.log("answerText2 n'est pas remplie");
                e.target.querySelectorAll('input.answerText-'+i)[1].classList.add('is-invalid');
                errors++;

            }else{
                e.target.querySelectorAll('input.answerText-'+i)[1].classList.add('is-valid');

            }
            if(question.answerText3 === "undefined"){
                //console.log("answerText3 n'est pas remplie");
                e.target.querySelectorAll('input.answerText-'+i)[2].classList.add('is-invalid');
                errors++;
            }else{
                e.target.querySelectorAll('input.answerText-'+i)[2].classList.add('is-valid');

            }
            if(question.answerText4 === "undefined"){
                //console.log("answerText4 n'est pas remplie");
                e.target.querySelectorAll('input.answerText-'+i)[3].classList.add('is-invalid');
                errors++;
            }else{
                e.target.querySelectorAll('input.answerText-'+i)[3].classList.add('is-valid');

            }
            if(question.answerText1 !== "undefined" &&
                question.answerText2 !== "undefined" &&
                question.answerText3 !== "undefined" &&
                question.answerText4 !== "undefined"
            ){
                //console.log("Tout est bon");
                e.target.querySelectorAll('input.answerText-'+i)[0].classList.add('is-valid');
                e.target.querySelectorAll('input.answerText-'+i)[1].classList.add('is-valid');
                e.target.querySelectorAll('input.answerText-'+i)[2].classList.add('is-valid');
                e.target.querySelectorAll('input.answerText-'+i)[3].classList.add('is-valid');
            }
        })
        if(errors === 0){
            console.log("envoie du formulaire")
            this.sendQuizz();
        }else{
            console.log("Vous avez des erreurs dans le formulaire")

        }
    }



    sendQuizz()
    {
        // let path = `http://localhost:3000`;
        // history.push(path);
        //console.log(e.target.elements.select);
        console.log(this.state.questions);
        console.log("Selected value is: ");
        console.log("quiz name is: "+this.state.name);
    }


    //Setter du champ quizzName
    setQuizzName(e)
    {
        this.setState({quizzName: e.target.value},function(){
            console.log(this.state.quizzName);

        });

        if(document.querySelector('input.addQuiz__input__quizzName').classList.contains('is-invalid')){
            //console.log('ce champ est invalide');
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }
        if(e.target.value){
            // console.log("pas vide");
            e.target.classList.add('is-valid');
        }else{
            // console.log("vide");
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
        }
    }

    //Setter du champ categorieSelectedValue
    setQuizzCategorie(e)
    {
        this.setState({categorieSelectedValue: e.value},function(){
            console.log(this.state.categorieSelectedValue);

        });
        document.querySelector('div.quizzSelectCategorie').style.border= " 1px solid green";


    }

    //Setter du champ name de la question
    setQuestionName(e)
    {

        let id = e.target.dataset.id;
        let val = e.target.value;
        let q1 = "question"+id;
        this.setState(()  => ({
            [q1] : {
                ...this.state["question"+id],
                name: val

            }
        }),function(){
            console.log(this.state["question"+id].name);
        })

        if(document.querySelector('input.question-'+id).classList.contains('is-invalid')){
            //console.log('ce champ est invalide');
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }
        if(e.target.value){
            // console.log("pas vide");
            e.target.classList.add('is-valid');
        }else{
            // console.log("vide");
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
        }
    }

    //Setter du champ answerText1 de la question
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
            console.log(this.state["question"+id].answerText1);

        })


        if(document.querySelectorAll('input.answerText-'+id)[0].classList.contains('is-invalid')){
            //console.log('ce champ est invalide');
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }
        //console.log(this.state[q1].answerText1);

        if(e.target.value){
           // console.log("pas vide");
            e.target.classList.add('is-valid');
        }else{
           // console.log("vide");
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
        }
    }

    //Setter du champ answerText2 de la question
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
            console.log(this.state["question"+id].answerText2);

        })

        if(document.querySelectorAll('input.answerText-'+id)[1].classList.contains('is-invalid')){
            //console.log('ce champ est invalide');
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }

        if(e.target.value){
            // console.log("pas vide");
            e.target.classList.add('is-valid');
        }else{
            // console.log("vide");
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
        }
    }

    //Setter du champ answerText3 de la question
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
            console.log(this.state["question"+id].answerText3);

        })
        if(document.querySelectorAll('input.answerText-'+id)[2].classList.contains('is-invalid')){
            //console.log('ce champ est invalide');
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }
        if(e.target.value){
            // console.log("pas vide");
            e.target.classList.add('is-valid');
        }else{
            // console.log("vide");
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
        }
    }

    //Setter du champ answerText4 de la question
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
            console.log(this.state["question"+id].answerText4);

        })
        if(document.querySelectorAll('input.answerText-'+id)[3].classList.contains('is-invalid')){
            //console.log('ce champ est invalide');
            e.target.classList.add('is-valid')
            e.target.classList.remove('is-invalid')
        }
        if(e.target.value){
            // console.log("pas vide");
            e.target.classList.add('is-valid');
        }else{
            // console.log("vide");
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
        }
    }

    //Setter du champ answerCorrect1 de la question
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


            console.log(this.state["question"+id]);

        })

        document.querySelectorAll('input.answer-'+id).forEach(x=>{
            //x.classList.add('is-invalid')
            //x = input checkbox
            //x.parentElement = div.input-group-text
            //console.log( document.querySelectorAll('input.answer-'+id))
            x.parentElement.style.border =  "2px solid green";

        });


    }

    //Setter du champ answerCorrect2 de la question
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
            console.log(this.state["question"+id]);

        })
        document.querySelectorAll('input.answer-'+id).forEach(x=>{
            //x.classList.add('is-invalid')
            //x = input checkbox
            //x.parentElement = div.input-group-text
            // console.log( document.querySelectorAll('input.answer-'+id))
            x.parentElement.style.border =  "2px solid green";

        });


    }
    //Setter du champ answerCorrect3 de la question
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
            console.log(this.state["question"+id]);

        })
        document.querySelectorAll('input.answer-'+id).forEach(x=>{
            //x.classList.add('is-invalid')
            //x = input checkbox
            //x.parentElement = div.input-group-text
            //console.log( document.querySelectorAll('input.answer-'+id))
            x.parentElement.style.border =  "2px solid green";

        });


    }

    //Setter du champ answerCorrect4 de la question
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
            console.log(this.state["question"+id]);

        })
        document.querySelectorAll('input.answer-'+id).forEach(x=>{
            //x.classList.add('is-invalid')
            //x = input checkbox
            //x.parentElement = div.input-group-text
            //console.log( document.querySelectorAll('input.answer-'+id))
            x.parentElement.style.border =  "2px solid green";

        });


    }

    //Fonction appelé au clic sur le boutton "ajouté une question" qui permet d'ajouter un objet au state de type question
    addQuestion(e)
    {
        e.preventDefault();
        this.setState(  {
            nbrQuestion: this.state.nbrQuestion + 1
        },function(){
            //console.log(this.state.nbrQuestion);
            let qid = "question"+ this.state.nbrQuestion;
            this.setState({
                [qid]: {
                    name:'undefined',
                    answerCorrect1: false,
                    answerCorrect2: false,
                    answerCorrect3: false,
                    answerCorrect4: false,
                    answerText1:'undefined',
                    answerText2:'undefined',
                    answerText3:'undefined',
                    answerText4:'undefined',
                }},function(){
                //console.log(this.state);

            });

    });
        this.renderQuestion();

    }

    //parcours le state et crée un component <Addquestion /> pour chaque elem qui commence par "question"
    renderQuestion(){
        let questions = []
        for (let [key] of Object.entries(this.state)) {
            if(key.includes('question') ){
            //console.log(`${key}`);
              questions.push(this.state[key]);
            }
        }
        return(
            <AddQuestion
                questions={questions}
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

                <form id="quizzform" className="addQuiz__form__haut" onSubmit= {e=>{this.submitForm(e)}}>

                    <div className="form-group">
                        <label className="addQuiz__label__quizzName" htmlFor="qName">Nom du quiz:</label>
                        <input className="addQuiz__input__quizzName form-control" type='text' name='qName' id="qName" onChange={e=>this.setQuizzName(e)}/>
                    </div>

                    <div className="form-group">
                        <label className="addQuiz__title__categorie" htmlFor="qName">Catégorie:</label>
                        <Select  className={"quizzSelectCategorie"} id="qName" value={this.state.value} options = {this.state.categories} onChange={e=>this.setQuizzCategorie(e)}/>
                    </div>




                    <div className="row">

                        <div className="col-md-12">
                            Liste des questions minimum (3) :

                            {this.renderQuestion()}

                            <input type='submit' className="btn btn-primary" value='Ajoutez une question'   onClick={e=>this.addQuestion(e)}/>
                        </div>

                        <input type='submit' form="quizzform" className="btn btn-primary" value='Ajoutez le quiz'/>

                    </div>

                </form>

            </div>


        )
    }
}

export default AddQuiz;

