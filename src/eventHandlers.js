// You can add your event handlers here!
document.addEventListener('DOMContentLoaded', function() {
  let giftList = document.getElementsByClassName('gift-list')[0];

  // ************ Renders Gift *****************

  function renderGifts(gifts) {
    for (var i = 0; i < gifts.length; i++) {
      let newListItem = document.createElement('li');
      newListItem.className = 'new-list-item'
      newListItem.innerHTML = gifts[i].name;

      const liImage = document.createElement('img');
      liImage.src = gifts[i].image;

      let deleteButton = document.createElement("BUTTON");
      deleteButton.setAttribute('id', 'delete')
      deleteButton.setAttribute('class', "ui button");
      deleteButton.innerHTML = "Delete";
      //deleteButton.dataset.id = gifts[i].id

      newListItem.appendChild(liImage);
      newListItem.appendChild(deleteButton);
      giftList.appendChild(newListItem);
    }
  }
// ************ Loads Gift Data *****************

    let defaultListItem = document.getElementById('default-list-item');
    if(gifts.length > 0){
        renderGifts(gifts);
    }

    giftList.childNodes.length > 1 ? defaultListItem.style.display = "none" : "block"

  // ************ Searches/Filters Items *****************

    let searchBar = document.getElementById("filter-input");

    searchBar.addEventListener("input", function() {
      let input = searchBar.value.toUpperCase();
      while (giftList.firstChild) {
        giftList.removeChild(giftList.firstChild);
      }

      let filteredArray = gifts.filter(gift => {
        return gift.name.toUpperCase().includes(input)
      })
      renderGifts(filteredArray);
  })

  //****************** Delete a Gift ***********************
  let deleteBtn = document.getElementById("delete");

  giftList.addEventListener("click", function() {
    if(event.target.innerHTML === "Delete"){
      event.target.parentNode.remove();
    }
  })
})
