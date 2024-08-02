console.log("hello in password checker");
function onclicking(event) {
var arr = ["admin" , "welcome" , "1234"];

function login(arr) {
   
    let inputPassword = document.getElementById('pass').value;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == inputPassword) {
            return true;
        } 
    }    
}


    event.preventDefault();

    let promiseFunction = new Promise((resolve, reject) => {
            let callback = login(arr);
            if (callback == true) {
                resolve(true);      
            } else {
                reject(false);
            }
    })
    
    promiseFunction.then(()=>{
        console.log("Password Accepted");
        alert("Password Accepted");
        setTimeout(() => {
            window.location.reload();
        }, 100);
    })
     .catch(()=>{
        console.log("Invalid Password ");
        alert("Invalid Password");
    
    })

}