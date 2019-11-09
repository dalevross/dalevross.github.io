 $(document)
     .ready(
         function () {

             $('head')
                 .append(
                     '<link rel="chrome-webstore-item"	href="https://chrome.google.com/webstore/detail/pdpejcfahhppmalemodibekpbiopmogo"/>');
             $("#tabs").tabs();
             $("#accordion").accordion({
                 collapsible: true,
                 active: false,
                 heightStyle: "content"
             });

             $("#installButton").button();

             function successCallback() {
                 document.getElementById('installButton').style.display = 'none';

                 $("#resultDialog").attr('title', 'Success').html(
                     "<span>OWL successfully installed!</span>")
                     .dialog({
                         height: 140,
                         modal: true
                     });
             }

             function failureCallback(errmsg) {

                 $("#resultDialog").attr('title', 'Error').html(
                     "<span>OWL was not installed. The following message was returned: <br/>" + errmsg + "</span>").dialog({
                     height: 140,
                     modal: true
                 });
             }

             $("div#owlmain #installButton")
                 .click(
                     function () {
                         chrome.webstore
                             .install(
                                 "https://chrome.google.com/webstore/detail/pdpejcfahhppmalemodibekpbiopmogo",
                                 successCallback,
                                 failureCallback);
                     });
         });