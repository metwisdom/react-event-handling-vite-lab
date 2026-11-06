function PasswordInput() {
    function handleChange(event) {
        console.log("Entering password...");
    }

    return (
        <>
            <input type="password" name="password" onChange={handleChange} />
        </>
    );
}

export default PasswordInput;