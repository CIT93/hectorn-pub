# Recycle Solution

PROMPT: Identify the amount of waste that you recycle. If you do not recycle, then add 24 points to your score. However, if you do recycle, then start with 24 points and subtract 4 points for each type of item that you recycle. You can subtract four points for each of the following recycling categories:[5]
Glass
Plastic
Paper
Aluminum
Steel
Food waste (composting)

1. For the recycling solution i would add a check box so confirm if the user recycles or not. as well as checkboxes for each category
2. Add a recycled and checkedItems parameters to the constructor with checked items being an array
3. add calRecyclePoints to calculate points based on whether user recycles or not

```
calRecyclePoints() {
    if (this.recycle) {
        this.recyclePoints = 24;
        this.recyclePoints -= 4 * this.checkedItems.length;
    } else {
        this.recyclePoints = 24;
    }
}
    - has base points of 24
    - calculates the deduction in points based on the number of items they recycle.
```

4. add recycled points to calculated total
5. capture the checked items directly within the submit event listener
add the recycled checked from the form to the edit event listener
