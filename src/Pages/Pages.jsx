import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {Route, Switch} from 'react-router-dom';

import {About} from './About';
import {Politburo} from './Politburo';
import {Officers} from './Officers';
import {Constitution} from './Constitution';
import {Events} from './Events';
import {Workshops} from './Workshops';
import {Recruiting} from './Recruiting';
import {GeneralMeetings} from './GeneralMeetings';
import {Industry} from './Industry';
import {Sponsors} from './Sponsors';
import {Join} from './Join';

class Pages extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'page'}>
        <Route path='*' render={() => {window.scrollTo(0, 0); return null;}}/>
        <Switch>
          <Route path='/about/politburo' component={Politburo}/>
          <Route path='/about/officers' component={Officers}/>
          <Route path='/about/constitution' component={Constitution}/>
          <Route path='/events/workshops' component={Workshops}/>
          <Route path='/events/recruiting' component={Recruiting}/>
          <Route path='/events/gms' component={GeneralMeetings}/>
          <Route path='/events' component={Events}/>
          <Route path='/industry/sponsors' component={Sponsors}/>
          <Route path='/industry' component={Industry}/>
          <Route path='/join' component={Join}/>
          <Route path='/' component={About}/>
        </Switch>
      </div>
    );
  }
}

Pages = Guac(Pages);

export default Pages;
export {Pages};
