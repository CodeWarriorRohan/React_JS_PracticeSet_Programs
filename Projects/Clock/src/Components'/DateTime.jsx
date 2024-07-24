let DateTime = () => {

    let date = new Date();

    return <h3>This is current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</h3>;
};

export default DateTime;