// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

/** 监听copy事件 */
// 复制提醒
document.addEventListener("copy",function(e){
    new Vue({
      data:function(){
        this.$notify({
          title:"Copy Sucess!",
          message: false,
          position: 'bottom-right',
          offset: 20,
          showClose: false,
          type:"success"
        });
        return{visible:false}
      }
    })
  })


function share(){
    new ClipboardJS(".share", { text: function () { return 'Title:' + document.title + '\nLink:' + window.location.origin + window.location.pathname } });
    btf.snackbarShow('You are free to repost this page anywhere!', false, 3000)
}