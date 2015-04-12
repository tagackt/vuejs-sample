vue = new Vue({
  el: "body",
  data: {
    firstName: "shinnosuke",
    lastName: "sato"
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
});

vue2 = new Vue({
    el: '#simple',
    data: {
        message: "Hello Vue.js",
        font: ""
    },
    methods: {
        magnify: function () {
            this.font = "font-size:20px;color:red"
        }
    }
});