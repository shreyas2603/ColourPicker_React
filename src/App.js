import './App.css';
import Colors from './components/Colors';
import { useState } from 'react';

function App() {
 
  const [isColorListVisible, setColorListVisibility] = useState(false);
  const [selectedColor, setSelectedColor] = useState('lightcoral');

  const toggleColorList = () => {
    setColorListVisibility(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisibility(false);
  };

  const colors = ['red', 'blue', 'green', 'yellow', 'purple','black','white','pink','orange','lightblue'];
  
  return (
    <div>
        <Colors 
          toggleColorList={toggleColorList}
          handleColorClick={handleColorClick}
          isColorListVisible={isColorListVisible}
          setColorListVisibility={setColorListVisibility}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          colors={colors}
        />
    </div>
  );
}

export default App;
