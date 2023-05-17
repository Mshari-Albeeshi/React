import './App.css';
import Table from './component/Table';
import List from './component/List';
import { useEffect, useState } from 'react';

function App() {
  const [cat, setCat] = useState("");
  const [catDetails, setCatDetails] = useState([]);

  //make sure useEffect will work every time we clike on type 
  useEffect( ()=> {
    for(let i = 0; i < species.length; i++){
      if(species[i].type === cat){
        setCatDetails(species[i].details);
      }
    }
  }, [] );

  // Use this data for the list and the table
  let species = [
    {
      type: 'Ragdoll',
      details:
        [
          {
            name: 'Lily',
            age: 13,
            color: 'Dark Grey',
            weight: '4kg'
          },
          {
            name: 'Misha',
            age: 4,
            color: 'Brown',
            weight: '3kg'
          },
          {
            name: 'Smokey',
            age: 6,
            color: 'White and Brown',
            weight: '5kg'
          }
        ]
    }
    ,
    {
      type: 'Ragamuffin',
      details:
        [
          {
            name: 'Hershey',
            age: 8,
            color: 'White and Grey',
            weight: '6kg'
          },
          {
            name: 'Geoff',
            age: 0.5,
            color: 'Black',
            weight: '1kg'
          },
          {
            name: 'Lily',
            age: 1,
            color: 'Brown',
            weight: '2kg'
          }
        ]
    },
    {
      type: 'scottish fold',
      details:
        [
          {
            name: 'Fatsu',
            age: 2,
            color: 'Grey',
            weight: '7kg'
          },
          {
            name: 'Tom',
            age: 10,
            color: 'Grey and White',
            weight: '4kg'
          },
          {
            name: 'Jerry',
            age: 10,
            color: 'Brown',
            weight: '2kg'
          }
        ]
    }
  ]


  // Front-end code
  return (
    <div className="App">
       <List species = {species} setCat= {setCat}/>
       <Table catDetails = {catDetails}/>
    </div>
  );
}

export default App;
