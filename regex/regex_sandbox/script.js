const regexPattern = document.getElementById('pattern')
const stringToTest = document.getElementById('test-string')
const testButton = document.getElementById('test-btn')
const testResult = document.getElementById('result')


const caseInsensitiveFlag = document.getElementById('i')
const globalFlag = document.getElementById('g')

function getFlags(){
  if(globalFlag.checked && caseInsensitiveFlag.checked){
    return 'ig'
  }else if(globalFlag.checked){
    return 'g'
  }else if(caseInsensitiveFlag.checked){
    return 'i'
  }else{
    return ''
  }
}


testButton.addEventListener('click',()=>{
  const regex = new RegExp(regexPattern.value, getFlags());
  const text = stringToTest.textContent;

  const matches = text.match(regex);

  if (matches) {
    stringToTest.innerHTML = text.replace(
      regex,
      '<span class="highlight">$&</span>'
    );

    testResult.textContent = matches.join(', ');
  } else {
    testResult.textContent = 'no match';
  }})
