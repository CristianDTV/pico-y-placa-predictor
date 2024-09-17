class PicoYPlacaPredictor {
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
    return day == 0 ? 7 : day;
  }

  isInRestrictedHours() {
    const { hours, minutes } = this.time;
    const totalMinutes = hours * 60 + minutes;

    const morningStart = 7 * 60;
    const morningEnd = 9 * 60 + 30;
    const eveningStart = 16 * 60;
    const eveningEnd = 19 * 60 + 30;

    return (
      (totalMinutes >= morningStart && totalMinutes <= morningEnd) ||
      (totalMinutes >= eveningEnd && totalMinutes <= eveningEnd)
    );
  }

  isRectricted() {
    const restrictionSchedule = {
      1: [1, 2],
      2: [3, 4],
      3: [5, 6],
      4: [7, 8],
      5: [9, 0],
    };

    const DayOfWeek = this.getDayOfWeek();
    const LastDigit = this.getLastDigit();

    const restrictedDigits = restrictionSchedule[DayOfWeek] || [];

    return restrictedDigits.includes(LastDigit) && this.isInRestrictedHours();
  }

  canBeOnRoad() {
    return !this.isRectricted();
  }
}
