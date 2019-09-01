# Email-Login
簡易Email登入功能，根據userList.json內容資料，與輸入的Email帳號密碼做比對，成功會顯示welcome firstName，失敗則show出訊息

# 功能
+ Email與Password輸入資料
+ 與userList.json比對結果正確與否

## 相關安裝
1. 開啟terminal(終端機)，作業目錄下執行：
   ```
   git clone https://github.com/jofu1123/Email-Login.git
   ```
2. 移動至目錄email_login
   ```
   cd email_login
   ```
3. 使用npm安裝相關套件
   ```
   npm install
   ```
4. 輸入指令啟動本機伺服器
   ```
   nodemon app.js
   ```
   出現Express is listening on localhost:3000即成功，並移置 http://localhost:3000 顯示結果

# 預覽畫面
![index](https://github.com/jofu1123/Email-Login/blob/master/photo/Email_Login_index.jpg)
# 使用工具
 + [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) -開發code環境
 + [Express](https://www.npmjs.com/package/express) -應用程式架構
 + [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) -使用模板引擎
 + [Body-Parser](https://www.npmjs.com/package/body-parser) -處理URLencoded格式的請求
 + [Bootstrap] (https://getbootstrap.com) -美化版面
