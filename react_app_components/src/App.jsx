import Button from "./Button";
import DynamicComp from "./DynamicComp";
import Random from "./ReusableComp";

function App(){
    return <div>
      <h1>
      welcome to react
    </h1>
    <Button></Button>
    <DynamicComp></DynamicComp>
    <Random></Random>
    <Random></Random>
    </div>
}

export default App;