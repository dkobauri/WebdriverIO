# WebdriverIO - (Tasks For Stage 2)

Instructions:

1)Open folder and run following command in the terminal:

1.1) npm init -y
1.2) npm init wdio
     - Where should your tests be lunched? -> local
     - Where is your automation backend located? -> On my local machine
     - Which wramework do you want to use? -> Mocha
     - Do you want to use compiler? -> No!
     - Do you want WebdriverIO to autogenerate some test files? -> No
     - Which reporter do want to use? -> spec
     - Do you want to add a plugin to your test setup? -> wait-for
     - Do you want to add a service to your test setup? -> chromedriver
     - What is the base url? -> http://localhost
     - Do you want to run "npm install"> -> Y

2) configure "wdio.conf.js" file: 

2.1) './test/specs/**/*.js' (specs)
2.2) maxInstances:1 (capabilities)
2.3) logLevel: 'error'

3) Move 'test/specs' folder from repository to your folder.

4) Run following command in the terminal to execute the code:

4.1) npm run wdio
