class VendingMachine {
  constructor(firstCandyObj, secondCandyObj, firstChipsObj) {
    this.firstCandy = firstCandyObj;
    this.secondCandy = secondCandyObj;
    this.firstChips = firstChipsObj;
  }

  //Subtracts one from the property's count.
  buy(food) {
    if (food.count > 0) {
      food.count--;
    }
  }

  //Returns a string of all the object's information.
  render() {
    return `
        <div>${this.firstCandy.name} stock: ${this.firstCandy.count}</div>
        <div>${this.secondCandy.name} stock: ${this.secondCandy.count}</div>
        <div>${this.firstChips.name} stock: ${this.firstChips.count}</div>
      `;
  }
}

//VendingMachine takes objects with a name and count property.
let machine = new VendingMachine(
  {
    name: "Kit-Kat",
    count: 5,
  },
  {
    name: "Hershey's Bar",
    count: 3,
  },
  {
    name: "Lay's Chips",
    count: 7,
  }
);

//Put initial information on page.
let vendingDiv = document.getElementById("vendingDiv");
vendingDiv.innerHTML = machine.render();

//Run the object's buy() method and update the page.
function buyFood(selection) {
  machine.buy(selection);
  vendingDiv.innerHTML = machine.render();
}
