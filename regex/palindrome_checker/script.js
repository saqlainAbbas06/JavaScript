let textInput = document.querySelector("#text-input");
let checkBtn = document.querySelector("#check-btn");
let result = document.querySelector("#result");
let spaceLessStr="";
let checker;
function removeSpace(){
  let i=0;
  while(i!=textInput.value.length){
  spaceLessStr +=(textInput.value[i]!=" "&&/^[A-Za-z0-9]$/.test(textInput.value[i]))? textInput.value[i]: "";
  i++;
  }
}

function checkPalindrome(){
  removeSpace();
  spaceLessStr= spaceLessStr.toLowerCase();
  let i = 0;
    while (i < spaceLessStr.length / 2) {
        if (spaceLessStr[i] != spaceLessStr[spaceLessStr.length - 1 - i]) {
            return false;
        }
        i++;  
    }
    return true; 
}
checkBtn.addEventListener("click", () => {
  
  if(textInput.value==""){
    alert("Please input a value");
  }
  else{
  (checkPalindrome()==true)? result.innerText=`${textInput.value} is a palindrome.`: result.innerText=`${textInput.value} is not a palindrome.`;
  spaceLessStr="";
  textInput.value="";
  }
});

