# CODER_QUIZ_MADNESS

## Weekly Challenge 04

### Description

This application is a timed quiz that starts when a button is clicked:

*  The quiz is a total of five easy questions.
*  The quiz information is stored as an array of objects.
*  Via js, html is dynamically changed to reflect user input.
*  When an incorrect answer is selected, 10 seconds is taken away from the timer.
*  If the timer reaches 0, a game over window alert occurs.
*  If the user makes it to the end with time on the clock, the time is saved as their score, and a prompt will appear for them to enter their name/initials.
*  Name and score will be saved and retrieved to be appended to an organized list on the upper-left portion of the page.

### Issues

* The layout/positioning and styling is lackluster, but it was my last priority, could have used better planning for the overall design.
* JS code needs to be cleaned up a bit.
* There are few edge cases that I actually controlled for with user input, one example the type of input accepted for the window asking for user's initials.
* The persistent data is just the previous session's score and initials, in addition to the current session's, there isn't a list of numerous scores that is populated. 
* After "winning" you need to refresh the page and not press begin quiz button again, it acts wonky.

### Screenshot

![Alt text](/assets/images/screenshot.jpg?raw=true "Screenshot")

### Link
https://jflo919.github.io/coder_quiz_madness/
