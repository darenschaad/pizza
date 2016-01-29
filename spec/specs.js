describe ('Pizza', function(){
  it("Creates a new pizza with a size property, and a toppings property", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
  });
});
