import "./App.css";
import DateTime from "./Components'/DateTime";
import Heading from "./Components'/Heading";
import Message from "./Components'/Message";

function App() {
  return (
    <center>
      <div className="heading">
        <Heading/>
      </div>
      <div>
        <Message/>
      </div>
      <div>
        <DateTime/>
      </div>
    </center>
  );
}

export default App;
