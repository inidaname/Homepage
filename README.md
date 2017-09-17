# Homepage
Hi contributors,

I have set up the project on an expressjs backend. I did this just to have a templating engine available (currently using EJS). If you guys
want another backend solution (different language/framework), I am happy to refactor the code.

If you want to contribute to the project, you will need to install npm and node.
To run the project, just run `node server.js` from the command line, and you should be up and running.

## Running the App

You must have [Node](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads)
installed on your local machine or cloud instance.

**optional:**
*Install [Yarn](https://yarnpkg.com/en/docs/install) if you want to install packages much faster! (Thank you Facebook!).*

To run the app, type the following command in your shell/command line:
```
> git clone https://github.com/Startversity/Homepage

> cd HomePage

> npm install
#or
> yarn install

> npm run dev
#or
> yarn dev
```
Now open up http://localhost:8080 on your browser.

Any changes to the files will auto-refresh the browser and effect the changes, There will be no need to restart your server [Nodemon](https://nodemon.io/) is taking care of that.

## Making a Change in the Git Repo:

To update your changes in the app and pushing it to the remote git repo follow the instructions:
1. first go to the folder where you `git clone`d the app
2. Then open the terminal inside that folder.
3. To update your changes, type `git add .`
4. Commit these changes: `git commit -m "Your Commit Message"`.
5. Then push it to the git remote repo: `git push origin master`

## Update your local instance of the app

To update your app in sync with the changes made by other contributors. In the app directory, simply type `git pull remote origin`.
