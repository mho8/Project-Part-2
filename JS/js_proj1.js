document.getElementById("homeButton").onclick = function () {
  location.href = "root_proj1.html";
};
	
document.getElementById("productsButton").onclick = function () {
  location.href = "products_proj1.html";
};
	
document.getElementById("cartButton").onclick = function ()
{
  location.href = "cart_proj1.html";
};
	
document.getElementById("addButton1").onclick = function ()
{
  document.getElementById("added1").innerHTML = 'Item has been added to your cart.';
  document.getElementById("addButton1").innerHTML = 'REMOVE';
};