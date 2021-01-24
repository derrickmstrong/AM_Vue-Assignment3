const app = Vue.createApp({

  data() {
    return {
      counter: 0,
      results: '',
    }
  },

  methods: {
    add(num) {
     return this.counter = this.counter + num;
    }
  },

  computed: {
    result() {
      return this.counter === 0 ? 'Start Adding' : this.counter < 37 ? this.results = 'Not there yet!' : this.counter > 37 ? this.results = 'Too much' : this.counter === 37 ? this.results = `Congrats! You got it (${this.counter})` : null;
    }
  },

  watch: {
    result(value) {
      if (value === `Congrats! You got it (${this.counter})` || value === 'Too much') {
        const that = this;
        setTimeout(function (){
          that.counter = 0;
        }, 5000)
      }
    }
  },

}).mount('#assignment');