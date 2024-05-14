create folder - Node task Hall ApI-
then in terminal-run command-_npm init_
press enter
till is this ok?enter
create index.js file
install npm i express
then create port in index.js file -basic route path
then make app to listen port
npm i nodemon -restart file chances automatic run use in cmd prmpt not use in powershell to execute
run -nodemon
then add in package.json below main line add "type":"module"-because in ecma script es6 use import
common.js file use const app=express(),require-old syntax,common.js-ecma script use module,need es6 use type:module
script below:
start:node index.js
dev:nodemon index.js ->run ->npm run dev

to create src,controler,routes file:

create src file,create it from filename folder path
in package.json -main file-index.js
index.js file is in src folder,so in package.son file
main file:'src/index.js'
then:start:'node src/index.js'
dev:'nodemon src/index.js'
 then create under src
 common folder,controller,router under folder create file
create code,connect path  
