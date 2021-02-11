# notebook-app-template

Template for creating Jupyter Notebook application. 

This application relies on [iypcallback](https://github.com/binh-vu/ipycallback) to communicate between javascript (client) and jupyter (server). If you have trouble installing the package, checkout the [Dockerfile](https://github.com/binh-vu/labext/blob/master/Dockerfile) here.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To make web application works easier with Jupyter notebook, it provides basic functionalities:
1. Provide an api to send and receive message from Jupyter notebook (implemented in `src/library`).
2. Attach your react application to the shadow dom so that your own CSS won't be affected by the existing CSS in Jupyter (modified `src/index.tsx`).
3. Load your CSS to a string and compile all code into one single JS file so that you can create the app easily in python (implemented in `scripts`, `config-overrides.js`, `typings.d.ts`).

## Demo

Open `demo.ipynb` to see the demo.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build-bundle`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minifie to `build/static/js/main.js`.\
Your app is ready to be deployed!
