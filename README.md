# Description

write description here


# Monorepo

This repo contains 2 projects:

    - souqapp 
        - angular project
        - uses Typescript
        - usage:
            - `cd ./souqapp`
            - `npm install`
            - `ng serve`
    
    - adminapp
        - react project
        - uses javascript

        - usage:
            - `cd ./adminapp`
            - `npm install`
            - `npm start`

## How this monorepo was created?

Originally, this repo contained one angular project created with `ng new souq-app`. Later, we decided to build the admin dashboard with react. So we move angular project to `./souqapp` folder and created a new react project inside adminapp folder.

Moving files in git should use `git mv` command which notifies git that something changed and has to be staged and commited like any other file change.

Note that git allows using multiple `.gitignore` files. So every project has its own `.gitignore`.

#### Steps
    1- cd souq-app
    2- mkdir souqapp
    3- git mv ./* ./souqapp
    4- git add .
    5- git commit -m "moved angular project inside ./souqapp folder"
    6- cd ../
    7- npx create-react-app adminapp
    8- git add .
    9- git commit -m 'created adminapp with react'


# Todos
- write the description