import React, { useEffect, useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';

export default () => {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = '井戸端会議ちゃっと';
  });

  if (config.signInEnabled && name === '') {
    return <SignIn setName={ setName } />;
  } else {
    return <Main name={name} />;
  }
};
