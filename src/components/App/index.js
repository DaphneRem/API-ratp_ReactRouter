import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import './style.css';
// import {logo} from './metro.png';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
          <header>
              <Link to="/">
                <img className="logo" src={require("./metro.png")}/>
                <p>My stations </p>
             </Link>
         </header>
         <div className="app-content">
             <Link to={'/croix-de-chaveaux'} className="stations">
                <h1 className="station"> Croix de Chaveaux</h1>
                <img src={require("./ligne9.png")}/>
            </Link>
            <Link to={'/robespierre'} className="stations">
                <h1 className="station"> Robespierre</h1>
                <img src={require("./ligne9.png")}/>
            </Link>
            <Link to={'/porte-de-vincennes'} className="stations">
                <h1 className="station"> Porte de Vincennes</h1>
                <img src={require("./ligne1.png")}/>
            </Link>
         </div>
         <footer>
             <p>
                 API-ratp from <a href="https://github.com/pgrimaud/horaires-ratp-api" className="PierreG"> Pierre Grimaud</a> and web-site from Daphné Remali
             </p>
         </footer>
      </div>
    );
  }
}

export default App;
