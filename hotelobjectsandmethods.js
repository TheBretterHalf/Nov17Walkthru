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
    },
    
    bookAroom: function(roomNumberReq) {
        if (this.roomsavailable()>0){
            for (let i=0; i<this.roomNumbers.length; i++){
                if (this.roomNumbers[i]==roomNumberReq){
                    this.roomNumbersBooked = this.roomNumbers.splice(i,1).concat(this.roomNumbersBooked);
                    console.log(this.roomNumbersBooked);
                    return;
                }
                else {
                    console.log("Not a valid Room #");
                }
                        
            }
        }
        else{
            console.log("No rooms Available");
        }
    },
    bookArandomroom: function(numofrooms){
        if (this.roomsavailable()>numofrooms){
            var selectedroom = this.roomNumbers[Math.floor(Math.random()*this.roomNumbers.length)]
            for (let i=0; i<this.roomNumbers.length; i++){
                if (this.roomNumber[i]==selectedroom){
                    this.roomNumbersBooked = this.roomNumbers.splice(i,1).concat(this.roomNumbersBooked);
                    return;
                }
            }
        } else ("No Rooms Available");
    }
};
