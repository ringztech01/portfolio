ar typed =new Typed(".typing",{
    strings:["andi bitrus", "web dev", "hacker"],
    typeSpeed: 100,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
})

function sendEmail(){
        SecureToken: "7269333c-df91-4763-87d1-cc1d7e133457",  
        To : 'ringzsystems@gmail.com',
        From : 'ringzsystems@gmail.com',
        ReplyFrom : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value 
        + "<br>Email: " + document.getElementById("email").value
        + "<br>Subject: " + document.getElementById("subject").value
        + "<br>Message: " + document.getElementById("message").value
    }).then(
      message => alert( " Thankyou! <br>Your message has been sent")
    );
}
