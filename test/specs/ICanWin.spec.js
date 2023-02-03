// Install  WebdriverIO  and do the following task:

// (I Can Win) When performing the task, you must use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

const HomePage = require ('../pages/home.page');

describe("I Can Win", () => {

    it("1. Open https://pastebin.com or a similar service in any browser", async () =>{
        await HomePage.open("https://pastebin.com");
    })

    it("2.1. Create a New Paste with the following details: Code: 'Hello from WebDriver'", async () =>{
        await HomePage.newPaste("Hello from WebDriver");
    })

    it("2.2. Create a New Paste with the following details: Paste Expiration: '10 Minutes'", async () =>{
        await HomePage.pasteExpiration();
    })

    it("2.3. Create a New Paste with the following details: Paste Name / Title: 'helloweb'", async () =>{
        await HomePage.pasteTitle("helloweb");
    })

    it("3. Submit Paste", async () =>{
        await HomePage.submit();
    })
})
