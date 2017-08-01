import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/mainComponent.jsx';

injectTapEventPlugin();



ReactDOM.render(<App />, document.getElementById('content'));
