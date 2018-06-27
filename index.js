class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

  var eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {


  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = {horizontal: beginningLocation.horizontal, vertical: beginningLocation.vertical}
    this.endingLocation = {horizontal: endingLocation.horizontal, vertical: endingLocation.vertical}

  }

  blocksTravelled() {
    let numVerticalBlocksTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let numHorizontalBlocksTravelled = Math.abs( (eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal) ))

    return numVerticalBlocksTravelled + numHorizontalBlocksTravelled;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
