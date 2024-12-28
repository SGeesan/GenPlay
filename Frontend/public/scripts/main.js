var warnings=['Hey, its late night, SLEEP!!!'];
time = 22;
if(time>23){
    alert(warnings[0]);
}
let mainSearchBar = document.getElementById('mainSearchBar');
let mess = document.getElementById('Mainmessage');
let count = document.getElementById('vidCount');
function mainSearch(){
    mess.innerText = '" ' + mainSearchBar.value + ' " not found';
}
fetch('http://localhost:9090/videoCount')  // URL of your Ballerina/Express server
.then(response => response.text())  // Get the response as text
.then(data => {
      count.innerText = data;
    });