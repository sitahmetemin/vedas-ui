//Menü açılıp kapanma olayı burada yapıldı
$('#sidebarClose').on('click', function () {

    let status = $('#content').attr('class');

    if (status.includes('content-fit')) {

        $('#content').attr('class', 'col-md-12 ');
        $('#sidebar').css('left', '-500px');
        $('#sidebarIcon').attr('class', 'fas fa-bars');
    } else {
        $('#content').attr('class', 'col-md-12 content-fit');
        $('#sidebar').css('left', '-10px');
        $('#sidebarIcon').attr('class', 'fa fa-times');
    }
});

$(document).ready(function () {

    console.log("Vedaş Projesine Hoş Geldiniz.")


});