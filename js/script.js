ar typed =new Typed(".typing",{
    strings:["andi bitrus", "web dev", "hacker"],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
})

function sendEmail(){
     Email.send({
        secureToken: "7269333c-df91-4763-87d1-cc1d7e133457",  
        To : 'ringzsystems@gmail.com',
        From : 'ringzsystems@gmail.com',
        ReplyFrom : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body :  document.getElementById("name").value 
        + "Email: " + document.getElementById("email").value
        + "Subject: " + document.getElementById("subject").value
        + "Message: " + document.getElementById("message").value
    }).then(
      message => alert( "Thankyou Your message has been sent")
    );
}
