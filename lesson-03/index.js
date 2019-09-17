var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

var example3 = new Vue({
    el:'#example-3',
    data:{
        message:''
    }

})
new Vue({
    el: '#example-4',
    data: {
        checkedNames: []
    }
})

new Vue({
    el: '#example-5',
    data: {
        picked: 'Two'
    }
})

// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#components-demo' })
