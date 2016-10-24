$('#ta').val(localStorage.getItem('text'));

$('#ta').on('input', function(){
    localStorage.setItem('text', ($(this).val()));
    console.log(localStorage.getItem('text'));
});
