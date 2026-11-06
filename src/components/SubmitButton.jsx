// Code SubmitButton Component Here

function SubmitButton (){
    function handleMouseEnter(event) {
        console.log("Mouse Entering...");
    }

    function handleMouseLeave(event) {
        console.log("Mouse Leaving...");
    }

    return(
        <>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Submit</button></>
    );
}

export default SubmitButton;