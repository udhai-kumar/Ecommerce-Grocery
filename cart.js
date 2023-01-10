let shoppingCart;
var x = window.localStorage.getItem('arr');
shoppingCart = JSON.parse(x);
shoppingCart = shoppingCart.map(Object.values);



function emptyCart() {
	if (window.localStorage.getItem('arr')) {
		let obj={};
		let arr=[];
		arr.push(obj);

		window.localStorage.setItem("arr",JSON.stringify(arr));
		shoppingCart=[];
		showCartTable();
	}
}



function showCartTable() {
	var cartRowHTML = "";
	var grandTotal = 0;
	var subTotal = 0;
	if (shoppingCart.length != 0) {
	var	quantity = 1;
		shoppingCart.forEach(function (item) {
			one = item[0];
			url = one.toString();
			 var currency = item[2];
           currency= Number(currency.replace(/[$,]+/g,""));
            var result = parseFloat(currency);
			
			cartRowHTML += "<tr>" +
				"<td>" + '<img src="' + url + '" width="80px">' + "</td>" +
				"<td>" + item[1] + "</td>" +
				"<td class='text-right'>$" +result + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>$" + (subTotal=result*quantity) + "</td>" +
				"</tr>";
             
			
			grandTotal += subTotal;
		});
			grandTotal = grandTotal.toFixed(2);
		document.getElementById("cartTableBody").innerHTML = cartRowHTML;
		document.getElementById("totalAmount").innerHTML = grandTotal;
		// arr=[];
		// // Clear JavaScript localStorage by index
		// obj={};
		// arr.push(obj);
		// localStorage.setItem("arr",JSON.stringify(arr));
	}
	else {
		quantity = 0;
		subTotal=0;
		shoppingCart.forEach(function (item) {
			one = item[0];
			url = one.toString();
			cartRowHTML += "<tr>" +
				"<td>" + '<img src="' + url + '" width="50px">' + "</td>" +
				"<td>" + item[1] + "</td>" +
				"<td class='text-right'>$" + item[2] + "</td>" +
				"<td class='text-right'>" + quantity + "</td>" +
				"<td class='text-right'>$" + subTotal.toFixed(2) + "</td>" +
				"</tr>";

			grandTotal += subTotal;
		});

		document.getElementById("cartTableBody").innerHTML = cartRowHTML;
		document.getElementById("totalAmount").innerHTML = grandTotal;

		arr=[];
		// Clear JavaScript localStorage by index
		obj={};
		arr.push(obj);
		localStorage.setItem("arr",JSON.stringify(arr));

	}
} 
 function redirect(){
	document.location.href="index.html";

 }