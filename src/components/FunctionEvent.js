function FunctionEvent(params) {

    function handleClick()
    {
        console.log("clicked");
    }

    return (
        <div>
            functionEvent event 
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default FunctionEvent;