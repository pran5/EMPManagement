/*! contacts.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard documents JS file 
========================================================================== */

$(document).ready(function(){

    "use-strict";

    if ($('#contacts-list-wrapper').length) {

        if ($('.chosen-select-no-single').length) {
            //Chosen
            var config = {
                '.chosen-select-no-single': {
                    disable_search_threshold: 100,
                    width: "100%"
                },
            };
            for (var selector in config) {
                if (config.hasOwnProperty(selector)) {
                    $(selector).chosen(config[selector]);
                }
            }
        }

    }

    adjustDropdowns();

    $(window).scroll(function() {
        adjustDropdowns();
    })

    function adjustDropdowns() {
        $('.contacts-list-dropdown').each(function(){
            var $this = $(this);

            if (($(this).offset().top + $(this).height()) >= ($(window).height() - 250)) {
                $($this).addClass("is-up");
            }
            else {
                $($this).removeClass("is-up");
            }
        })
    }

    //
    $('.contacts-table tbody input').on('change', function(){
        $(this).closest('tr').toggleClass('is-highlighted');
        $(this).closest('tr').find('.actions .dropdown, .actions > .button').toggleClass('is-hidden');

        var checkedRows = $('.documents-table tbody input:checked').length;

        if (checkedRows === 1) {
            $('#default-controls, #bulk-controls').addClass('is-hidden');
            $('#single-controls').removeClass('is-hidden');
        }
        else if (checkedRows > 1) {
            $('#default-controls, #single-controls').addClass('is-hidden');
            $('#bulk-controls').removeClass('is-hidden');
        }
        else {
            $('#bulk-controls, #single-controls').addClass('is-hidden');
            $('#default-controls').removeClass('is-hidden');
        }
    })

    $('.contacts-table th input').on('change', function(){
        var checkedRows = $('.contacts-table tbody input:checked').length;


        $('#default-controls, #bulk-controls').toggleClass('is-hidden');

        if (checkedRows >= 1) {
            $('input:checkbox').prop('checked', false);
            $('.contacts-table tbody tr').removeClass('is-highlighted');
            $('#default-controls').removeClass('is-hidden');
            $('#bulk-controls, #single-controls').addClass('is-hidden');
            //$('.actions .dropdown, .actions > .button').toggleClass('is-hidden');
            $('.actions .dropdown').removeClass('is-hidden');
            $('.actions > .button').addClass('is-hidden');
        }
        else {
            $('input:checkbox').prop('checked', this.checked);
            $('.contacts-table tbody tr').addClass('is-highlighted');
            $('#bulk-controls').removeClass('is-hidden');
            $('#default-controls').addClass('is-hidden');

        }

    })

    //Call modal datepicker
    $('#call-picker').datepicker();
    
    //wickedpicker 12 hours init
    $('#event-timepicker').wickedpicker();

})