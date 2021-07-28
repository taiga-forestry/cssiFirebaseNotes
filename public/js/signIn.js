console.log("works!")

const signInGoogle = () => {
    console.log("TRIED TO SIGN IN!")
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(user, token)
            window.location = "writeNote.html"
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
                console.log(error.message)
            // ...
    });
}

console.log("works!")

const openModal = () => {
        // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
}

const signIn = () => {
    var attemptSuccessful = false;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    const loginRef = firebase.database().ref();
    loginRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);

        const logins = data.login;
        
        for (login in logins) {
        const loginData = logins[login];
        
        if (loginData.username == username && loginData.password == password) {
            attemptSuccessful = true;
            window.location = "writeNote.html"
        }

    }

    if (attemptSuccessful == false)
        alert("You have entered an invalid username and password! Please try again!");
    });

    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
}

