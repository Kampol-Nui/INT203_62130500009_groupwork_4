const app = {
    data() {
        return {
           
            peoples: [{
                    fullname: 'Maria Smantha',
                    job: 'Android Developer',
                    describe: 'I am an android developer working at google Inc at california,USA',
                    like: false,
                    big:false,
                    img:'./images/cat1.jpeg',
                    
                },
                {
                    fullname: 'Simona Disa',
                    job: 'Graphics Designer',
                    describe: 'I am an Graphics Designer working at google Inc at california,USA',
                    like: false,
                    big:false,
                    img:'./images/cat2.jpg',
                    
                },
                {
                    fullname: 'John Smith',
                    job: 'Java Architect',
                    describe: 'I am an Java Architect working at google Inc at california,USA',
                    like: false,
                    big:false,
                    img:'./images/cat3.jpg',
                   
                }
            ],search : ''
            ,searching : false,compute : false,test : '',
           
            
            
        }
    },
    methods: {
        toggleLike(index) {
            this.peoples[index].like = !this.peoples[index].like
        },
        toggleBigImage(index) {
            this.peoples[index].big = !this.peoples[index].big
        },
        toggleLikeSearch(index) {
            this.test[index].like = !this.test[index].like
        },
        toggleBigImageSearch(index) {
            this.test[index].big = !this.test[index].big
        },
        toggleSearch() {
            this.searching = !this.searching
            this.test = ''
        }
        ,
        filteredList(search) {
            if(search){
              this.test =  this.peoples.filter(post => {
                    return post.job.toLowerCase().includes(this.search.toLowerCase())
                  })
            }
          },/*
          transformImage(index) {
            document.getElementsByTagName("img")[index].style.transform = "scale(1.25)"
            document.getElementsByTagName("img")[index].style.borderRadius = "0";
            document.getElementsByTagName("span")[index].style.backgroundColor = "black";
            
            document.getElementsByTagName("span")[index].style.height = "150px";
          },
          bigImage(index){
            var node = document.createElement("LI");
            var span = document.createElement("span");
            var image = document.createElement("img");
            var list = document.getElementsByTagName("li")[index];
          
  list.insertBefore(node, list.firstElementChild).appendChild(span).appendChild(image).setAttribute('src', this.peoples[index].img);
  
          }*/
          
      
        
    },
    computed: {
        countLike() {
            return this.peoples.filter(t => t.like).length
        },
        
    }
}
Vue.createApp(app).mount('#app')