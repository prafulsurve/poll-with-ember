# Quiz

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

"# poll-with-ember" 
# Technical Details

# User Manual
##### Step1:
*	Launch the web page. The webpage will look like the screen shot below.
*	This page has the following functionalities
*	The Home tab is for the shown main page.
*	Users can create new poll by providing a question and respective poll answers.
*	Once you click the SUBMIT button it takes you to Step2.

 ![image](https://cloud.githubusercontent.com/assets/24978864/26030696/ed239f02-380e-11e7-80f7-f20ec58cc903.png)
 
 ![image](https://cloud.githubusercontent.com/assets/24978864/26030701/021e6efa-380f-11e7-9cde-0fe3c05fe6bf.png)
 
##### Step2:
*	Once you click on SUBMIT button the following webpage will be displayed.
*	It contains the question and the respective answer choices.
*	We have provided three button for answer choices which acts like a toggle button to cast the vote.
*	Once you click the Vote button, the vote count is incremented and you get routed to Step3.
*	Once you click the Result button it takes you to Step3.

![image](https://cloud.githubusercontent.com/assets/24978864/26030710/390f346c-380f-11e7-9b97-ba580318580d.png)
 
##### Step3:
*	After selecting the Vote or Result button, below page will be displayed which displays the total number of votes. The votes are displayed in descending order.
*	At any moment if you want to go to Home page, you can click on the title which will route you to Home page.
*	The created polls will be displayed in the footer of the webpage and it will be stored only in the runtime.
*	Along with the created polls we also have two pre-defined polls which are displayed in the footer. Users can also cast their votes for those polls.

![image](https://cloud.githubusercontent.com/assets/24978864/26030715/4f88787a-380f-11e7-8663-057739e5d702.png)

