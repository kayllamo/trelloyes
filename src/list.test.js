import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import renderer from 'react-test-renderer';


describe('list component', () => {
    
    // smoke test
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<List header="Test Header" cards={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders the UI as expected", () => {
        const tree = renderer
          .create(<List header="Test Header" cards={[]} />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
})