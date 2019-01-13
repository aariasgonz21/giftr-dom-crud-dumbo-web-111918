// You can add your event handlers here!
document.addEventListener('DOMContentLoaded', function() {
 giftList = document.getElementsByClassName('gift-list')[0];

// ************ Loads Gift Data *****************

  function loadGiftData() {
    let defaultListItem = document.getElementById('default-list-item');

    for(var i = 0; i < gifts.length; i++){
      let newListItem = document.createElement('li');
      newListItem.className = 'new-list-item'
      newListItem.innerHTML = gifts[i].name;

      const liImage = document.createElement('img');
      liImage.src = gifts[i].image;

      giftList.appendChild(newListItem);
      giftList.appendChild(liImage);
    }
    giftList.childNodes.length > 1 ? defaultListItem.style.display = "none" : ""
  }
  // ************ Searches/Filters Items *****************

  function itemSearch() {
    let searchBar = document.getElementById("filter-input");
    let input = searchBar.value.toUpperCase();

    searchBar.addEventListener("input", function() {
      while (giftList.firstChild) {
        giftList.removeChild(giftList.firstChild);
      }

      for (var i = 0; i < gifts.length; i++) {
        if (gifts[i].name.toUpperCase().indexOf(input) > -1) {
          
        }
      }
    })
  }

  // ************ Running All Functions *****************

  loadGiftData();
  itemSearch();

})
