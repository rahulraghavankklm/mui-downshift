import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import MuiThemeProvider from 'material-ui-next/styles/MuiThemeProvider';

// addDecorator(storyFn => <MuiThemeProvider>{storyFn()}</MuiThemeProvider>);

function loadStories() {
  require('../stories/basic');
  require('../stories/fetch');
}

configure(loadStories, module);
