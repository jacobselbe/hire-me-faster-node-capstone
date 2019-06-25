'use strict';

/*
Job Leads
    view scrollable list of all completed job applications
    displays company name and date logged
    when clicked shows detail
        must display company name, job details, and notes
        must give user ability to edit notes
        must display date logged
        must display follow ups logged with that job
*/

/* 
Calendar
    displays number of tasks completed each day
    when clicked shows detail
        displays job leads completed that day in same display/stlye as above
        with the ability to view them in detail in same display/stlye as above
*/

const dateTime = luxon.DateTime;
const now = dateTime.local();

const today = now //.something
const day = now //.something
const week = now //.something
const month = now //.something
const year = now //.something

function showDate() {
    
}

// get after task submit to renew task overview

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

function watchSignupForm() {
    $('#signupForm').submit(e => {
        e.preventDefault();
        const username = $('#signupUsername').val();
        const password = $('#signupPassword').val();
        const passwordConfirm = $('#signupPasswordConfirm').val();
        password !== passwordConfirm ?
            alert('Passwords do not match') :
            (postNewUser(username, password), showDashPage());
    });
}

function watchLoginForm() {
    $('#loginForm').submit(e => {
        e.preventDefault();
        const username = $('#signupUsername').val();
        const password = $('#signupPassword').val();
        //make api call to check if user exist
            //if not display error
            //if user exists...
            showDashPage();
    });
}


//need authentication
function showDashPage() {
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
    // getUserData(auth);
        //.then display specifically to dashboard??
    watchTabSwitch();
}

function watchTabSwitch() {
    const tabs = [$('#dashboard'), $('#tasks'), $('#email'), $('#stats')];
    const boxes = [$('#taskList'), $('#dashboardBox'), $('#taskBox'), $('#emailBox'), $('#statsBox')];

    $('#dashboard').click(e => {
        tabs.map(tab => tab.removeClass('active-tab'));
        boxes.map(box => box.addClass('hidden'));
        $('#dashboard').addClass('active-tab');    
        $('#dashboardBox').removeClass('hidden');
    });

    $('#tasks').click(e => {
        tabs.map(tab => tab.removeClass('active-tab'));
        boxes.map(box => box.addClass('hidden'));
        $('#tasks').addClass('active-tab');
        $('#taskBox').removeClass('hidden');
        $('#taskList').removeClass('hidden');
    });

    $('#email').click(e => {
        tabs.map(tab => tab.removeClass('active-tab'));
        boxes.map(box => box.addClass('hidden'));
        $('#email').addClass('active-tab');
        $('#emailBox').removeClass('hidden');
    });

    $('#stats').click(e => {
        tabs.map(tab => tab.removeClass('active-tab'));
        boxes.map(box => box.addClass('hidden'));
        $('#stats').addClass('active-tab');
        $('#statsBox').removeClass('hidden');
    });
}

function loginUser(username, password) {
    const loginUserObject = {
        username: username,
        password: password
    };
    $.ajax({
        type: 'POST',
        url: '/users/login',
        dataType: 'json',
        data: JSON.stringify(loginUserObject),
        contentType: 'application/json'
    })
        .done(function (result) {
            // $('.js-signin-success').html('Thanks for signing up! Please sign in.');
            // $('.js-signin-success').addClass('change-status-success');
            // showLogInScreen();
            console.log(result);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

}

function postNewUser(username, password) {
    const newUserObject = {
        username: username,
        password: password
    };
    console.log(newUserObject);
    

    // !!! look into ajax call problem (need to npm install ajax?) and pepper in console logs everywhere !!!


    $.ajax({
        type: 'POST',
        url: '/users/create',
        dataType: 'json',
        data: JSON.stringify(newUserObject),
        contentType: 'application/json'
    })
        .done(function (result) {
            // $('.js-signin-success').html('Thanks for signing up! Please sign in.');
            // $('.js-signin-success').addClass('change-status-success');
            // showLogInScreen();
            console.log(result);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });

}

function getUserData() {
    //get user data with authentication
    //return ??
}

$(showLandingPage());

// $(showDate());