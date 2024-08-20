import { useState } from "react";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button
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
      <Button title="Delete Button" bgColor={"red"} />
    </div>
  );
}

export default App;
