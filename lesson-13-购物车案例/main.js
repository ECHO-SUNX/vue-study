const app = new Vue({
  el:'#app',
  data:{
    books:[
      {id:1,name:'计算机科学',price:87.5,count:1},
      {id:2,name:'编程基础',price:50,count:1},
      {id:3,name:'设计模式',price:34,count:1},
      {id:4,name:'Vue实战',price:66,count:1}
    ]
  },
  methods:{
    /*方法显示价格*/
    showPrice:function (price) {

      return '￥'+price.toFixed(2);
    },
    increment:function (index) {
      console.log('increment'+index);
      this.books[index].count++;
    },
    decrement(index) {
      /*点击无效，最好从交互上解决，让按钮不能点击*/
      if (this.books[index].count>0){
        this.books[index].count--;
      }
      console.log('decrement'+index);
    },
    deleteBook:function (index) {
      this.books.splice(index,1);
    }
  },
  computed:{
    totalPrice:function () {
/*      let totalPrice = 0;
      for (let book of this.books){
        totalPrice += book.price * book.count;
      }
      return totalPrice;*/
//高阶函数搞定
      return this.books.reduce((p,b)=>p+b.price*b.count,0);



    }
  },
  filters:{
    /*过滤器显示价格*/
    showPrice:function (price) {
      return '￥'+price.toFixed(2);
    }
  }
})

