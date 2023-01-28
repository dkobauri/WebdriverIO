# WebdriverIO - (Tasks For Stage 2)

Instructions:

Open folder and run following command in the terminal:

1.1) npm init -y
1.2) npm init wdio
1.2.1) Where should your tests be lunched? -> local
1.2.2) Where is your automation backend located? -> On my local machine
1.2.3) Which wramework do you want to use? -> Mocha
1.2.4) Do you want to use compiler? -> No!
1.2.5) Do you want WebdriverIO to autogenerate some test files? -> No
1.2.6) Which reporter do want to use? -> spec
1.2.7) Do you want to add a plugin to your test setup? -> wait-for
1.2.8) Do you want to add a service to your test setup? -> chromedriver
1.2.9) What is the base url? -> http://localhost
1.2.10) Do you want to run "npm install"> -> Y

2) configure "wdio.conf.js" file: 

2.1) './test/specs/**/*.js' (specs)
2.2) maxInstances:1 (capabilities)
2.3) logLevel: 'error'

3) Move 'test/specs' folder from repository to your folder.

4) Run following command in the terminal to execute the code:

4.1) npm run wdio

