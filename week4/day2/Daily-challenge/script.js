let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

totalPrice = "35$"
groceries.totalPrice = totalPrice;
groceries["other.payed"] = false;
console.log(groceries);


// // Exercise 1 : Merge Words XP Ninja
//  mergeWords('Hello')(){
//     console.log ("Hello");

//  }



 

 


