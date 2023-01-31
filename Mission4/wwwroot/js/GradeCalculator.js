//This program will get the inputs of the html form and calculate the letter grade and overall percentage, then print it back out to the form
//It uses jquery and javascript to call the function when the button is clicked

$('#btnsubmit').click(function () {

//Get inputs from html form
assign = $('#assignments').val()
group = $('#groupprojects').val()
quiz = $('#quizzes').val()
midterm = $('#midterm').val()
final = $('#final').val()
intex = $('#intex').val()

//Calculate weighted grade
assignweight = assign * .5
groupweight = group * .1
quizweight = quiz * .1
midtermweight = midterm * .1
finalweight = final * .1
intexweight = intex * .1

//calculate total grade
total_grade = assignweight + groupweight + quizweight + midtermweight + finalweight + intexweight

//Find what letter grade matches their total grade
if (total_grade >= 94) {
    lettergrade = 'A'
}
else if (total_grade >= 90) {
    lettergrade = 'A-'
}
else if (total_grade >= 87) {
    lettergrade = 'B+'
}
else if (total_grade >= 84) {
    lettergrade = 'B'
}
else if (total_grade >= 80) {
    lettergrade = 'B-'
}
else if (total_grade >= 77) {
    lettergrade = 'C+'
}
else if (total_grade >= 74) {
    lettergrade = 'C'
}
else if (total_grade >= 70) {
    lettergrade = 'C-'
}
else if (total_grade >= 67) {
    lettergrade = 'D+'
}
else if (total_grade >= 64) {
    lettergrade = 'D'
}
else if (total_grade >= 60) {
    lettergrade = 'D-'
}
else {
    lettergrade = 'F'
}
    //Print results to html form
    $('#lettergrade').text('Your grade is ' + total_grade + '% or a(n) ' + lettergrade);
})