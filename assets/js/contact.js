


function checkForm(x){
    const message = {
        "e":document.getElementById("email").value,
        "t":document.getElementById("phone").value,
        "q":document.getElementById("query").value,
        "c":document.getElementById("name").value,
    }
    const honey=document.getElementById("honey");
    
    if(!message.e&&!message.t){
        alert("Please enter a valid number or email for us to get back to you with");
        return
    }else if(!message.c){
        alert("What's your name, champ?");
    }else if(!message.q){
        alert("Let me know what your query is so I can answer it!");
    }else if(honey){
        return
    }else{
        if(sendDetails(message)){
            alert("Thanks for getting in contact, we'll be in touch soon");
            /*document.getElementById("form").style.display="none";
            document.getElementById("thanks").style.display="block";*/
        }else{
            alert("There was an error");
        }
    }
}

function sendDetails(m){
    const to = "steve.nbs.barry@gmail.com";
    //const to = "info@precisionprojectseng.com.au",
    message = document.getElementById("message"),
    content = `You've received a message from the website:
    From: ${m.c},
    Tel: ${m.t},
    Email: ${m.e},
    Message: ${m.m}`;
    console.log("Content: ",content);
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