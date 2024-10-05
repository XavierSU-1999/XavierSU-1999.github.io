// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

/** 监听copy事件 */
document.addEventListener("copy", function(e){
    //复制的内容
    btf.snackbarShow('Copy Sucess! You are free to repost this article!', false, 3000)
  })


function share(){
    new ClipboardJS(".share", { text: function () { return 'Title:' + document.title + '\nLink:' + window.location.origin + window.location.pathname } });
    btf.snackbarShow('Copy Sucess! You are free to repost this article!', false, 3000)
}