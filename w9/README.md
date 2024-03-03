# What does our code do so far?

## FORM.addEventListener("submit", function (e) {
    - Event listener will be listening for the activation by the submit in our for.
    - (e.prevent)
        will prevent default behavior of looking at server
    - will reference our global form in our main.js module
         points to form id that is located in index.html file
    - grabs first and last name 
    - grabs housemembers and will (parseInt) 
        convert them from strings to integers
    - sets house size as value from input
        uses a select statement: coded with the name value in the html
    - house size is coded as name value in the index.html
    - ALL are declared withing the blockscope
    - Call start function
    - this passes in the values


## *renderTbl*
- Will tke the data from the array of our **const cfpData = []** and render it in our webpage as a table.
- This will then move to our render module to run the renderTbl function.
## *function renderTbl(data)*
- fist step is to create the table. 
    -  Will run the **const table = renderTblHeading** 
        - this will move to run **function renderTblHeading**, a function that will create the heading of our table.
## *function renderTblHeading()*
- This function will create our table heading
- **TBL.innerHTML = ""** this line of code will clear the content of the HTML with id TBL. Existing content will be removed.
#### *const table = document.createElement("table");*
- creates table element with variable table that will hold heading and data rows
#### *const thead = document.createElement("thead");*
- creates a thead element with variable thead
#### *const tr = document.createElement("tr");*
- creates a tr(table row) element with variable tr
- This will represent the header row of the table. 
    - This tr element doesn't have any content.
#### *const headingTextArr = []*
- function creates table headings with the information provided inside the array
#### *headingTextArr.forEach(function (text)*
- this is a **forEach** loop that goes through each item in the array and runs a function for each item in array
#### *const th = document.createElement("th");*
- For each item (heading text), it creates a new th (table header cell) element 
#### *th.textContent = text;*
- sets the text content of the header cell
#### *tr.appendChild(th);*
- appends the created table header "th" cell to the header row "tr"
#### *thead.appendChild(tr);*
- append this table row "tr" to the table header section "thead" of the table.
    - When we append this "tr" to the table's "thead" section, it becomes the header row of the table
#### *table.appendChild(thead);*
- appends the header section "thead" to the main table element "table".
    - completes the table structure by adding the header.
#### *return table;*
- function returns the completed table
    - includes the header row with the specified column headings.
**Code will run back to...**
## *function renderTbl(data)*
    Will continue within the function with the *const tbody = document.createElement("tbody")* line of code
#### *const tbody = document.createElement("tbody");*
- Creates "tbody" element in the document
    - This "tbody"(table body) will be filled with rows containing the data provided to the **renderTbl** function.
### *data.forEach(function(obj)*
    Function within the renderTbl function
- The function iterates over the data array using forEach. This array is expected to be an object
    - The **funtion start()** from the *main* module will be where this function is getting the array of objects from.
#### *const tr = document.createElement("tr");*
- For each object in the array, a "tr"(table row) is created.
#### *const tdName = document.createElement("td");*
- creates a table cell "td" for the firstName property of the current object
#### *tdName.textContent = obj.firstName;*
- The cell's text content is set to the value of this property.
    - the value is the object data from the start function in the main module
#### *const tdTotal = document.createElement("td");*
- creates table cell for the cfpTotal property
#### *tdTotal.textContent = obj.cfpTotal;*
- Text content is set to the value of this property.
    - the value is the object data from the start function in the main module
#### *tr.appendChild(tdName); & tr.appendChild(tdTotal);*
- the tr cells are now appended to the table row
#### *tbody.appendChild(tr);*
 - Add created row to "tbody"

**Code will finish running the...**
## *function renderTbl(data)*
#### *table.appendChild(tbody);*
- Appending the "tbody"(Table Body) to the Table
#### *TBL.appendChild(table);*
- Full table (with heading and body filled with data) is appended to the document, identified by TBL.

# My thoughts
Video was incredibly helpful and will reference it again if I get mixed up in my code. I had originally only covered the process of the render table but glad you covered the houseHold and houseSize again. Will try and go back to add a breakdown for those functions as well when I have time

# EDIT - repopulate values?
i think we Will most likely need to create a function to call back the info for editing.

# Local Storage
So the data that we have will be stored directly onto the browser for use later,unless intentionally cleared. In the local storage You need to call the setItem method (localStorage.setItem) passing in two arguments (the key of the item[the identifyer]: the value itself). In local storage we are storing data in string format, by using the JSON.stringify we are *serializing*(translating an object or data structure) into string for storage. To bring back the information we use *parse* which will get the item back into an object for use inside of javascript.