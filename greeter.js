function greeter(person) {
    return "Hi " + person.firstname + " " + person.lastname;
}
var user = { firstname: 'Nicole', lastname: "Strebel" };
window.onload = function () {
    var h1 = document.querySelector('h1');
    h1.innerHTML = greeter(user);
};
//# sourceMappingURL=greeter.js.map