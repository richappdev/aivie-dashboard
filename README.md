# AIVIE Dashboard

AIVIE 管理後台

## 部署至Firebase

### 專案建置

```bash
npm install   # 安裝套件
npm run build # 建置專案
```

![專案建置成功訊息](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e4f5872-e051-4552-ae63-0b5664fc9bd3/%E6%88%AA%E5%9C%96_2022-06-23_10.40.02.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220623T024927Z&X-Amz-Expires=86400&X-Amz-Signature=566dbd333be6fab255b1f837d2f1acc60575d24c29046e52bd43e40dc5b7b230&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E6%2588%25AA%25E5%259C%2596%25202022-06-23%252010.40.02.png%22&x-id=GetObject)

專案建置成功訊息

### Firebase CLI部署

1. Firebase CLI登入

```bash
firebase login
```

![登入成功](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/816d3281-a93d-40cf-9361-e17adbc29c5f/%E6%88%AA%E5%9C%96_2022-06-23_10.33.15.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220623T024957Z&X-Amz-Expires=86400&X-Amz-Signature=09033b9b83a3b0694db0834294293643fe444cc61c0665ac7e25a1db9e72005d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E6%2588%25AA%25E5%259C%2596%25202022-06-23%252010.33.15.png%22&x-id=GetObject)

登入成功

2. 部署至Firebase Hosting

```bash
firebase deploy --only hosting
```

如果顯示帳號沒權限的問題，請聯絡管理員加入

![部署成功訊息](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/893744cd-28d0-4312-b901-c509aba78981/%E6%88%AA%E5%9C%96_2022-06-23_10.44.39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220623T025012Z&X-Amz-Expires=86400&X-Amz-Signature=7d63fce327a3c79a56d9adabc4be3d1705c8ee70609578b4cca7b41f189b84c6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E6%2588%25AA%25E5%259C%2596%25202022-06-23%252010.44.39.png%22&x-id=GetObject)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
