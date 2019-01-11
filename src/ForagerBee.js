class ForagerBee extends Bee {
  constructor() {
    super();
    //in all normal circumstances, could be:
    //  this.age = this.age + 5;
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(value) {
    this.treasureChest.push(value);
  }
};
