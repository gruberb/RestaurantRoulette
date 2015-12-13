import React from 'react';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';
import SaveButton from './save-button';
import { Link } from 'react-router';

require('../../../stylesheets/components/navbar.scss');

class Navbar extends React.Component{
  constructor( props) {
    super( props );
    this._saveWorkspace = this._saveWorkspace.bind( this );
  }

  _saveWorkspace() {
    console.log('save workspace');
    let workspace_id = this.props.workspace_id;
    if(workspace_id) {
      console.log('id provieded, therfore update worksapce');
      AppActions.updateWorkspace(workspace_id, AppStore.getRestaurants());
    } else {
      console.log('no workspace id, therefore create workspace');
      AppActions.createWorkspace(AppStore.getRestaurants());
    }
  }

  render() {
    return (
      <ul className="navigation">
        <Link to="/">CompanyLunch</Link>
        <li><SaveButton saveWorkspace={this._saveWorkspace} /></li>
        <Link to="run">Run</Link>
        <Link to="impressum" className="infoNav">Imprint</Link>
      </ul>
    );
  }
};

export default Navbar;