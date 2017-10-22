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
  var value;
  if (productPrice[0] == 0){
    value = "0.00";
  }else{
    value = productPrice[0];
  }
  index.innerHTML = value;
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
function deleteItem(){
  this.parentNode.parentNode.parentNode.remove();
}

function createNewItem(divCopied) {
  divCopied.querySelector(".article").innerHTML=document.querySelector(".newItem").value;
  divCopied.querySelector(".price-unit").innerHTML=document.querySelector(".priceNewItem").value;
  divCopied.querySelector(".btn-delete").onclick= function(){
    this.parentNode.parentNode.parentNode.remove();
  };
  console.log(divCopied);
  document.querySelector(".content").appendChild(divCopied);
}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var setCopy = document.querySelector(".info").cloneNode(true);
  calculatePriceButton.onclick = getTotalPrice;
  // Anonymous function for not auto execute
  createItemButton.onclick = function(){
    setCopy = document.querySelector(".info").cloneNode(true);
    createNewItem(setCopy);
  };
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
