import React from 'react';
import moment from 'moment';

const App = () => (
  <div>
    我是React项目
    <h1>react，还是vue项目，都无妨，这里不是重点</h1>
    <h1> {moment().format('YYYY-MM-DD hh:mm:ss')}</h1>
  </div>
);

export default App;