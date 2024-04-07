let homeBtn = document.getElementsByTagName("a")[0];
homeBtn.addEventListener("click", handleEvent);
let count = 0;
function handleEvent(event){
    event.preventDefault();
    if (count === 0) {
        document.getElementsByTagName("p")[1].innerText = "You're already on the home page silly";
        count++;
    } else if(count === 1){
        document.getElementsByTagName("p")[1].innerText = "Seriously click on an other link";
        count++;
    } else{
        document.getElementsByTagName("p")[1].innerText = "Click on either the projects or contact page";
    }
}