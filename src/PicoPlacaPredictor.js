class PicoPlacaPredictor {
  constructor(licensePlate, dateString, timeString) {
    this.licensePlate = licensePlate;
    this.date = new Date(dateString);
    this.time = this.parseTime(timeString);
  }

  parseTime(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return { hours, minutes };
  }

  getLastDigit() {
    return parseInt(this.licensePlate.slice(-1), 10);
  }

  getDayOfWeek() {
    const day = this.date.getDay();
    return day === 0 ? 7 : day;
  }

  isInRestrictedHours() {
    const { hours, minutes } = this.time;
    const totalMinutes = hours * 60 + minutes;

    const morningStart = 6 * 60;
    const morningEnd = 9 * 60 + 30;
    const eveningStart = 16 * 60;
    const eveningEnd = 20 * 60;

    return (
      (totalMinutes >= morningStart && totalMinutes <= morningEnd) ||
      (totalMinutes >= eveningStart && totalMinutes <= eveningEnd)
    );
  }

  isRestricted() {
    const restrictionSchedule = {
      1: [1, 2],
      2: [3, 4],
      3: [5, 6],
      4: [7, 8],
      5: [9, 0],
    };

    const dayOfWeek = this.getDayOfWeek();
    const lastDigit = this.getLastDigit();

    const restrictedDigits = restrictionSchedule[dayOfWeek] || [];

    return restrictedDigits.includes(lastDigit) && this.isInRestrictedHours();
  }

  canBeOnRoad() {
    return !this.isRestricted();
  }
}

module.exports = PicoPlacaPredictor;