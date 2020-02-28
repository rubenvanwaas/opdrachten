let bigFive = window.document.querySelectorAll(".big-five-list .big-five-button");



  bigFive.forEach(btn => {
      
    btn.addEventListener('click', event => {
        let animal = document.createElement('li');
        animal.innerHTML = event.target.value;
        let listName = document.querySelector('#spotted-animals-list')
        listName.appendChild(animal);

        console.log(listName)
    } )
  })

  let removeFirstItem = window.document.querySelector("#remove-first-item-button");

    removeFirstItem.addEventListener('click', event => {
        let listName = document.querySelector('#spotted-animals-list li')
        if (listName) {
            listName.parentNode.removeChild(listName);
        }
    })

const removeBtn = document.querySelector('#remove-all-button');

function removeAllItems () {
    const listName = document.querySelector('#spotted-animals-list')
    listName.innerHTML = "";    
}


    removeBtn.addEventListener('click', removeAllItems)

  

/*

  function animalSpotted (event) {
    let animal = document.createElement('li');
    animal.innerHTML = event.target.value;
    let listName = document.querySelector('#spotted-animal-list')
    listName.appendChild(animal);
    console.log(listName)
}
    
  
  ​
  ​
  document.addEventListener("DOMContentLoaded", function() {
      const animalButtons = document.querySelectorAll(".big-five-button");
        animalButtons.forEach(function(animalButton) {
          animalButton.addEventListener("click", animalSpotted);
        });
      });

      */