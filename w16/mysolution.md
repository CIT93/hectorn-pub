# Water Consumption Solution

1. Add two new properties [dishwasherFrequency] and [washingMachineFrequency] to the FP constructor.
2. add method named [calWaterConsumptionPoints()] in the FP class to calculate points based on dishwasher and washing machine frequency. using the wikihow calculations:
    - If you run your dishwasher or washing machine more than 9 times per week, then add 3 points.
    - If you run it 4 to 9 times, then add 2 points.
    - If you run it 1 to 3 times, then add 1 point.
    - If you don't have a dishwasher, then add nothing.

```
CODE FOR CALCULATING DISHWASHER AND WASHING MACHINE

 calWaterConsumptionPoints() {
    if (this.dishwasherFrequency > 9) {
      this.dishwasherPoints = 3;
    } else if (this.dishwasherFrequency >= 4 && this.dishwasherFrequency <= 9) {
      this.dishwasherPoints = 2;
    } else if (this.dishwasherFrequency >= 1 && this.dishwasherFrequency <= 3) {
      this.dishwasherPoints = 1;
    } else {
      this.dishwasherPoints = 0;
    }

    if (this.washingMachineFrequency > 9) {
      this.washingMachinePoints = 3;
    } else if (this.washingMachineFrequency >= 4 && this.washingMachineFrequency <= 9) {
      this.washingMachinePoints = 2;
    } else if (this.washingMachineFrequency >= 1 && this.washingMachineFrequency <= 3) {
      this.washingMachinePoints = 1;
    } else {
      this.washingMachinePoints = 0;
    }
  }
  ```
  
3. Update the [calTotal()] to include both new water consumption points in the total.

4. Update the event listener for form submission [FORM.addEventListener].
5. add two input field in index for dishwasher and washing machine
