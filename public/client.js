'use strict';

function showLandingPage() {
    $('#signupUsername').val('');
    $('#signupPassword').val('');
    $('#signupPasswordConfirm').val('');
    $('#loginUsername').val('');
    $('#loginPassword').val('');
    $('#landingPage').removeClass('hidden');
    $('#dashboardPage').addClass('hidden');
    watchFormSwitch();
    watchSignupForm();
    watchLoginForm();
}

function watchFormSwitch() {
    $('#loginSwitch').click(e => {
        $('#signupForm').addClass('hidden');
        $('#loginForm').removeClass('hidden');
        $('#signupSwitch').removeClass('switch-selected');
        $('#loginSwitch').addClass('switch-selected');
    });
    $('#signupSwitch').click(e => {
        $('#loginForm').addClass('hidden');
        $('#signupForm').removeClass('hidden');
        $('#loginSwitch').removeClass('switch-selected');
        $('#signupSwitch').addClass('switch-selected');
    });
}

function confirmPassword(input) {
    if (input.value !== document.getElementById('password').value) {
        input.setCustomValidity('Password Must be Matching.');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}

function watchSignupForm() {
    $('#signupForm').submit(e => {
        e.preventDefault();
        const username = $('#signupUsername').val();
        const password = $('#signupPassword').val();
        const passwordConfirm = $('#signupPasswordConfirm').val();
        password !== passwordConfirm ?
            alert('Passwords do not match') :
            (postNewUser(username, password), showDashPage(auth));
    });
}

function watchLoginForm() {
    $();
}

function showDashPage(auth) {
    $('#landingPage').addClass('hidden');
    $('#dashboardPage').removeClass('hidden');
    $('#tasks').removeClass('active-tab');
    $('#email').removeClass('active-tab');
    $('#stats').removeClass('active-tab');
    $('#dashboard').addClass('active-tab');
    $('#taskList').addClass('hidden');
    $('#taskBox').addClass('hidden');
    $('#emailBox').addClass('hidden');
    $('#statskBox').addClass('hidden');
    $('#dashboardBox').removeClass('hidden');
    getUserData(auth);
    //.then display specifically to dashboard??
    watchTabSwitch();
}

function watchTabSwitch() {
    $('#')
}

function postNewUser(username, password) {
    //post new user to db
}

function getUserData(auth) {
    //get user data with authentication
    //return ??
}

$(showLandingPage());