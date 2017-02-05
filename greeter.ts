interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person){
  return "Hi " + person.firstname + " " + person.lastname;
}

var user = {firstname: 'Nicole', lastname: "Strebel"};
window.onload = () => {
   var h1: HTMLElement = document.querySelector('h1');
   h1.innerHTML = greeter(user);
};
