// Install  WebdriverIO  and do the following task:

const HomePage = require("../pages/home.page");
const ResultPage = require("../pages/result.page");


// (Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

describe("Bring It On", () => {

    it("1. Open https://pastebin.com or a similar service in any browser", async () =>{
        await HomePage.open("https://pastebin.com");
    })

    it("2.1. Create a New Paste with the following details: * Code: git config --global user.name 'New Sheriff in Town'\ngit reset $ (git commit-tree HEAD ^ {tree} -m 'Legacy code')\ngit push origin master --force", async () =>{
        await HomePage.newPaste('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force"');
    })

    it("2.2. Create a New Paste with the following details: Syntax Highlighting: 'Bash'", async () =>{
        await HomePage.syntaxHighlighting("Bash");
    })

    it("2.3. Create a New Paste with the following details: Paste Expiration: '10 Minutes'", async () =>{
        await HomePage.pasteExpiration();
    })

    it("2.4. Create a New Paste with the following details: Paste Name / Title: 'how to gain dominance among developers'", async () =>{
        await HomePage.pasteTitle('how to gain dominance among developers');
    })

    it("3.1. Save paste", async () =>{
        await HomePage.submit();
    })

    it("3.2. Check the following: Browser page title matches Paste Name / Title", async () =>{
        await ResultPage.checkTitle();
    })

    it("3.3. Check the following: Syntax is suspended for bash", async () =>{
        await ResultPage.checkSyntax();
    })

    it("3.4. Check the following: Check that the code matches the one entered in paragraph 2", async () =>{
        await ResultPage.checkCode();
    })
})
