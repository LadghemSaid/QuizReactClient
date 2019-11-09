import React, {Component} from 'react';

import {HTTP_SERVER_PORT_PICTURES, HTTP_SERVER_PORT} from './constants.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import {quizzes, users} from './examples';

class Thumbnail extends Component {

    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">

                <div className="box-shadow card h-100">
                    <Link to={'./quizz/'+this.props.quizz._uid}><img className="card-img-top" src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon} alt="logo du site" /></Link>

                    <div className="card-body">
                        <h4 className="card-title">
                            <Link to={'./quizz/'+this.props.quizz._uid}>{this.props.quizz.name}</Link>
                        </h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                            aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt,
                            dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                    </div>
                </div>
            </div>

        );
    }
}


class Home extends Component {
        constructor(props)  {
            super(props);
            this.state = {quizzes : []};
            this.loadData();

        }


    async loadData() {
        console.log(1);
        console.log(HTTP_SERVER_PORT);
        const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizz')).data;  // We need to wait for the response.
        console.log(2);
        console.log(quizzes);
        this.setState({quizzes: quizzes});
    }



    render() {
        return (
            <div  className="row">
                {this.state.quizzes.map((q,i) => <Thumbnail quizz={q} key={i}/>)}
             </div>

        );
    }
}

export default Home;
