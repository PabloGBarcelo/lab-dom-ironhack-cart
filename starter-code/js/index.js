function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var totalPrices = [];
  var index= [];
  var total= 0;
  for (x = 0; x < itemNode[0].length; x++){
    totalPrices.push([itemNode[0][x].innerHTML * itemNode[1][x].value,itemNode[2][x]]);
  }
    totalPrices.map(function(aTotalPrice,index){
      updatePriceByProduct(aTotalPrice,itemNode[2][index]);
      total += aTotalPrice[0];
    });

  updatePriceTotal(total);
}

function updatePriceByProduct(productPrice, index){
  index.innerHTML = productPrice[0];
}

function getTotalPrice() {
  var listOfElements = [];
  listOfElements.push(document.getElementsByClassName('price-unit'));
  listOfElements.push(document.getElementsByClassName('qty'));
  listOfElements.push(document.getElementsByClassName('total-price'));
  getPriceByProduct(listOfElements);
}

function updatePriceTotal(totalPrice){
  document.getElementById('spanFinalPrice').innerHTML = totalPrice;// = totalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
