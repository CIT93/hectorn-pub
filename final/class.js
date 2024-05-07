class SleepDecision {
    constructor(totalHoursSlept, hoursSleptLastNight, selectedDay = null) {
        this.totalHoursSlept = totalHoursSlept;
        this.hoursSleptLastNight = hoursSleptLastNight;
        this.selectedDay = selectedDay;
    }

    validateInput() {
        if (this.totalHoursSlept < 0 || this.totalHoursSlept > 56) {
            return "Total hours must be between 0 and 56.";
        }
        if (this.hoursSleptLastNight < 0 || this.hoursSleptLastNight >= 24) {
            return "You can't sleep more than 24 hours in a day.";
        }
        return null;
    }

    getCurrentDay() {
        if (this.selectedDay) {
            return this.selectedDay;
        } else {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const todayIndex = new Date().getDay();
            return daysOfWeek[todayIndex];
        }
    }

    getStartTime(currentDay) {
        const startTimes = {
            "Monday": "6:00am",
            "Tuesday": "9:00am",
            "Wednesday": "6:00am",
            "Thursday": "9:00am",
            "Friday": "9:00am",
            "Saturday": "Don't Worry, Sleep IN",
            "Sunday": "Don't Worry, Sleep IN"
        };
        return startTimes[currentDay];
    }

    checkSleepCycle() {
        const currentDay = this.getCurrentDay();
        const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(currentDay);
        let maxHoursInWeek = 56; // Adjust the maximum hours available in the week as needed
        let hoursAvailableInWeek = Math.max(0, (dayIndex * 8));
        const newTotal = this.totalHoursSlept + this.hoursSleptLastNight;
        hoursAvailableInWeek = maxHoursInWeek - newTotal; // Update hours available in the week based on new total
        return Math.max(0, hoursAvailableInWeek); // Ensure non-negative value for hours available in the week
    }

    calculateTotalHoursSleptThisWeek() {
        return this.totalHoursSlept + this.hoursSleptLastNight;
    }

    calculateSleepData() {
        const startTime = this.getStartTime(this.getCurrentDay());
        const hoursAvailableToSleep = this.checkSleepCycle();
        const totalHoursSleptThisWeek = this.calculateTotalHoursSleptThisWeek();
        return { 
            currentDay: this.getCurrentDay(), 
            startTime, 
            hoursSleptLastNight: this.hoursSleptLastNight, 
            totalHoursSlept: this.totalHoursSlept, 
            hoursAvailableToSleep,
            totalHoursSleptThisWeek
        };
    }
}

export { SleepDecision };
