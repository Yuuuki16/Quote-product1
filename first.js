

const input = document.getElementById('itemInput');
const nameInput = document.getElementById('nameInput');
const button = document.getElementById('addButton');
const ullist = document.getElementById('itemList');
const main = document.getElementById('today');
const pickUp = document.getElementById('side');
const famousWordsArray = document.getElementsByClassName('famousWord');
const nameTop = document.getElementById('detail')
const arrayLength = famousWordsArray.length;
const randomIndex = Math.floor(Math.random() * arrayLength);
const nameArray = document.getElementsByClassName('createrName');
const nameArrayLength = nameArray.length;
const randomNameNum = Math.floor(Math.random()* nameArrayLength);



let word = ""
let word2 = ""



if (input.value ===''){
  button.disabled = true
}

input.addEventListener('input',(e)=>{
  console.dir(e.target.value)
  console.log(e.target.value === "")
  word = e.target.value
  if (e.target.value === ""){
    button.disabled = true
    console.log("押下できません")
  }else{
    button.disabled = false
    console.log("押下できます")
  }
});

nameInput.addEventListener('input',(e)=>{
  word2 = e.target.value
});

input.addEventListener('input',(e)=>{
  word = e.target.value
  if (input.value ===''){
    button.disabled = true
  }else{
    button.disabled = false
    console.log("押下できます")
  }
});


button.addEventListener('click',()=>{
  console.log("saaaa")
  const text = document.createElement('p')
  const text2= document.createElement('p')
  const listItem = document.createElement('li')
  const deleteButton = document.createElement('button')
  const transferButton = document.createElement('button')
  const pickUpList = document.getElementById("pickUpList")
  text.className = 'famousWord' 
  const randomIndex = Math.floor(Math.random() * arrayLength)
  const randomIndex2 = Math.floor(Math.random()* nameArrayLength)
  text2.className = 'createrName'
  ullist.appendChild(listItem)
  listItem.appendChild(text)
  listItem.appendChild(text2)
  listItem.appendChild(deleteButton)
  listItem.appendChild(transferButton)
  console.log(listItem)
  text.textContent = word
  text2.textContent = word2
  
  const famousWordsArray = document.getElementsByClassName('famousWord')
  console.log(famousWordsArray)
  const nameArray = document.getElementsByClassName('createrName')
  
  const randomFamousWord = famousWordsArray[randomIndex].textContent;
  const randomName = nameArray[randomNameNum].textContent
  
  main.textContent = randomFamousWord 
  nameTop.textContent = randomName
  button.disabled= true
  deleteButton.textContent = '削除' 
  transferButton.textContent = '移動'
  deleteButton.addEventListener('click',()=>{
    ullist.removeChild(listItem)
  })
  transferButton.addEventListener('click',()=>{
    ullist.removeChild(listItem)
    pickUp.appendChild(listItem)
    deleteButton.addEventListener("click",()=>{
    pickUpList.removeChild(listItem);
    })
  })
  input.value = ''
  word = ''
  nameInput.value = ''
});

input.addEventListener('keypress',(e)=>{
  if(e.key === 'Enter'){
  button.click();
  } 
});

