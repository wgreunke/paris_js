import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";

const App = () => {
  const [board1, setBoard1] = useState([
    { id: 1, name: "Lourve" },
    { id: 2, name: "Notre Dame" },
    
  ]);

//Trying to set dummy places
const [paris_places, setParisPlaces]=useState([
  {name: "Lourve lat", lat:12.1, lon:32},
  {name: "Notre Dame lat", lat:12.2,  lon:32.1}
]);

  const [board2, setBoard2] = useState([
    { id: 5, name: "Eifel Tower" },
    { id: 6, name: "Latin Quarter" },
    { id: 7, name: "Charles De Gaule Airport " },
    { id: 8, name: "Arc de Triumph" },
  ]);

  const [dragResult, setDragResult] = useState('');

  const updateDragResult = () => {
    setDragResult(`
      Board 1: ${board1.map(city => city.name).join(', ')}
      Board 2: ${board2.map(city => city.name).join(', ')}
    `);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">A Day in Paris</h1>
      
      <div className="flex space-x-4 mb-4">
        <div style={{ border: '3px solid green' , width:'300px',margin:'10px'  }}>
          <h2 className="text-xl font-semibold mb-2">Plan</h2>
          <ReactSortable
            list={board1}
            setList={setBoard1}
            group="shared"
            onEnd={updateDragResult}
            className="space-y-2"
          >
            {board1.map((city) => (
              <div
                key={city.id}
                style={{ border: '1px solid blue' }}
              >
                {city.name}
              </div>
            ))}
          </ReactSortable>
        </div>
        <p>.</p>
        <p></p>
        <div style={{ border: '1px solid black', width:'300px',margin:'10px' }}>
          <h2 className="text-xl font-semibold mb-2">Maybe</h2>
          <ReactSortable
            list={board2}
            setList={setBoard2}
            group="shared"
            onEnd={updateDragResult}
            className="space-y-2"
          >
            {board2.map((city) => (
              <div
                key={city.id}
                style={{ border: '1px solid red' }} 
              >
                {city.name}
              </div>
            ))}
          </ReactSortable>
        </div>
      </div>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Here is a map of your plan for the day</h2>
        <pre className="p-2 bg-gray-100 rounded">{dragResult}</pre>
      </div>
    </div>
  );
};

export default App;