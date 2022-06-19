var car = {
  make: "Skoda",
  model: "Fabia",
  country: "The Czech Republic",
  year: "2006",
  fuel: "Diesel",
  color: "red",
  money: 100,
  passengers: 5,
  fuelCapacity: 40,
  fueLprice: 2.5,
  consump: 6,
  distance: 0,
  oil: 4,
  tires: "winter",
  season: "summer",

  drive: function (km) {
    var perLitre = this.consump / 100;
    var x = perLitre * km <= this.fuelCapacity;
    var lowFuel = 5;
    if (!x) {
      console.log("Not enough fuel !");
      return alert("You cant proceed");
    }

    if (this.season != this.tires) {
      return alert("You must change your tires !");
    }
    this.distance += km;
    this.fuelCapacity = this.fuelCapacity - perLitre * km;
    if (this.fuelCapacity <= lowFuel) {
      alert("Recharge fuel ASAP");
    }
    return (
      "The disance ran is " +
      this.distance +
      ", the fuel is " +
      this.fuelCapacity
    );
  },
  rechargeFuel: function (litres) {
    var bill = this.fueLprice * litres;
    if (litres > 40 - this.fuelCapacity) {
      this.fuelCapacity = this.fuelCapacity;
      return "No space in the tank";
    } else if (bill > this.money) {
      this.money = this.money;
      return "Not enough money";
    } else if (litres < 40 - this.fuelCapacity) {
      this.money -= bill;
      return (this.fuelCapacity += litres);
    }
  },

  getMoney: function (money) {
    this.money += money;
  },

  changeWheels: function (wheel) {
    if (wheel === "winter" || wheel === "summer") {
      return (this.tires = wheel);
    } else {
      return "This is not a tires";
    }
  },

  changeSeason: function (season) {
    this.season = season;
  },
};
