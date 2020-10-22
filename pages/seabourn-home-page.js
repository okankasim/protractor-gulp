let seabourn = function() {
    this.bookedGuests = element(by.xpath("//a[.='Booked Guests']"));
    this.myAccount = element(by.css('li>[data-linktext*="My Account"]'));
    this.homePage = element(by.css("[alt='Seabourn Home Page']"));

}
module.exports = new seabourn();