var hotel = {

name: 'Smokie Furrari',
rooms: 40,
booked: 25,
checkAvailability : function() {
return this.rooms - this.booked;
}
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();
  


var hotel = new Object();

hotel.name = 'Smokie Furrari'
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability = function(){
   return this.rooms - this.booked;
};


function Hotel(name, rooms, booked){

this.name = name;
this.rooms = rooms;
this.booked = booked;

this.checkAvailability = function(){
  return this.rooms - this.booked;
};
}


var SmokieHotel = new Hotel ('Smokie Furrari', 40, 25);
var parkHotel = new Hotel ('Park', 120, 77);