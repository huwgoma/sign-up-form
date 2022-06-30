# Dummy Sign-Up Form

This is a dummy sign-up form that is part of The Odin Project's Intermediate HTML/CSS Course - a project to reinforce concepts of form structure, form styling, and form validation. 

The goal of the project is to replicate [this form](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/sign-up-form.png) visually, and to also implement some sort of form validation.

With regards to form validation:
* I used JavaScript to toggle the 'required' class on First Name, Last Name, and Email when the blur (unfocus) event occurs; I then used a CSS selector to style elements with the .required class and :invalid pseudo-class.
  * This allows us to delay the styling of invalid form inputs until the user has had a chance to focus (and then unfocus) the input.
* For the Password input, I used HTML5's built-in pattern attribute to validate against a regular expression that applies the following filters:
  * At least 8 characters
  * At least 1 lowercase character
  * At least 1 uppercase character
  * At least 1 digit
* I also used JavaScript to implement a password-matching validation: when either the password or password confirmation field is updated, a function is run to check whether the password confirmation field's value matches that of the password field's value; if it does, the password confirmation field is set to :valid; and if it does not, the password confirmation field is set to :invalid.
