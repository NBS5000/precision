
const email = document.getElementById("email"),
tel=document.getElementById("phone"),
query=document.getElementById("query"),
contact=document.getElementById("name"),
honey=document.getElementById("honey");

function checkForm(x){

    console.log("X: ",x);

    if(!email||!tel){
        alert("Please enter a valid number or email for us to get back to you with");
        return
    }else if(!contact){
        alert("What's your name, champ?");
    }else if(!query){
        alert("Let me know what your query is so I can answer it!");
    }else if(honey){
        return
    }else{
        if(sendDetails()){
            alert("Thanks for getting in contact, we'll be in touch soon");
            document.getElementById("form").style.display="none";
            document.getElementById("thanks").style.display="block";
        }else{
            alert("There was an error");
        }
    }
}

function sendDetails(){
    const to = "web@email.com.au",
    message = document.getElementById("message"),
    content = `You've received a message from the website:
    From: ${contact},
    Tel: ${tel},
    Email: ${email},
    Message: ${message}`;

    try{
        sendEmail(to,content)
        return true;
    }catch{
        return false;
    }

}

function sendEmail(to,content){
    return true;
}