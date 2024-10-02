// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("Xavier\'s Blog") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('Xavier\'s Blog\nTitle: ' + subTitle + '\nUrl:' + url + '\n');
        new Vue({
            data: function () {
                this.$notify({
                    title: "",
                    message: "",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }
    // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功🍬",
                    message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})

// 防抖
function share() {
    debounce(share_, 300);
}