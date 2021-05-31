import "./App.css";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

export default function App() {
  // const arr = ["orange", "red", "green", "grey", "yellow","purple"];
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState();
  const [color, setColor] = useState(0);
  const [newColor,newColors] = useState();
  const [colors, addColors] = useState(["orange", "red", "green", "grey", "yellow","purple"])
 return (
    <div className="App">
      <h1> Hi Guys </h1>{" "}
      <input
        type="text"
        placeholder="Enter the name"
        style={{
          backgroundColor: name,
        }}
        onChange={(event) => setName(event.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Enter the rollno"
        onChange={(event) => setRollno(event.target.value)}
      />
      {name ? (<p> Hi, {name} {rollno}!!Welcome.Bla Bla Bla {name} {rollno}have a nice day. </p>) : ("")}
      <button onClick={() => { setColor(/*color===array.slice(array.length-1,array.length)?'purple':array.slice(i-1,i)*/(color+ 1)% colors.length); }}> Change</button>
      <div
        class="color-box"
        style={{
          backgroundColor: colors[color],
          height: "25px",
          width: "100px",
        }}
      ></div>
      <div>
        <p> Add the color to the  bottom of the list </p>
      <input type="text" onChange={(event => newColors(event.target.value))} />  <button onClick = {() => addColors([...colors,newColor])}> Add color</button>
      {colors.map((cl, idx) => (
       <div className="color-box">
       <div
         className="color"
         data-type = {idx}
         style={{
           "background-color": cl,
           height: "25px",
           width: "100px",
           marginTop: "5px"
         }}
       ></div>
         <button className="delete" data-type = {idx} onClick = {()=>  addColors([...colors.slice(0, idx), ...colors.slice(idx + 1)])
/*addColors(colors.filter((e,i) => idx !==i))*/ }> &times; </button>
     </div>
      ))}
      </div>
    </div>
  );
}
