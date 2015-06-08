Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt('Enter message here:');
      this.set('confirmationNumber', Math.round(Math.random() * 10000000));
      this.set('messageSent', true);
    }
  }
});
