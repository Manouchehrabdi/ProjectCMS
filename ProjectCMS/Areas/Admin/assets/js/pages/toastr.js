$(document).ready(function () {
    $(".tst1").on("click", function () {
        $.toast({
            heading: 'به سانی ادمین خوش آمدید',
            text: 'از موارد از پیش تعریف شده استفاده کنید، یا یک موقعیت سفارشی را تعیین کنید',
            position: 'top-left',
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3000,
            stack: 6
        });

    });

    $(".tst2").on("click", function () {
        $.toast({
            heading: 'به سانی ادمین خوش آمدید',
            text: 'از موارد از پیش تعریف شده استفاده کنید، یا یک موقعیت سفارشی را تعیین کنید',
            position: 'top-left',
            loaderBg: '#ff6849',
            icon: 'warning',
            hideAfter: 3500,
            stack: 6
        });

    });
    $(".tst3").on("click", function () {
        $.toast({
            heading: 'به سانی ادمین خوش آمدید',
            text: 'از موارد از پیش تعریف شده استفاده کنید، یا یک موقعیت سفارشی را تعیین کنید',
            position: 'top-left',
            loaderBg: '#ff6849',
            icon: 'success',
            hideAfter: 3500,
            stack: 6
        });

    });

    $(".tst4").on("click", function () {
        $.toast({
            heading: 'به سانی ادمین خوش آمدید',
            text: 'از موارد از پیش تعریف شده استفاده کنید، یا یک موقعیت سفارشی را تعیین کنید',
            position: 'top-left',
            loaderBg: '#ff6849',
            icon: 'error',
            hideAfter: 3500

        });

    });


});