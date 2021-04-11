//loop to apply event to all the buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    //passing the function as input no ()
}

function handleClick(){
    alert("I got clicked!");
}