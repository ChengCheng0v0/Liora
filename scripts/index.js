console.log("%c[I]%c " + `Liora 主题的基本脚本 index.js 加载成功!`, "background-color: #00896c;", "");

var flag = autoInitObject();
var eventListener = autoInitObject();

// 获取 DOM 元素
var element = {
    pageHead: document.querySelector(".page-head"),
};

// 页首点击展开效果
flag.pageHead.click = true;
eventListener.pageHead.click = () => {
    if (flag.pageHead.click) {
        element.pageHead.classList.add("expand");
    } else {
        element.pageHead.classList.remove("expand");
    }

    flag.pageHead.click = !flag.pageHead.click;
}
element.pageHead.addEventListener("click", eventListener.pageHead.click);
