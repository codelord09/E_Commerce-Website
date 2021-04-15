function validate() {
    var firstn = document.getElementById('fname').value;
    var email1 = document.getElementById('email1').value;
    var mobile = document.getElementById('mobile').value;
    var pin = document.getElementById('pincode').value;
    var cvv = document.getElementById('cvv').value;
    var cnumber = document.getElementById('cnumber').value;




    var fnamecheck = /^[A-Za-z ]{3,30}$/;
    var emailcheck = /^[A-Za-z0-9_.]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.]{3,30}$/;
    var mobicheck = /^[6,7,8,9][0-9]{9}$/;
    var pincheck = /^[0-9]{6}$/;
    var cvvcheck = /^[0-9]{3}$/;
    var cnumbercheck = /^[0-9]{16}$/;



    if (fnamecheck.test(firstn)) {
        document.getElementById('errorname').innerHTML = " ";
    } else {
        document.getElementById('errorname').innerHTML = "Please enter the correct user name";
        return false;
    }

    if (emailcheck.test(email1)) {
        document.getElementById('erroremail1').innerHTML = " ";
    } else {
        document.getElementById('erroremail1').innerHTML = "Please enter the correct email id";
        return false;
    }
    if (mobicheck.test(mobile)) {
        document.getElementById('errormobi').innerHTML = " ";
    } else {
        document.getElementById('errormobi').innerHTML = "Please enter the correct Contact Number";
        return false;
    }
    if (pincheck.test(pin)) {
        document.getElementById('errorpin').innerHTML = " ";
    } else {
        document.getElementById('errorpin').innerHTML = "Please enter the correct Contact Number";
        return false;
    }
    if (cvvcheck.test(cvv)) {
        document.getElementById('errorcvv').innerHTML = " ";
    } else {
        document.getElementById('errorcvv').innerHTML = "Please enter the correct CVV Number";
        return false;
    }
    if (cnumbercheck.test(cnumber)) {
        document.getElementById('errorcnumber').innerHTML = " ";
    } else {
        document.getElementById('errorcnumber').innerHTML = "Please enter the correct Card Number";
        return false;
    }

}