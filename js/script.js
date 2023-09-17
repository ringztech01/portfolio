var typed =new Typed(".typing",{
    strings:["andi bitrus", "web dev", "hacker"],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
})

function sendEmail(){
   
    Email.send({
        SecureToken: "df5811bf-157f-4013-b689-0e9f76d43b36",
        To : 'ringzsystems@gmail.com',
        From : 'ringzsystems@gmail.com',
        ReplyFrom : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Subject: " + document.getElementById("subject").value
        + "<br> Message: " + document.getElementById("message").value

    }).then(
      message => alert("Thankyou," + document.getElementById("name").value + "  your message has been sent")
    );


}
