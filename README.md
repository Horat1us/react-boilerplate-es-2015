# React API Boilerplate
## ** THIS PACKAGE IS DEPRECATED AND INCLUDES A LOT OF MISTAKES. YOU CAN USE [TYPESCRIPT BOILERPLATE](https://github.com/Horat1us/typescript-react-boilerplate) INSTEAD **
*Created by [Alexander Letnikow](https://github.com/)* 

This boilerplate created for front-end React-based applications with any RESTful API.  
  
## Install
1. Clone repository  
`git clone https://github.com/Horat1us/react-boilerplate-es-2015.git`
2. Run command to delete boilerplate   
`npm run boilerplate`
3. Add your repository  
`git remote add $YOUR_REPOSITORY_URL`
4. Change package name in [package.json](./package.json)
5. Enjoy using boilerplate

  
## Commands
1. Build production bundle  
`npm run build`
2. Run develop server  
`npm run dev`
3. Delete boilerplate links  
`npm run boilerplate`
4. Copy `env.example.js` to `env.js`  
`npm run init-env`

## Configuration
For production file will be used common file `config/config.prod.js`.  
For develop server `config/config.local.js` will be used instead.  

You can also use `env.js` file to configure certain environment.
Just type `npm run init-env` and write JS object to file.

## Deployment
For deployment you can clone your repository to server and run `npm run build` command.  
To publish it you should pass `/web` folder to Apache2 or nginx configuration.

*Note: All file in `/web` directory included to .gitignore by default (excluding index.html). 
If you want to put some statics like favicon.ico you must add it to .gitignore file*  

## Styles
This boilerplate also pre-configured to use **SASS** with *Compass-mixins* and *Breakpoint-SASS*.
You just need write your styles and imports to [styles/main.scss](./styles/main.scss)  

Styles bundle will be build into */web/styles.js*

*Note: to include images to your components or styles you **should** use /images folder*

## Using API
This boilerplate configured to obtain data throw RESTful API.  
I prefer to use [Axios](https://github.com/mzabriskie/axios) package to deal with AJAX.


### Authorization
You may implement authorization using access tokens.  
Application will use token stored in localStorage with key `accessToken` (you may also specify in in config files).

Axios will be configured to send **Api-Token** key for every query.   
*You can change it in [react/components/bootstrap.js](react/components/bootstrap.js) file*



## License
[MIT](LICENSE)
