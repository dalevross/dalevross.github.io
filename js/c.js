$(document).ready(function () {

    var dj_sending = false;
    bootstrap_alert = function () { }
    bootstrap_alert.error = function (message) {
        $('#alert_placeholder').html('<div class="alert alert-error"><a class="close" data-dismiss="alert">×</a><span>' + message + '</span></div>')
    }

    bootstrap_alert.success = function (message) {
        $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>' + message + '</span></div>')
    }

    

    // Attach a submit handler to the form
    $(".form-contact-us").submit(function (event) {

        if (dj_sending)
            return;

        $('#alert_placeholder').html('<div>Sending....</div>');

        dj_sending = true;

        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
        save = $form.find("input[name='save']").val();
        name = $form.find("input[name='contact_name']").val();
        email = $form.find("input[name='contact_email']").val();
        message = $form.find("textarea[name='contact_message']").val();
        sUrl = "contact-form-submission.php";

        
        // Send the data using post
        var posting = $.post(sUrl, { save: save,contact_name:name,contact_email:email,contact_message:message});

        // Put the results in a div
        posting.done(function (response) {
            var data = jQuery.parseJSON(response);
            if (data.type == 'error') {
                bootstrap_alert.error(data.msg);
            }
            else
            {
                bootstrap_alert.success('Message sent.');
            }
        });

        dj_sending = false;


    });
});