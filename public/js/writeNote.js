let googleUser;

window.onload = (event) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("logged in as", user.displayName)
            googleUser = user;
        }
            
        else {
            window.location = "index.html"
        }
        
        document.querySelector("#welcome").innerText = "Welcome, " + user.displayName + "!";
    });
}

function handleNoteSubmit() {

    firebase.database().ref(`users/${googleUser.uid}`).push({
        title: noteTitle.value,
        label: noteLabel.value,
        name: googleUser.displayName,
        message: noteText.value,
        time: new Date().toLocaleString()
    });

    document.querySelector("#noteTitle").value = "";
    document.querySelector("#noteLabel").value = "";
    document.querySelector("#noteText").value = "";

}   