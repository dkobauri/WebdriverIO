const Page = require ('./page');
     
class ResultPage extends Page{
 
    //page locators:    
    get syntaxResult() { return $('//a[contains(text(), "Bash")]') };
    get pasteResult() { return $('<ol>') };

    //page actions:  

    //Check #1
    async checkTitle () {
        await expect(browser).toHaveTitleContaining('how to gain dominance among developers');
    };

    //Check #2
    async checkSyntax () {
        await expect(this.syntaxResult).toHaveTextContaining('Bash');
    };

    //Check #3
    async checkCode () {
        await expect(await this.pasteResult.getText()).toEqual('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force"');
    };
}

module.exports = new ResultPage();