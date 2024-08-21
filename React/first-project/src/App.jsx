import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(10);
  const [color, setColor] = useState("purple");
  const [username, setUserName] = useState("Bi");
  const [students, setStudents] = useState([{
    
  }]);

  const addStudent = () => {
    if(!username) return alert('Please add student Name')
    const arr = [...students, username];
    console.log(arr);
    setStudents(arr);
    setUserName("");
  };
  // let counterVar = 10;

  // const incrementCounter = () => {
  //   setCounter(counter + 1);
  //   counterVar++;
  // };
  // console.log("username=>", username);

  return (
    <div>
      <input
        placeholder="User name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>
      {students.map((data, ind) => (
        <h3  key={ind}>{data}</h3>
      ))}
      {/*       
      <Button title={'Red'} onPress={()=> setColor('red')} />
      <Button title={'Orange'}  onPress={()=> setColor('orange')}/> */}
      {/* <div
        style={{
          height: 200,
          width: '100%',
          backgroundColor: color,
        }}
      ></div> */}

      {/* <Button
        onPress={() => alert("Hello to React")}
        title="Hello Button"
        bgColor={"white"}
      />
      <Button
        onPress={function () {
          alert("Like this");
        }}
        title="Like Button"
        bgColor={"skyblue"}
      />
      <Button
        onPress={() => console.log("Share")}
        title="Share Button"
        bgColor={"purple"}
      />
      <Button title="Delete Button" bgColor={"red"} /> */}
    </div>
  );
}

export default App;
