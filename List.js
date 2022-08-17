const app = Vue.createApp({
    data(){
        return{
            students : [
                {name:'Mg Mg', age: 22, gender: 'male'},
                {name:'Aung Aung', age: 20, gender: 'male'},
                {name:'Aye Aye', age: 23, gender: 'female'},   
              ],
        }
    },
    methods:{
        detail(index){
            --index;
            alert(`My name is ${this.students[index].name} and I am ${this.students[index].age} year old.`);
        }
    }
})