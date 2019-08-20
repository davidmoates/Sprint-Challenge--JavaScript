// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height

  Formula for cuboid volume: length * width * height
*/

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height.

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
*/

console.log('class.js starts here');


class CuboidMaker2 {
  constructor(cm) {
    this.length = cm.length;
    this.width = cm.width;
    this.height = cm.height;
  }
  // volume() {
  //   return this.length * this.width * this.height;
  // };
  // surfaceArea() {
  // return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  // };
}


class CubeMaker extends CuboidMaker2 {
  constructor(cubeM) {
    super(cubeM);
  }
  volume() {
    return this.length * this.width * this.height;
  };
  surfaceArea() {
  return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
  };
}

// const cuboid2 = new CuboidMaker2({
//   length: 4,
//   width: 5,
//   height: 5,
// });


const cuboid2 = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,
});

// The strech says to find the formulas for volume and surface area for a cube but it would be the same so I just created the sub class CubeMaker and added the methods there.


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
