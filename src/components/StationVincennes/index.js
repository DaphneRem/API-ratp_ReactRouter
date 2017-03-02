import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { Link } from 'react-router';
import Result from '../Result/Result';
import Result2 from '../Result2/Result2';
import '../StationChaveaux/style.css';

export default class StationVincennes extends Component {

    constructor(props) {
            super(props);
            this.state = {
                showComponent : false,
                chateauVincennes : [],
                laDefense : []
        }
            this.miniModal = this.miniModal.bind(this);
            this.renderResult = this.renderResult.bind(this);
            this.renderResult2 = this.renderResult2.bind(this);
    }


    componentDidMount() {
        var url = `https://api-ratp.pierre-grimaud.fr/v2/metros/1/stations/74?destination=5`;
            axios.get(url).then((response) => {
                return this.setState({chateauVincennes : response.data.response.schedules})
            });
        var url2 = `https://api-ratp.pierre-grimaud.fr/v2/metros/1/stations/74?destination=6`;
                axios.get(url2).then((response) => {
                    return this.setState({laDefense : response.data.response.schedules})
                });
        }

        miniModal() {
            this.setState({ showComponent: !this.state.showComponent});
        };
        renderResult() {
        return this.state.chateauVincennes.map((e, i) => {
            return (<Result
                        key={i}
                        message={e.message}
                    />);
            })
        }
        renderResult2() {
        return this.state.laDefense.map((e, i) => {
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
      <div className={classnames('StationVincennes', className)} {...props}>
          <div className="stationPage">
              <div className="contentPage">
                <h1 className="nameStation"> Porte de Vincennes {this.props.params.id}</h1>
                <button className="btn" onClick={this.miniModal}>Prochains trains</button>
            </div>
                <div className="list">
                    <div className="left">
                        <h2>Direction Châteaux de Vincennes</h2>
                        {this.state.showComponent ? result : null }
                    </div>
                    <div className="right">
                        <h2>Direction La Defense</h2>
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
