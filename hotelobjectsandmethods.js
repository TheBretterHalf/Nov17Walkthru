var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomrate:325.00,
    roomNumbers:["101", "102", "103", "104", "105", "106", "107"],
    roomNumbersBooked:[],
    roomType: "Queen",
    roomsavailable: function(roomNumbers, roomNumbersBooked){
        return this.roomNumbers.length-this.roomNumbersBooked.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        return this.roomNumber.length + this.roomNumbersBooked.length;
    }
}
