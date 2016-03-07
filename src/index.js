import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// Youtube API key
const API_KEY = 'AIzaSyAtjCBe7M4rp5Qct2xMc6Hf-gw9J-NaF-g';

// Create a new component. This component should produce
// some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
