import React from 'react';
import './App.css';
import TreeChart from "./components/TreeChart";

const DATA = {
  name: 'Prduction Line 1',
  children: [
    {
      name: 'Batching',
      children: [],
    },
    {
      name: 'Blending',
      children: [
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataTable',
          children: [],
        },
        {
          name: 'DataUtil',
          children: [],
        },
      ],
    },
    {
      name: 'Formax 1',
      children: [
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataTable',
          children: [],
        },
        {
          name: 'DataUtil',
          children: [],
        },
      ],
    },
    {
      name: 'Formax 2',
      children: [
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataField',
          children: [],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [],
        },
        {
          name: 'DataSource',
          children: [],
        },
        {
          name: 'DataField',
          children: [
            {
              name: 'DataField',
              children: [],
            },
            {
              name: 'DataSchema',
              children: [],
            },
            {
              name: 'Dataset',
              children: [],
            },
            {
              name: 'DataSource',
              children: [],
            },
          ],
        },
        {
          name: 'DataSchema',
          children: [],
        },
        {
          name: 'Dataset',
          children: [
            {
              name: 'DataField',
              children: [],
            },
            {
              name: 'DataSchema',
              children: [],
            },
            {
              name: 'Dataset',
              children: [],
            },
            {
              name: 'DataSource',
              children: [],
            },
            {
              name: 'DataField',
              children: [],
            },
            {
              name: 'DataSchema',
              children: [],
            },
            {
              name: 'Dataset',
              children: [],
            },
            {
              name: 'DataSource',
              children: [],
            },
            {
              name: 'DataField',
              children: [],
            },
            {
              name: 'DataSchema',
              children: [],
            },
            {
              name: 'Dataset',
              children: [],
            },
            {
              name: 'DataSource',
              children: [],
            },
            {
              name: 'DataField',
              children: [],
            },
            {
              name: 'DataSchema',
              children: [],
            },
            {
              name: 'Dataset',
              children: [],
            },
            {
              name: 'DataSource',
              children: [],
            },
          ],
        },
        {
          name: 'DataSource',
          children: [],
        },
      ],
    },
    {
      name: 'Formax 3',
      children: [],
    },
    {
      name: 'Formax 4',
      children: [],
    },
    {
      name: 'Frigo 1',
      children: [
        {
          name: 'Overheads',
          children: [
            {
              name: 'Batching Work Station',
              children: [],
            },
            {
              name: 'Batching Work Stand Entrance',
              children: [],
            },
            {
              name: 'Batching Hand Wash',
              children: [],
            },
            {
              name: 'DataTable',
              children: [],
            },
            {
              name: 'Plates / Knives',
              children:[],
            },
            {
              name: 'Combo Bin Hoist 1',
              children: [],
            },
            {
              name: 'Combo Bin Hoist 2',
              children: [],
            },
            {
              name: 'Hooks At Batching',
              children: [],
            },
            {
              name: 'Batching Tools',
              children: [],
            },
            {
              name: 'Bin Hoist Rework',
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Frigo 2',
      children: [],
    },
    {
      name: 'Pack Off',
      children: [],
    },
  ]
}
function App() {
  return (
    <div className="App h-screen w-screen">
      <TreeChart data={DATA} />
    </div>
  );
}

export default App;
