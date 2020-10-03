//declaring variables and display the message entered in the prompt
let rows = parseInt(prompt("Enter the number of rows you want in this display."))
let columns = parseInt(prompt("Enter the number of columns you want in this display."))

//The code below will utilize a nested loop, it will display columns and rows with an "*"
for (i = 1; i<=rows; i++){
for (j = 1;j<=columns;j++){
document.write("*")
}
document.write("<br />")
}
