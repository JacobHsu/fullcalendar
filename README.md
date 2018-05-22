# fullcalendar

https://fullcalendar.io/  

[download](https://fullcalendar.io/download)  
[github](https://github.com/fullcalendar/fullcalendar)  

FullCalendar相依於jQuery與Moment.js，記得要先載入 

`$ npm init`    
`$ npm install fullcalendar`  

`npm install gulp gulp-webserver -save-dev` 

`$git subtree push --prefix dist origin gh-pages`  

### bower & gulp 

用Bower自動下載jQuery, Bootstrap等Libery，再Gulp做打包
bower 用來安裝包，處理依賴    
gulp 用來管理、合併、minify、uglify 文件   

`npm install -g bower`  
`bower init` bower.json  
`bower install <package>`  bower_components 裡面放的 是下載下來的外掛

`npm install --save-dev main-bower-files`  