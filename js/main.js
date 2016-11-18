var TodoComponent = Vue.extend({
    data: function() {
        return {
            inEditMode: false
        }
    },
    props: ['todo', 'index'],
    template: `
    			<div>
    				<span v-on:click="clicked" v-show="!inEditMode">{{ todo.title }}</span>
    				<input v-model="todo.title" v-on:keyup.enter="saved" v-show="inEditMode" /> 
    				<span>&nbsp;<button type="button" v-on:click="removeTodo()"> X</button></span> 
    			</div>`,
    methods: {
        clicked: function() {
            this.inEditMode = true;
        },
        saved: function() {
            this.inEditMode = false;
        },
        removeTodo: function() {
            //console.log(this.index);
            todoList.todos.splice(this.index, 1);
        }
    }
});

Vue.component('todo-component', TodoComponent);

var todoList = new Vue({
    el: '#app',
    data: {
        message: 'Todo app',
        todoText: '',
        todos: [
            { title: 'Almost before we knew it, we had left the ground.' },
            { title: 'A shining crescent far beneath the flying vessel.' },
            { title: 'I watched the storm, so beautiful yet terrific.' }

        ],
        showTodos: true

    },
    methods: {
        createTodo: function() {
            var todoText = this.todoText.trim();
            if (todoText) {
                this.todos.push({ title: todoText });
                this.todoText = '';
            }
        },
        clearTodo: function() {
            this.todoText = '';

        }
    }
})
