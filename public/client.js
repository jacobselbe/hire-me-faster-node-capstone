'use strict';

const dateTime = luxon.DateTime;
const now = dateTime.local();

const today = now //.something
const day = now //.something
const week = now //.something
const month = now //.something
const year = now //.something

function showDate() {
    $('#calendarBox').html(now.toLocaleString());
}

// function showLandingPage() {
//     $('#signupUsername').val('');
//     $('#signupPassword').val('');
//     $('#signupPasswordConfirm').val('');
//     $('#loginUsername').val('');
//     $('#loginPassword').val('');
//     $('#landingPage').removeClass('hidden');
//     $('#dashboardPage').addClass('hidden');
//     watchFormSwitch();
//     watchSignupForm();
//     watchLoginForm();
// }

// function watchFormSwitch() {
//     $('#loginSwitch').click(e => {
//         $('#signupForm').addClass('hidden');
//         $('#loginForm').removeClass('hidden');
//         $('#signupSwitch').removeClass('switch-selected');
//         $('#loginSwitch').addClass('switch-selected');
//     });
//     $('#signupSwitch').click(e => {
//         $('#loginForm').addClass('hidden');
//         $('#signupForm').removeClass('hidden');
//         $('#loginSwitch').removeClass('switch-selected');
//         $('#signupSwitch').addClass('switch-selected');
//     });
// }

// function watchSignupForm() {
//     $('#signupForm').submit(e => {
//         e.preventDefault();
//         const username = $('#signupUsername').val();
//         const password = $('#signupPassword').val();
//         const passwordConfirm = $('#signupPasswordConfirm').val();
//         password !== passwordConfirm ?
//             alert('Passwords do not match') :
//             (postNewUser(username, password), showDashPage());
//     });
// }

// function watchLoginForm() {
//     $('#loginForm').submit(e => {
//         e.preventDefault();
//         const username = $('#signupUsername').val();
//         const password = $('#signupPassword').val();
//         //make api call to check if user exist
//             //if not display error
//             //if user exists...
//             showDashPage();
//     });
// }


// //need authentication
// function showDashPage() {
//     $('#landingPage').addClass('hidden');
//     $('#dashboardPage').removeClass('hidden');
//     $('#tasks').removeClass('active-tab');
//     $('#email').removeClass('active-tab');
//     $('#stats').removeClass('active-tab');
//     $('#dashboard').addClass('active-tab');
//     $('#taskList').addClass('hidden');
//     $('#taskBox').addClass('hidden');
//     $('#emailBox').addClass('hidden');
//     $('#statskBox').addClass('hidden');
//     $('#dashboardBox').removeClass('hidden');
//     // getUserData(auth);
//         //.then display specifically to dashboard??
//     watchTabSwitch();
// }

// function watchTabSwitch() {
//     const tabs = [$('#dashboard'), $('#tasks'), $('#email'), $('#stats')];
//     const boxes = [$('#taskList'), $('#dashboardBox'), $('#taskBox'), $('#emailBox'), $('#statsBox')];

//     $('#dashboard').click(e => {
//         tabs.map(tab => tab.removeClass('active-tab'));
//         boxes.map(box => box.addClass('hidden'));
//         $('#dashboard').addClass('active-tab');    
//         $('#dashboardBox').removeClass('hidden');
//     });

//     $('#tasks').click(e => {
//         tabs.map(tab => tab.removeClass('active-tab'));
//         boxes.map(box => box.addClass('hidden'));
//         $('#tasks').addClass('active-tab');
//         $('#taskBox').removeClass('hidden');
//         $('#taskList').removeClass('hidden');
//     });

//     $('#email').click(e => {
//         tabs.map(tab => tab.removeClass('active-tab'));
//         boxes.map(box => box.addClass('hidden'));
//         $('#email').addClass('active-tab');
//         $('#emailBox').removeClass('hidden');
//     });

//     $('#stats').click(e => {
//         tabs.map(tab => tab.removeClass('active-tab'));
//         boxes.map(box => box.addClass('hidden'));
//         $('#stats').addClass('active-tab');
//         $('#statsBox').removeClass('hidden');
//     });
// }

// function postNewUser(username, password) {
//     //post new user to db
// }

// function getUserData() {
//     //get user data with authentication
//     //return ??
// }

// $(showLandingPage());

$(showDate());