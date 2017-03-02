import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
    import { Link } from 'react-router';
import Result from '../Result/Result';
import Result2 from '../Result2/Result2';
import '../StationChaveaux/style.css';

export default class StationRobespierre extends Component {

    constructor(props) {
            super(props);
            this.state = {
                showComponent : false,
                mairieMontreuil : [],
                pontSevres : []
        }
            this.miniModal = this.miniModal.bind(this);
            this.renderResult = this.renderResult.bind(this);
            this.renderResult2 = this.renderResult2.bind(this);
    }


    componentDidMount() {
        var url = `https://api-ratp.pierre-grimaud.fr/v2/metros/9/stations/351?destination=24`;
            axios.get(url).then((response) => {
                return this.setState({mairieMontreuil : response.data.response.schedules})
            });
        var url2 = `https://api-ratp.pierre-grimaud.fr/v2/metros/9/stations/351?destination=25`;
                axios.get(url2).then((response) => {
                    return this.setState({pontSevres : response.data.response.schedules})
                });
        }

        miniModal() {
            this.setState({ showComponent: !this.state.showComponent});
        };
        renderResult() {
        return this.state.mairieMontreuil.map((e, i) => {
            return (<Result
                        key={i}
                        message={e.message}
                    />);
            })
        }
        renderResult2() {
        return this.state.pontSevres.map((e, i) => {
            return (<Result2
                        key={i}
                        message={e.message}
                    />);
            })
        }

  render() {

        const { className, ...props } = this.props;

        let result = this.renderResult();
        let result2 = this.renderResult2();


    return (
      <div className={classnames('StationRobespierre', className)} {...props}>
          <div className="stationPage">
              <div className="contentPage">
                <h1 className="nameStation"> Robespierre {this.props.params.id}</h1>
                <button className="btn" onClick={this.miniModal}>Prochains trains</button>
              </div>
             <div className="list">
                <div className="left">
                    <h2>Direction Mairie de Montreuil</h2>
                    {this.state.showComponent ? result : null }
                </div>
                <div className="right">
                    <h2>Direction Pont de Sèvres</h2>
                    {this.state.showComponent ? result2 : null }
                </div>
            </div>
            <div className="returnMenu">
                <Link to={'/'} className="returnToMenu">
                    <img className="logo" src={require("../App/metro.png")}/>
                    <p>Menu</p>
                </Link>
            </div>
        </div>
     </div>
    );
  }
}
