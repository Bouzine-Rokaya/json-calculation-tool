fetch("number.json")
.then((response)=>response.json())
.then((data)=>{
  const numberSelect = document.getElementById("numberSelect")
  data.numbers.forEach(element => {
    const option = document.createElement("option")
    option.value = element
    option.textContent = element
    numberSelect.appendChild(option)
  });
})

.catch((error)=>console.log('error loading json',error))

document.getElementById("calculBtn").addEventListener("click", ()=>{
  const select = parseFloat(document.getElementById("numberSelect").value)
  const user = parseFloat(document.getElementById("userInput").value)
  const operator = document.querySelector('input[name="operator"]:checked').value
  if(isNaN(select)){
    alert("please select a valid number")
    return;
  }
  if(isNaN(user)){
    alert("please enter a valid number")
    return;
  }

  let result;
  switch (operator){
    case "add":
      result = select + user
      break;
      case "sub":
        result = select - user
        break;
        case "mult":
          result = select * user
          break;
          case "divide":
            if(user === 0){
              alert('Cannot divide by zero')
              return
            }
            result = select / user
            break;
            default:
      result = 0;
  }
  document.getElementById("result").textContent = result
})