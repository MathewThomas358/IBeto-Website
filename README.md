# IBeto-Website

Steps to create a server on Linux

* Option #1: Apache Web Serve
* Option #2: Node.JS http-server

## Option #1: Apache Web Server
Step 1: Just don't.

## Option #2: Node.JS http-server
Step 1: Install NVM using this command -
```sh
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Step 2: Install Node.JS using this command - 
```sh
	nvm install node
```

Step 3: Specify which version of node to use using this command -
```sh
	nvm use node
```

Step 4: Install the package http-server globally using this command -
```sh
	npm install http-server -g
```

Step 5: Open the terminal in this directory and use this command -
```sh
	http-server
```

Step 6: Open [http://localhost:8080/](http://localhost:8080/) on your browser