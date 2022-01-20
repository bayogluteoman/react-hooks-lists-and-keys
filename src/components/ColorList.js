import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
    
  const colorElements = colors.map((color) => {
    return <li key={color} style={{ color: color }}>{color} {">>>>"} key : {color}</li>;
  });

  colorElements.map((e)=>{
    console.log(e.key);
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;
