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

## HomePage
`Templates/index.hbs` contains the code for the homepage view.
When the question and answer choices are given and once the submit is clicked `createPoll` action is triggered. 

    <form class="form" {{action "createPoll" model on="submit"}}>
        <fieldset class="form-field">
            <label class="form-label" for="question">Question</label>
            {{input class="form-input" id="question" type="text" value=model.prompt}}
        </fieldset>

        {{#each model.options as |option|}}
        <fieldset class="form-field">
            <label class="form-label">Option</label>
            {{input class="form-input" type="text" value=option.label}}
        </fieldset>
        {{/each}}

        <button class="btn btn--primary btn--form" type="submit">Submit!</button>
    </form>

The `app/routes/index.js` file has the code for action-

    actions: {
        createPoll(poll) {
        this.get('store').savePoll(poll);
        this.transitionTo('polls.poll', poll);
    }
    
The `action` calls the `savePoll` method which is in `services/store.js`.

## Central Data Repository

We generated a new Ember service as `services/store.js` to create a data repository for our application.
All the three model - `poll`, `option` and `vote` are imported to form this central repository.

The predefined polls are declared and defined in an array as two objects. 

The `service` extends the following methods-
1. `createPoll` - Responsible for creating a new poll and also the options provided in the homepage.
2. `createVote` - It takes a parameter as poll and creates a vote object when the vote is casted.
3. `findAllPolls` - It return all the available polls.
4. `findPoll` - It takes a parameter as `id` and return a particular `poll` object with the given `id`.
5. `savePoll` - It takes a parameter poll and pushes the poll in the `polls` array.
6. `saveVote` - It takes a paramter as `vote` and saves the vote with its respective poll.

## Components 

We used a component for calculating percentage for votes that are casted. The file `option-tally.js` has the component code. The `percentage` is the computed property, which divides particular option's votes with total number of votes with that poll.

    export default Ember.Component.extend({
        percentage: Ember.computed('option.voteCount', 'poll.voteCount', function() {
            const pollVoteCount = this.get('poll.voteCount');

            if (pollVoteCount <= 0) {
                return 0;
            } else {
                return this.get('option.voteCount') / this.get('poll.voteCount');
            }
        })
    });

## Models
We used three models for the application namely `option`, `poll` and `vote`.

1. `option`

        export default Ember.Object.extend({
            voteCount: Ember.computed('poll.votes.[].option', function() {
                return this.get('poll.votes').filterBy('option', this).length;
            })
        });

2. `poll`

        export default Ember.Object.extend({
            optionsSorting: ['voteCount:desc'],
            sortedOptions: Ember.computed.sort('options', 'optionsSorting'),
            voteCount: Ember.computed.alias('votes.length')
        });

3. `vote`

        export default Ember.Object.extend({
            toggleOption(option) {
                if (this.get('option') === option) {
                    option = null;
                }
                this.set('option', option);
            }
        });

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

