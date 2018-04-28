function getAjax() {
    try {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (try_again) {
                return new ActiveXObject('Microsoft.XMLHTTP');
            }
        }
    } catch (fail) {
        return null;
    }
}

function getBody() {
  var name = $('#senderName').val();
  var email = $('#senderEmail').val();
  var phone = $('#phoneNumber').val();
  var msg = $('#message').val();

  return "name="+name+"&phone="+phone+"&email="+email+"&msg="+msg;
}

function sendMail() {
     var rq = getAjax();
     if (rq) {
         // Success; attempt to use an Ajax request to a PHP script to send the e-mail
         try {
           console.log('step2');
             rq.open('GET', 'php/sendmail.php?' + getBody(), true);

             rq.onreadystatechange = function () {
                 if (this.readyState === 4) {
                     if (this.status >= 400) {

                         // The request failed; fall back to e-mail client
                        //  window.open('mailto:' + to + '?subject=' + encodeURIComponent(subject));
                     }
                 }
             };

             rq.send(null);

         } catch (fail) {
             // Failed to open the request; fall back to e-mail client
            //  window.open('mailto:' + to + '?subject=' + encodeURIComponent(subject));

         }
     } else {
         // Failed to create the request; fall back to e-mail client
        //  window.open('mailto:' + to + '?subject=' + encodeURIComponent(subject));
     }
}
