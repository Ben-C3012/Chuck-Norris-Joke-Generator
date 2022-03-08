// get jokes button Event listener 
document.querySelector('.get-jokes').addEventListener('click',getJokes)


// Function get jokes 
function getJokes(e) {
 
  
  const xhr = new XMLHttpRequest()

  xhr.open('GET',`https://api.chucknorris.io/jokes/random/`, true)

xhr.onload = function() {
  if(this.status === 200) {
    const response = JSON.parse(this.responseText)
    console.log(response);

    let ul = document.querySelector('.jokes')
    let li = document.createElement('li')
    ul.append(li)
    li.innerText = response.value

    
  }
}

xhr.send()


  e.preventDefault()
}