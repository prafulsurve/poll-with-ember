import Ember from 'ember';
import Poll from 'quiz/models/poll';
import Option from 'quiz/models/option';
import Vote from 'quiz/models/vote';


const polls = [];

let poll = Poll.create({
  id: '1',
  options: [],
  prompt: 'Which JavaScript framework would you choose to learn among the following?',
  votes: []
});
poll.get('options').pushObjects([
  Option.create({id: '1', label: 'Node', poll: poll}),
  Option.create({id: '2', label: 'Ember', poll: poll}),
  Option.create({id: '3', label: 'Angular', poll: poll})
]);
polls.pushObject(poll);

poll = Poll.create({
  id: '2',
  options: [],
  prompt: 'Which phone do you like among the following?',
  votes: []
});
poll.get('options').pushObjects([
  Option.create({id: '4', label: 'Samsung Galaxy S8', poll: poll}),
  Option.create({id: '5', label: 'Iphone 7', poll: poll}),
  Option.create({id: '6', label: 'Lg G6', poll: poll})
]);
polls.pushObject(poll);



export default Ember.Service.extend({
  createPoll() {
    const poll = Poll.create({
      options: [],
      votes: []
    });

    poll.get('options').pushObjects([
      Option.create({poll: poll}),
      Option.create({poll: poll}),
      Option.create({poll: poll})
    ]);

    return poll;
  },

  createVote(poll) {
    return Vote.create({
      poll: poll
    });
  },

  findAllPolls() {
    return polls;
  },

  findPoll(id) {
    return this.findAllPolls().findBy('id', id);
  },

  savePoll(poll) {
    polls.pushObject(poll);
    poll.set('id', polls.length);
  },

  saveVote(vote) {
    const poll = vote.get('poll');
    poll.get('votes').pushObject(vote);
  }
});
