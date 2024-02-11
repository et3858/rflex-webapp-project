# rflex-webapp-project

This is a webapp for the tech assesment by rflex. It uses Vite with React and TypeScript.


## Steps

### Install NodeJS and npm

- Having NodeJS v20.11 and above installed in your computer. You can get NodeJS [in this link](https://nodejs.org/en/download)
- Having npm v10.x and above installed in your computer.
- Having a terminal.
- Having the API so that the app can consume its resources: https://github.com/et3858/rflex-api-project.

You can get the installation guide on Windows and Mac [in this link](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)


### Download the project

In this repository, go to "Code" button, then click on "Download ZIP" link in "Local" tab, or clone it via https or ssh. Once it's downloaded, unzip the file into your preferred location, or if you cloned it anyway, and go to the project folder through the terminal.

Example:
```sh
cd path/to/the/project/rflex-webapp-project
```

### Install modules and dependencies

```sh
npm install
```

### Copy and rename the .env.example file to .env and set the API url

```
VITE_API_URL="YOUR_API_URL"
```

### Run in development mode

```sh
npm run dev
```

By default, the project will be running at http://localhost:5173

### Compile and run in production mode

```sh
npm run build && npm run preview
```

By default, the project will be running at http://localhost:4173
