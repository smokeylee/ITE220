// display the calendar here
/*var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "";
stringHTML = "<tr><td>1</td><td>2</td></tr>";
hotelTable.innerHTML += stringHTML;
*/

for (var i = 1; i <= 31; i++) {
	document.getElementById("cell" + i).innerHTML = i;
}