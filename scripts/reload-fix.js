console.log("%c[I]%c " + `Liora 主题的基本脚本 reload-fix.js 加载成功!`, "background-color: #00896c;", "");

if (!reloadFlag) {
    console.warn("%c[W]%c " + `干净的运行环境: reloadFlag 标记的值为 false 或未定义，这似乎是第一次加载?`, "background-color: #e98b2a;", "");

    // 在初次加载时定义需要移除的事件监听器列表
    window.reloadFix = {
        eventListeners: [{ elementPath: "element.pageHead", event: "click", handlerPath: "eventListener.pageHead.click" }],
    };
} else {
    // 移除事件监听器
    window.reloadFix.eventListeners.forEach(({ elementPath, event, handlerPath }) => {
        // 根据路径字符串安全地获取对象引用的辅助函数
        function getObjectByPath(path) {
            return path.split(".").reduce((obj, key) => obj?.[key], window);
        }

        const element = getObjectByPath(elementPath); // 动态获取 element 的引用
        const eventHandler = getObjectByPath(handlerPath); // 动态获取 handler 的引用

        if (!element) {
            console.warn("%c[W]%c " + `在试图移除元素 ${elementPath} 的事件监听器 \`${event}, ${eventHandler}\` 时发现元素对象 ${elementPath} 为空或未定义，将跳过对此(可能不存在的)监听器的移除`, "background-color: #e98b2a;", "");
            return;
        }
        if (!eventHandler) {
            console.warn("%c[W]%c " + `在试图移除元素 ${elementPath} 的事件监听器 \`${event}, ${eventHandler}\` 时发现 Handler 对象 ${handlerPath} 为空或未定义，将跳过对此(可能不存在的)监听器的移除`, "background-color: #e98b2a;", "");
            return;
        }
        element.removeEventListener(event, eventHandler);
        console.log("%c[I]%c " + `已移除元素 ${elementPath} 的事件监听器 \`${event}, ${eventHandler}\``, "background-color: #00896c;", "");
    });
}

// 留下标记
var reloadFlag = true;
console.log("%c[I]%c " + `reloadFlag = true`, "background-color: #00896c;", "");
