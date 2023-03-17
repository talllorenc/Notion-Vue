const App = {
    data(){
        return{
            title: 'Notion',
            placeholderString: 'What would you like to do?',
            inputValue: '',
            notes: []
        }
    },

    methods:{
        // inputHolder(event){
        //     this.inputValue = event.target.value // Переменной [inputHolder] мы присваиваем значение которое получаем из [input]
        // },

        addNote(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },

        deleteNote(index){
            this.notes.splice(index, 1)
        }
    }
}

Vue.createApp(App).mount('#app');
