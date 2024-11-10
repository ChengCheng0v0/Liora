## Liora Theme

一款漂亮的 [ACG-Home](https://github.com/ChengCheng0v0/ACG-Home) 主题，它包含两种优雅的配色方案 —— Sun 和 Moon。

![主题概览](https://s2.loli.net/2024/11/10/nHRUIDs6pjLfkBz.png)

尽管此项目不是 [ACG-Home](https://github.com/ChengCheng0v0/ACG-Home) 的默认主题，但它是 [ACG-Home](https://github.com/ChengCheng0v0/ACG-Home) 的官方主题，且基本上是与其同步开发的。它们之间是相互影响的，各自兼容对方的最新特性。

## 安装

### 获取源码

对于 Linux 或 MacOS 系统，使用以下命令：

```shell
git clone https://github.com/ChengCheng0v0/Liora.git {ACG-Home_Path}/assets/themes/liora
```

- 注意，请将 `{ACG-Home_Path}` 替换为实际的 ACG-Home 根目录。

对于 Windows 系统，尽管可以使用类似的命令 clone 仓库到指定路径，但建议手动从 [Releases](https://github.com/ChengCheng0v0/Liora/releases) 下载最新稳定版的 `Source code (zip)`，并将其手动放入 ACG-Home 根目录下的 assets\themes\liora 文件夹中。

> [!WARNING]  
> 请始终确保主题源码所在的目录名为 `liora`，且此目录位于 `themes` 目录下。否则 ACG-Home 将无法正确引用主题文件。

### 配置 ACG-Home

在 ACG-Home 根目录中找到 `config.json` 文件并编辑其内容，将 `theme` 项的值设置为：

```json
"theme": "liora",
"displayName": "Liora",
"colors": {
    "autoSwitch": {
        "displayName": "Auto",
        "light": "sun",
        "dark": "moon",
        "icon": {
            "icon": "fa-solid fa-circle-half-stroke",
            "color": "#808080",
            "background": "linear-gradient(45deg, #eeeeee 50%, #1c1c1c 50%)"
        }
    },
    "enable": ["sun", "!autoSwitch", "moon"],
    "default": "!autoSwitch"
}
```

修改后的的 ACG-Home 配置文件结构应该长这样：

```json
{
    "title": "成成0v0 の 个人网站",
    "theme": {
        "theme": "liora",
        "displayName": "Liora",
        "colors": {
            "autoSwitch": {
                "displayName": "Auto",
                "light": "sun",
                "dark": "moon",
                "icon": {
                    "icon": "fa-solid fa-circle-half-stroke",
                    "color": "#808080",
                    "background": "linear-gradient(45deg, #eeeeee 50%, #1c1c1c 50%)"
                }
            },
            "enable": ["sun", "!autoSwitch", "moon"],
            "default": "!autoSwitch"
        }
    },
    "masterInfo": {...},
    "pageHead": {...},
    "icp": {...}
}
```

### 完成

再次访问 ACG-Home，应该就可以看到配置生效了。
