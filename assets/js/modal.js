function closeModal(e){
    if(e.target.id==="modal"){
        document.getElementById("modal_wrapper").style.display="none";
    };
}
function closeModalX(){
    document.getElementById("modal_wrapper").style.display="none";
}
function openModal(){
    document.getElementById("modal_wrapper").style.display="block";
}