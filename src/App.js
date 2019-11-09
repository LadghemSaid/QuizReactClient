import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";
import AddQuiz from"./AddQuiz.js"

//import {quizzes, users} from './examples';
//import {HTTP_SERVER_PORT_PICTURES} from './constants.js';



class App extends Component {

    render() {
	return (
        <BrowserRouter>
            <div className="container">
				<nav>
					<ul className="menu_deco">
					    <li><Link  to={'/'}>Accueil</Link>  </li>
                        <li><Link  to={'/AddQuiz'}>Ajoutez un quizz</Link>  </li>
                        <li><Link  to={'/about'}>A propos de ce projet</Link>  </li>

					</ul>
				</nav>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/about" component={About} />
                    <Route exact={true} path="/quizz/:id" component={Quizz}/>
                    <Route exact={true} path="/AddQuiz" component={AddQuiz}/>
                    <Route path="*" component={() => <p>Page Not Found</p>} />
                </Switch>
            </div>
        </BrowserRouter>
	);
    }
}

export default App;
