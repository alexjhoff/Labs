
var menuitems = [
			{itemname:"hamburger",price:3.00},
			{itemname:"hotdog",price:2.00},
			{itemname:"fudgecookie",price:3.00},
			{itemname:"frenchfries",price:1.00},
			{itemname:"cola",price:1.50},
            {itemname:"blacktarheroin",price:10.00},
            {itemname:"chocotaco",price:2.00},
            {itemname:"vietnameseprostitute",price:0.50},
            {itemname:"calligraphypen",price:24.99},
            {itemname:"fatboyslimalbumonvinal",price:54.00}
			];
function getItemPrice(item)
{
	for (var i = 0; i < menuitems.length; ++i){
		if (menuitems[i].itemname == item) {// item found
				return menuitems[i].price;
		}		
	}
	return 0;
}
function updateOrder() {
 var orderString="";
 var totes=0;
 var n = document.getElementById("entries").length;
 for(i=0;i<n;++i) {
  if(document.getElementById("entries").options[i].selected) {
	var selectedItem = document.getElementById("entries").options[i].value;
	var price = getItemPrice(selectedItem);
	orderString += selectedItem+" Price: $"+price+"\n";
      totes += price;
      var totalPrice = " Total Price: $"+totes+"\n";
  }
 }
 var orderheading = "Your order is:\n";
 document.getElementById("summary").value=orderheading + orderString + totalPrice +"\n";
 
}
function processOrder()
{
	alert ("Your order will be ready in 5 min");
 
}
function registerEvents()
{
	var optionList = document.getElementById("entries");
	optionList.onchange = updateOrder;
	var orderBtn = document.getElementById("order");
	orderBtn.onclick = processOrder;
}

