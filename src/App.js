import React from 'react';
import logo from './logo.svg';
import BFS from './BFS/bfs'

function App() {
  return (
    <div className="App">
      <h1>BREADTH FIRST SEARCH</h1>
      <p><b>How to use: </b> Click different areas of the board to see how BFS algorithm finds the shortest path!</p>
      <p><b>How it works:</b> The shortest path is being calculated live by giving a distance value to every node on the board. The arrow indicate the path that the algorithm is taking from node to node.</p>
      <BFS></BFS>
    </div>
  );
}

export default App;
