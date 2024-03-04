function closeModal(e){
    console.log("E: ",e)
    if(e.target.id==="modal_wrapper"){
        document.getElementById("modal_wrapper").style.display="none";
    };
}
function closeModalX(){
    document.getElementById("modal_wrapper").style.display="none";
}
function openModal(){
    document.getElementById("modal_wrapper").style.display="block";
}