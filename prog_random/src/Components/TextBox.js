import React, { useState } from 'react';
function TextBoxComponent() {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        <input
          style={{height:"100px",padding:"20px",marginBottom:"10px",width:"500px"}}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          disabled placeholder="Question Display"
        />
      </div>
    );
  }
  
  export default TextBoxComponent;