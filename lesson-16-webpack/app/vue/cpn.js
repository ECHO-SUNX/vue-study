export default {
  template: `
  <div>
        <h2>我是标题</h2>
        <p>内容一</p>
        <p>{{message}}</p>
   </div>
  `,
  data:function () {
    return {
      message:"hello  vue"
    }
  }
}
