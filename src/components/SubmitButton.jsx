function SubmitButton() {
    function handleMouseEnter(event) {
        console.log("Mouse Entering");
    }

    function handleMouseLeave(event) {
        console.log("Mouse Exiting");
    }

    return (
        <>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Submit Password
            </button>
        </>
    );
}

export default SubmitButton;