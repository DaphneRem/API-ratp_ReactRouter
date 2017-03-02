import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';


import './style.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
          <div className="container-error">
              <h1 className="error">
                  Erreur 404 - Page non trouvée.
             </h1>
             <Link to={'/'} className="return">Retourner au menu principale</Link>
        </div>
      </div>
    );
  }
}
