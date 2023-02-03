const Page = require ('./page');
     
class ResultPage extends Page{
 
    //page locators:
        
        get titleResult() { return browser.getTitle() };
        get syntaxResult() { return $('//a[text()="Bash"]') };
        get pasteResult() { return $('<ol>') };

    //page actions:  

        //Check #1
        async checkTitle () {
            expect(await this.titleResult).toEqual('how to gain dominance among developers');    
        }

        //Check #2
        async checkSyntax () {
            expect(await this.syntaxResult.getText()).toEqual('Bash');    
        }

        //Check #3
        async checkCode () {
            expect(await this.pasteResult.getText()).toEqual('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force"');    
        }
    }

module.exports = new ResultPage();