Vue.component("book", {
  props: ["title", "emoji", "author"],
  template: `<div class="book"><h1 class="title">{{title}}</h1><p class="emoji">{{emoji}}</p><p class="author">By {{author}}</p></div>`,
});

var app = new Vue({
  el: "#app",
  data: {
    seen: true,
  },
  methods: {
    toggleBook: function () {
      this.seen = !this.seen;
    },
  },
});
