const app = Vue.createApp({
    data() {
      return {
       ft: null,
       inch: null,
       lb: null,
       result: ''
      }
    },
    methods:{
      calculate(ft,inch,lb){
        let height = (ft*12)+inch;
        result = (lb/(height*height))*703;
        if(result < 18.5){
            return "<h2 class='result' style='color: blue'>You are Under Weight</h2>";
        }
        else if(18.5 < result && result <24.9){
            return "<h2 class='result' style='color: green'>You are Normal Weight</h2>";
        }
        else if(result >= 25 && result < 29.9){
            return "<h2 class='result' style='color: orange'>You are Over Weight</h2>";
        }
        else{
            return "<h2 class='result' style='color: red'>You are Obese</h2>";
        }
      }
    }
  });