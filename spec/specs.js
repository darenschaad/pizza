describe ('Contact', function(){
  it("creates a new contact with the given properties", function() {
    var newContact = new Contact("Daren", "Schaad");
    expect(newContact.firstName).to.equal("Daren");
    expect(newContact.lastName).to.equal("Schaad");
    expect(newContact.addresses).to.eql([]);
  });

  it("adds the fullName method to a contact", function () {
    var newContact = new Contact("Taylor", "Pokoj");
    expect(newContact.fullName()).to.equal("Taylor Pokoj");
  });

});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("Home", "123 Main St", "Test City","Test State");
    expect(testAddress.addressType).to.equal("Home")
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });
  it("adds the fullAddress method to all addresses", function(){
    var testAddress = new Address("Home", "400 SW 6th St.", "Portland", "OR");
    expect (testAddress.fullAddress()).to.equal("Home, 400 SW 6th St., Portland, OR");
  })
});
