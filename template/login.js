//***REMOVED***BUTTON***REMOVED***SWITCHING***REMOVED***
const***REMOVED***signUpButton***REMOVED***=***REMOVED***document.getElementById('signUp');
const***REMOVED***signInButton***REMOVED***=***REMOVED***document.getElementById('signIn');
const***REMOVED***container***REMOVED***=***REMOVED***document.getElementById('container');

signUpButton.addEventListener('click',***REMOVED***()***REMOVED***=>***REMOVED***{
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click',***REMOVED***()***REMOVED***=>***REMOVED***{
	container.classList.remove("right-panel-active");
});