import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios to make API requests
import './Item.css';

const Fashion = () => {
  const [items, setItems] = useState([]); // Initialize the state variable 'items' with an empty array

  useEffect(() => {
    // Fetch API data
    const fetchData = async () => {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbyc9fCQxOZmcg10Ety5vwSRISQT1N2Nc5PGOBehzJ--agVHpP55lTAVr0lO5crER9Tp/exec'); // Replace 'API_URL' with the actual URL of your API
        setItems(response.data); // Update the items state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div className="item-list">
      {items.map((item) => ( // Use the 'items' state variable instead of 'sortedItems'
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.name} className="item-image" />
          <h3 className="item-name">{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Fashion;
