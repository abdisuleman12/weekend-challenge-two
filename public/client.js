$(document).ready(function (){

$('.mathButton').on('click', function () {
    console.log('button was clicked')
    // var firstNumber = $('#inputOne').val();
    // var secondNumber = $('#inputTwo').val();
    // var mathType = $(this).attr('id');
    // console.log('first input is ', firstNumber)
    // console.log('second input is', secondNumber)
    $.ajax ({
        method: 'POST',
        url: '/userCalc',
        data: {
            firstNumber : $('#inputOne').val(),
            secondNumber : $('#inputTwo').val(),
            mathType : $(this).attr('id')
        }, // end of data send 
        success: function (response) {
            console.log(response);
            displayOnDom(response);
        } // endo of success response 

    })


})// end of mathButton Click 

function displayOnDom (result) {
    $('#container').html('<div>' + result + '</div>')
}; // end of displaying on dom function 

$('#clear').on ('click', function () {
$('#inputOne').val('');
$('#inputTwo').val('');
   
});



}); // end of doc ready 