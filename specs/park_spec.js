const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur1
  let dinosaur2
  let dinosaur3
  let dinosaur4
  let dinosaur5

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 25);
    dinosaur4 = new Dinosaur('eoraptor', 'omnivore', 20);
    dinosaur5 = new Dinosaur('utahraptor', 'carnivore', 75);



    park = new Park ('Isla Nublar', 100, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Isla Nublar');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur3)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function () {
  //   park.addDinosaur(dinosaur5)
  //   const actual = park.mostPopularDinosaur()
  //   assert.strictEqual(actual, 'utahraptor');
  // });
  //
  // it('should be able to find all dinosaurs of a particular species');


  it('should be able to calculate the total number of visitors per day' , function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 105);
  });

  it('should be able to calculate the total number of visitors per year' , function () {
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 38325);
  });

  it('should be able to calculate the total revenue from ticket sales for one year' , function () {
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 3832500);
  });

});
