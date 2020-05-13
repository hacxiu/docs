/**
 * Docsify config
 */
gitalkConfig = {
 clientID: 'b84b30ee7f719ed84b87',
 clientSecret: 'c2158868b3aebc50f8c65a294d20db4b348cdf20',
 repo: 'docs',
 owner: 'hacxiu',
 admin: ['hacxiu'], 
 // facebook-like distraction free mode
 distractionFreeMode: false
},
window.$docsify = {
  name: 'docs',
  nameLink: '/',
  repo: 'hacxiu/docs',
  routerMode: 'hash', // default: 'hash' history
  // relativePath: true,
  executeScript: true,
  // coverpage: false,
  loadNavbar: true,//加载自定义导航栏
  loadSidebar: true,//定制侧边栏
  autoHeader: true,
  subMaxLevel: 2,//自定义侧边栏后默认不会再生成目录
  auto2top: true,//切换页面后是否自动跳转到页面顶部。
  search: {
  	maxAge: 86400000,               // 过期时间，单位毫秒，默认一天
  	paths: 'auto',                   // or 'auto'，匹配文件路径
  	placeholder: '搜索',  // 搜索提示框文字， 支持本地化，例子在下面
  	noData:  '找不到结果!' 
  },

  copyCode: {
      buttonText : '点击复制',
      errorText  : '错误',
      successText: '已复制'
  }, 
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function (html) { 
		if (/githubusercontent\.com/.test(vm.route.file)) {
		  url = vm.route.file
			.replace('raw.githubusercontent.com', 'github.com')
			.replace(/\/master/, '/blob/master')
		} else {
		  url = 'https://github.com/hacxiu/docs/blob/master/docs/' + vm.route.file
		}
		var editHtml = '[:memo: Edit Document](' + url + ')\n'
		 	
		return editHtml
		  + html
		  + '<div class="gitalkbox"></div>'
		  + '\n\n----\n\n'
		  + '<a href="https://docsify.js.org" target="_blank" style="color: inherit; font-weight: normal; text-decoration: none;">Powered by docsify</a>'
      });

      hook.doneEach(function(){
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split('/').join('');
        domObj = Docsify.dom; 
        main = domObj.getNode("#main"); 
        /**
         * render gittalk
         */
        Array.apply(null,document.querySelectorAll("div.gitalk-container")).forEach(function(ele){ele.remove()});
        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".gitalkbox"), divEle);
        gitalk = new Gitalk(Object.assign(gitalkConfig, {id: !label ? "/" : label})) 
        gitalk.render('gitalk-container-' + label)
      });
    }
  ]
}