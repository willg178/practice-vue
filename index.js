/* global Vue */

var App = {
    data: function () {
      return {
        message: "Hello from JavaScript!",
        name: "Will",
        show: "false",
      };
    },
    methods: {
        changeMessage: function () {
          this.message = "Whoa...";
        },
      },
  };
  
  
  Vue.createApp(App).mount("#app");