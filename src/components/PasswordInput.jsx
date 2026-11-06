// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange(event) {
        console.log("Enetring Password....");
    }

    return(
        <>
        <input type="password" name="password" onChange={handleChange}/>
        </>
    );
}

export default PasswordInput;