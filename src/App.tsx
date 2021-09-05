import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route   
} from "react-router-dom";
import { hot } from 'react-hot-loader';

import CoreService from '~/services/core/CoreService/CoreService'
import Intro from '~/components/pages/intro/intro.index'
import {getComputedStyleHelp, CssVars} from '~/utils/theme-style/theme-style'
import './index.scss';

// @ts-ignore
const SUBDIR =___SUBDIR___;

function App() {

  new CoreService()

 
  return (
 
      <Router basename={`${SUBDIR}`} >
        <Switch>
          <Route path="/" component={Intro} />
        </Switch>
      </Router>

  );
}

export default hot(module)(App);


