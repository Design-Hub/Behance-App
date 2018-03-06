<template>
    <div class='bookslist'>

        <select v-on:change="sourceChanged">
            <option >search book</option>
          <option v-for="Program in Programmes">{{ Program.Name }}</option>
        </select>


    <SortingBooks ></SortingBooks>
        <div v-for="book in books">
            <h1>{{book.volumeInfo.title}}</h1>

            <h2>By:{{book.volumeInfo.authors.toString()}}<br></h2>
            <img class='media-object' style='margin:0 auto;margin-bottom:2em;'  v-bind:src="book.volumeInfo.imageLinks.thumbnail">
            <a v-bind:href="book.volumeInfo.infoLink" target="_blank">
                <button>Readme</button>
            </a>
        </div>
        
    </div>
</template>

<script>
import SortingBooks from './SortingBooks'
import { db } from '../../firebase'
export default {
    name: 'books',
    data() {
        return {
            books: [],
            // courses:[],
            course: ''
        }
    },
    components:{
        SortingBooks
    },
    firebase: {
        Programmes: {
            source: db.ref('Campuses/3/Programmes'),
            cancelCallback(err) {
                console.log(err);
            }
        }
    },
    
    methods: {
        updateSource: function(course) {
            if (course) {
                this.$http.get('https://www.googleapis.com/books/v1/volumes?q=' + course)
                    .then(response => {
                        this.books = response.body.items
                        this.courses = this.books
                        // this.title = response.body.items.volumeInfo.title
                    //  console.log(response)
                    //  console.log(this.title)
                     this.$emit('sortByAuthor',this.books)

                    })
            }
        },
        sourceChanged: function(evt) {
            this.course = evt.target.value;
            this.$emit('getTilly');
            // console.log(this.course)
        }
    },
    created: function() {
        this.updateSource(this.course);

    },
  
    watch: {
        course: function(val) {
            this.updateSource(val);
        }
    },
    computed: {
        function(){
        return this.courses
        }
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
