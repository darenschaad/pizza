describe ('Pizza', function(){
  it("Creates a new pizza with a size property, and a toppings property", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.meatToppings).to.eql([]);
    expect(testPizza.vegToppings).to.eql([]);
  });
  it("Adds a price method to all pizzas", function() {
    var testPizza = new Pizza("large");
    expect(testPizza.price()).to.equal(20);
  });
  it("tests to see if the price of the medium pizza by the prototype price method", function() {
    var testPizza = new Pizza('medium');
    expect(testPizza.price()).to.equal(17);
  })
});
