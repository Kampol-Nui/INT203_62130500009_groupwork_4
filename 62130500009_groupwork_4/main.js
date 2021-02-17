const app = {
    data() {
        return {
            peoples: [{
                    fullname: 'Maria Smantha',
                    job: 'Android Developer',
                    describe: 'I am an android developer working at google Inc at california,USA',
                    like: false,
                    img:'./images/cat1.jpeg',
                    
                },
                {
                    fullname: 'Simona Disa',
                    job: 'Graphics Designer',
                    describe: 'I am an Graphics Designer working at google Inc at california,USA',
                    like: false,
                    img:'./images/cat2.jpg',
                    
                },
                {
                    fullname: 'John Smith',
                    job: 'Java Architect',
                    describe: 'I am an Java Architect working at google Inc at california,USA',
                    like: false,
                    img:'./images/cat3.jpg',
                   
                }
            ],searching : false
            
            
        }
    },
    methods: {
        toggleLike(index) {
            this.peoples[index].like = !this.peoples[index].like
        },
        toggleSearch() {
            this.searching = !this.searching
        }
    },
    computed: {
        countLike() {
            return this.peoples.filter(t => t.like).length
        }
    }
}
Vue.createApp(app).mount('#app')