describe ('Pizza', function(){
  it("Creates a new pizza with a size property, and a toppings property", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.meatToppings).to.eql([]);
    expect(testPizza.vegToppings).to.eql([]);
  });
  it("Adds a price method to all pizzas", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.price()).to.equal(20);
  });
});
