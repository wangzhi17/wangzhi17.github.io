# 搭建React Native开发环境（iOS）

## 安装依赖

必须安装的依赖有：Node、Watchman、Xcode 和 CocoaPods。

虽然你可以使用`任何编辑器`来开发应用（编写 js 代码），但你仍然必须安装 Xcode 来获得编译 iOS 应用所需的工具和环境。

### Node, Watchman

我们推荐使用[Homebrew](http://brew.sh/)来安装 Node 和 Watchman。在命令行中执行下列命令安装（如安装较慢可以尝试[阿里云的镜像源](https://developer.aliyun.com/mirror/homebrew) 。

#### 安装Homebrew

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

**brew install node** 

**brew install watchman**

如果你已经安装了 Node，请检查其版本是否在 v12 以上。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。

\# 使用nrm工具切换淘宝源 

**npx nrm use taobao**

如果之后需要切换回官方源可使用 

**npx nrm use npm**

[Watchman](https://facebook.github.io/watchman)则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。

### Yarn

[Yarn](http://yarnpkg.com/)是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。

**npm install -g yarn**

安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用`yarn`代替`npm install`命令，用`yarn add 某第三方库名`代替`npm install 某第三方库名`。

### Xcode

React Native 目前需要[Xcode](https://developer.apple.com/xcode/downloads/) 10 或更高版本。你可以通过 App Store 或是到[Apple 开发者官网](https://developer.apple.com/xcode/downloads/)上下载。这一步骤会同时安装 Xcode IDE、Xcode 的命令行工具和 iOS 模拟器

#### Xcode 的命令行工具

启动 Xcode，并在`Xcode | Preferences | Locations`菜单中检查一下是否装有某个版本的`Command Line Tools`。Xcode 的命令行工具中包含一些必须的工具，比如`git`等。

#### CocoaPods

[CocoaPods](https://cocoapods.org/)是用 Ruby 编写的包管理器。从 0.60 版本开始 react native 的 iOS 版本需要使用 CocoaPods 来管理依赖。你可以使用下面的命令来安装 cocoapods。

**sudo gem install cocoapods**

或者可以使用 brew 来安装

**brew install cocoapods**