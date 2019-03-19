import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div'); //must be written with every smoke test
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  //screenshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create( <App name="app" /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });