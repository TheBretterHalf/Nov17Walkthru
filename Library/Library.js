var Library = {
    name: "Truth-Brary",
    books: ["amelia bedilia", "the amber spyglass","fear", "step brothers:the novelization", "coding for dummies"],
    checkedout:[],
    booksavail: function (){
        for (let i=0; i<this.books.length; i++){
        var CaseBooks = this.books[i].charAt(0).toUpperCase()+this.books[i].slice(1);
        console.log(CaseBooks)
        }
    },
    checkoutbook: function(requestedbook){
        if (this.books.length<0){
            console.log("Little Town of Footloose")
        }
        else
            var rqbook=requestedbook.toLowerCase();
            for (let i=0; i<this.books.length; i++){
                if (rqbook==this.books[i]){
                    this.checkedout = this.checkedout.concat(this.books.splice(i,1));
                    console.log(this.checkedout)
                    return
                }
                else
                    console.log("We do not have that book in our Library")
            }
    },
    checkinbook: function(checkbook){
        if (this.checkedout.length<0){
            console.log("No Books Checked Out")
        }
        else
            var chkbook = this.checkbook
            for (let i=0; i<this.checkedout.length; i++){
                if (chkbook==this.checkedout[i]){
                    this.books = this.books.concat(this.checkedout.splice(i,1));
                    console.log(this.books)
                    return 
                }
                else
                    console.log("You have not checked this book out")
            }
    }
}