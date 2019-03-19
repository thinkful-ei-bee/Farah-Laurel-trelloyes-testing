import React from 'react';
import Card from './Card';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

// smoke test

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

// snapshot test
it ('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card name="Card" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
