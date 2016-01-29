function Pizza(size){
  this.size = size;
  this.meatToppings = [];
  this.vegToppings = [];
}

Pizza.prototype.price = function() {
  if (this.size === "large"){
    return(20 + this.meatToppings.length*2 + this.vegToppings*1)
  }
  else if (this.size = "medium"){
    return(17 + this.meatToppings.length*1.5 +this.vegToppings*.75)
  }
  else {
    return(14 + this.meatToppings.length*1 + this.vegToppings*.5)
  }
}



$(document).ready(function(){


  $("form#new-pizza").submit(function(event){
    event.preventDefault();
    debugger;
    var pizzaSize = $("#pizzaSize").val();
    var newPizza = new Pizza (pizzaSize);
    var meatToppings = $("input:checkbox:checked.meat").map(function() {
      newPizza.meatToppings.push((this).value);
    })

  })

})
// return this.value;
// $("#meat input:checkbox:checked").each(function(){
//
// function Contact(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.addresses = [];
// };
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };
//
// function Address(addressType, street, city, state) {
//   this.addressType = addressType;
//   this.street = street;
//   this.city = city;
//   this.state = state;
// };
//
// Address.prototype.fullAddress = function() {
//   return this.addressType + ", " + this.street + ", " + this.city + ", " + this.state;
// };
//
// $(document).ready(function() {
//   $("#add-address").click(function() {
//     $("#new-addresses").append('<div class="new-address">' +
//                                  '<div class="form-group">' +
//                                    '<lable for="new-type">Address Type</label>' +
//                                    '<input type="text" class="form-control new-type">'+
//                                  '<div class="form-group">' +
//                                    '<label for="new-street">Street</label>' +
//                                    '<input type="text" class="form-control new-street">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-city">City</label>' +
//                                    '<input type="text" class="form-control new-city">' +
//                                  '</div>' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-state">State</label>' +
//                                    '<input type="text" class="form-control new-state">' +
//                                  '</div>' +
//                                '</div>');
//   });
//
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#inputtedFirstName").val();
//     var inputtedLastName = $("input#inputtedLastName").val();
//     var newContact = new Contact (inputtedFirstName, inputtedLastName);
// //
//
//     $(".new-address").each(function() {
//       var inputtedAddressType = $(this).find("input.new-type").val();
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();
//       var newAddress = new Address (inputtedAddressType, inputtedStreet, inputtedCity, inputtedState);
//       newContact.addresses.push(newAddress);
//     });
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.fullName());
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });
//     });
//
//     // debugger;
//     $("input#inputtedFirstName").val("");
//     $("input#inputtedLastName").val("");
//     $("input.new-type").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
//
//   });
// });
