document.addEventListener("DOMContentLoaded",(event)=>{

    const app =firebase.app();
    console.log(app)
})

function googleLogin(){

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result =>{
        const user  =result.user ;
        document.write(`Hello ${user.displayName}`);
        console.log(user)

    })
}


function githubLogin(){
var providerGit = new firebase.auth.GithubAuthProvider();

firebase
  .auth()
  .signInWithPopup(providerGit)
  .then((result) => {
    const userx  =result.userx ;
    document.write(`Hello ${userx.displayName}`);
    console.log(userx)

    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}