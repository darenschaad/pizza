function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Pizza(size){
  this.size = size;
  this.meatToppings = [];
  this.vegToppings = [];
};

Pizza.prototype.price = function() {
  if (this.size === "Large"){
    return((20 + (this.meatToppings.length)*2 + (this.vegToppings.length)*1).toFixed(2));
  }
  else if (this.size === "Medium"){
    return((17 + (this.meatToppings.length)*1.50 +(this.vegToppings.length)*.75).toFixed(2));
  }
  else {
    return((14 + (this.meatToppings.length)*1 + (this.vegToppings.length)*.50).toFixed(2));
  }
}

$(document).ready(function(){

  $("form#new-pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("#pizzaSize").val();
    var newPizza = new Pizza (pizzaSize);
    var meatToppings = $("input:checkbox:checked.meat").map(function() {
      newPizza.meatToppings.push((this).value);
    });


    var vegToppings = $("input:checkbox:checked.veg").map(function() {
      newPizza.vegToppings.push((this).value);
    });
    var inputtedFirstName = $("input#inputtedFirstName").val();
    var inputtedLastName = $("input#inputtedLastName").val();
    var newContact = new Contact (inputtedFirstName, inputtedLastName);
    $("span#insert").empty().append(newContact.fullName());

    $("ul#pizzas").append("<li><span class ='pizza'>" + newPizza.size + " Pizza - " + "$" + newPizza.price() + "</span></li>");
    $(".checkout").show();

    var totalAmount = function(newPizza) {
      var totalCost = 0;
      totalCost += parseInt(newPizza.price());
      return totalCost;
    }
    $(".meat").attr("checked", false);
    $(".veg").attr("checked", false);

    $(".pizza").last().click(function() {
      $("#show-pizza").show();
      $("#show-pizza h2").text(newPizza.size);
      $(".meatToppings").text(newPizza.meatToppings);
      $(".vegToppings").text(newPizza.vegToppings);
      $(".price").text(newPizza.price());
    })
  })
})
