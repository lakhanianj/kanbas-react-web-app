import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {

  const sayHello = () => {
    alert("Hello World!");
  };

  return (
    <div>
      <h2>Assignment 4</h2>
      <ReduxExamples/>
      <ClickEvent></ClickEvent>
      <PassingDataOnEvent></PassingDataOnEvent>
      <PassingFunctions theFunction={sayHello}></PassingFunctions>
      <EventObject></EventObject>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>
      <ParentStateComponent></ParentStateComponent>
    </div>
  );
}

export default Assignment4;
