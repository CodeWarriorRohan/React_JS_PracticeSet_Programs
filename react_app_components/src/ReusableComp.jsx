function Random(){

    let num = Math.random() * 100;

    return <h1>Random number is: {Math.round(num)}</h1>
}

export default Random;