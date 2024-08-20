import { useState } from "react";
import "./App.css";
import ThemeText from "./components/ThemeText";

function App() {
  const [num, setNum] = useState(10);

  const heading = "Understanding Components";

  const handleUpdateNum = ()=> setNum(num + 1)
  return (
    <div className="p-10">
      <div className="flex justify-center items-center gap-10">
        <ThemeText font={"bold"} color="text-purple-900" underline>
          {num}
        </ThemeText>

        <button onClick={handleUpdateNum}>Update Num</button>
      </div>
      <ThemeText font={"bold"} color="text-purple-900" underline>
        {heading}
      </ThemeText>
      <ol className="list-disc list-outside">
        <li>
          <ThemeText
            font={"semibold"}
            color="text-purple-800"
            text={"Functions"}
          />
        </li>
        <li>
          <ThemeText
            font={"medium"}
            color="text-purple-700"
            text={"Function name starts with Capital letter"}
          />
        </li>
        <li>
          <ThemeText
            color="text-purple-600"
            text={"Return HTML like Markups"}
          />
        </li>
        <li>
          <ThemeText
            color="text-purple-500"
            text={"Component receive props from there Parent Components"}
          />
        </li>
        <li>
          <ThemeText
            color="text-purple-400"
            text={"Components can be re used multiple times"}
          />
        </li>
      </ol>
    </div>
  );
}

export default App;
