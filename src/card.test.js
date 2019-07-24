import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import renderer from 'react-test-renderer';

describe("card component", () => {
    
    // smoke test
    it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

    it("renders the UI as expected", () => {
    const tree = renderer
      .create(<Card title="Title" content="Content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

 