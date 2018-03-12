import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import './App.scss';

const HiLoadableComponent = Loadable({
  loader: () =>
    import('./components/Hi' /* webpackChunkName: 'component-hi' */),
  loading() {
    return <div>Loading...</div>;
  },
});

ReactDOM.render(<HiLoadableComponent />, document.getElementById('app'));
