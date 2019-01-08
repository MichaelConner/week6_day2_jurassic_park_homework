const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const position = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(position, 1)
};

// Park.prototype.mostPopularDinosaur = function () {
//   let dinosaurs = this.dinosaurs;
//   return dinosaurs.reduce((max, dinosaur) => dinosaur.guestsAttractedPerDay > max ? dinosaur.guestsAttractedPerDay : max, dinosaurs[0].guestsAttractedPerDay);
// };






Park.prototype.totalVisitorsPerDay = function () {
  let total = 0;
  let dinosaurs = this.dinosaurs;
  for (let dinosaur of dinosaurs) {
    total += dinosaur.guestsAttractedPerDay
  }
  return total;
};

Park.prototype.totalVisitorsPerYear = function () {
  return this.totalVisitorsPerDay() * 365;
};

Park.prototype.totalRevenuePerYear = function () {
  return this.totalVisitorsPerYear() * this.ticketPrice;
};


module.exports = Park;
