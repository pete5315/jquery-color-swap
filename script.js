$(ready)
//global variables
let i=0

function ready() {
//event listeners
$('#generate').on('click', addRow)
$('div').on('click', '#delete', deleteRow);
$('div').on('click', '#yellow', styleYellow);

}

function addRow() {
i++;
$('#rowContainer').append(`
<div class='row'>
    <p>${i}
    <div class='buttonContainer'>
        <button id='yellow'>Yellow</button>
        <button id='delete'>Delete</button>
    </div>
</div>



`)
}

function deleteRow() {
    $(this).closest('.row').remove();

}

function styleYellow() {
    $(this).parent().parent().addClass('yellow')

}