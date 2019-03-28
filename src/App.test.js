import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';
import CardResearch from './Components/Card/CardResearch';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
const tree = renderer
      .create(<CardResearch title="Card 1"/>)
      .toJSON();
      expect(tree).toMatchSnapshot;
});
