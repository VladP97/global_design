$('#getCatalog').on('click', () => {
    var phone = $('#maskedPhone');
    var email = $('#email');
    $('#phone').css('display', 'block');
    $('#maskedPhone').css('display', 'none');
    $('#maskedPhone').val('');
    $('#email').val('');
    $.ajax({
        type: "post",
        url: '/catalog',
        async: false,
        data: {
            phone: phone,
            email: email
        },
        success: (res) => {
            console.log(res);
        },
        dataType: 'json',
        timeout: 1000
    });
});

$('#phone').focus(() => {
    $('#maskedPhone').css('display', 'block');
    $('#maskedPhone').focus();
    $('#phone').css('display', 'none');
});
