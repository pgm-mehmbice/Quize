import { JSON_PATH } from './catagories.js';


const API_KEY = "JvOM1m9vfZTzdOgG5nd5PRXP5JNp9ipvYehq4wuO";

const app = {
    init() {
      this.cacheElements();
      this.fetchQuizAPI();
      this.registerListeners();
    },
    cacheElements() {
      this.$catagory = document.querySelector("#catagory");
      this.$vragen = document.querySelector("#vragen");
      this.$antwoorden = document.querySelector("#antwoorden");
    //   this.$ = document.querySelector("");
    },

    
    async fetchQuizAPI() {
      await fetch(`${QUIZZAPI}?apiKey=${QUIZZ_TOKEN}&catagory=${this.$quizCatagory.value}&difficulty=${$quizDifficulty.value}&limit=${this.quizAmount.value}&tags=${this.quizTags.value}`)
      .than(response => response.json())
      .then(json => {
        tempr += ``

      })
    }
};
app.init();

