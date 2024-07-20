function DynamicComp(){

    let myName = "Rohan";
    let day = 2;
    let myFun = () => {
        return "Here we are adding dynamic content.";
    }

    return <h2>
         {myFun()}This is the Dynamic Component ! I am Java Developer {myName} , this is {day}nd day of lerning react js.
    </h2>
}

export default DynamicComp;