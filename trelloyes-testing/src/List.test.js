import React from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

// smoke test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //screenshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create( <List cards={[]} name="list"/> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });