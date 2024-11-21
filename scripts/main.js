let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello,${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const StoredName = localStorage.getItem("name");
    myHeading.textContent = `Hello,${StoredName}`;
}
myButton.onclick = () => {
    setUserName();
};