const submitBtn = $("#submit-button");
const index = 0;

submitBtn.on("click", () => {
    const name = $("#inputName").val().trim();
    const email = $("#inputEmail").val().trim();
    const message = $("#inputMessage").val().trim();

    // email validation
    // validateEmail (email) => {
    //     const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if(!regex.test(email)) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }

    $("#submission-success").text(`Thank you ${name} for your message! I will get back to your as soon as possible!`);
});