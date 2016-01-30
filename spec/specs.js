describe ('Pizza', function(){
  it("Creates a new pizza with a size property, and a toppings property", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.meatToppings).to.eql([]);
    expect(testPizza.vegToppings).to.eql([]);
  });
  it("Adds a price method to all pizzas", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.price()).to.equal(20.00.toFixed(2));
  });
  it("tests to see if the price of the medium pizza by the prototype price method", function() {
    var testPizza = new Pizza('Medium');
    expect(testPizza.price()).to.equal(17.00.toFixed(2));
  });
});

describe ('Contact', function(){
  it ("Creates a contact for a pizza order", function() {
    var testContact = new Contact("Daren", "Schaad")
    expect(testContact.firstName).to.equal("Daren");
    expect(testContact.lastName).to.equal("Schaad");
  });
  it("adds the fullName method to a contact", function () {
    var newContact = new Contact("Daren", "Schaad");
    expect(newContact.fullName()).to.equal("Daren Schaad");
  });
});
