const Colors = ({handleColorClick,toggleColorList,isColorListVisible,colors,selectedColor}) => {

    return (
      <div className="App">
        <div className='container'>
          <h1>Color Picker</h1>
          <div className="secondary" style={{ backgroundColor: selectedColor }}>
            <div className="color-box-container">
              {isColorListVisible &&
                colors.map((color, index) => (
                  <div
                    key={index}
                    className="color-box"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
            </div>
            <button onClick={toggleColorList} style={{ backgroundColor: 'green' }}>Pick a color</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Colors;
  