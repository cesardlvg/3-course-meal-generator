const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers){
      this._courses.appetizers = appetizers; 
    },
    set mains(mains){
      this._courses.mains = mains; 
    },
    set desserts(desserts){
      this._courses.desserts = desserts; 
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,  
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name}, and the total price is ${totalPrice}`;   
    }
  };
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 5.00);
  menu.addDishToCourse('appetizers', 'fries', 3.00);
  
  menu.addDishToCourse('mains', 'steak', 10.00);
  menu.addDishToCourse('mains', 'salmon', 9.00);
  menu.addDishToCourse('mains', 'tofu', 12.00);
  
  menu.addDishToCourse('desserts', 'ice cream', 3.00);
  menu.addDishToCourse('desserts', 'coffee', 2.00);
  menu.addDishToCourse('desserts', 'cake', 5.00);
  
  let meal = menu.generateRandomMeal();
  let btn = document.querySelector('#btn');
  let mealDisplay = document.getElementById('mealDisplay');
  
const GenerateMeal = () => {
  mealDisplay.innerHTML = menu.generateRandomMeal();
};