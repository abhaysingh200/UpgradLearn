document.addEventListener('DOMContentLoaded', function () {
    // Get the modals
    var signInModal = document.getElementById('signInModal');
    var signUpModal = document.getElementById('signUpModal');

    // Get the buttons that open the modals
    var signInBtn = document.getElementById('signInBtn');
    var signUpBtn = document.getElementById('signUpBtn');

    // Get the <span> elements that close the modals
    var closeSignIn = document.getElementById('closeSignIn');
    var closeSignUp = document.getElementById('closeSignUp');

    // When the user clicks the button, open the corresponding modal
    signInBtn.onclick = function () {
        signInModal.style.display = 'block';
    }

    signUpBtn.onclick = function () {
        signUpModal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the corresponding modal
    closeSignIn.onclick = function () {
        signInModal.style.display = 'none';
    }

    closeSignUp.onclick = function () {
        signUpModal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == signInModal) {
            signInModal.style.display = 'none';
        }
        if (event.target == signUpModal) {
            signUpModal.style.display = 'none';
        }
    }
});
