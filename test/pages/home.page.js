const Page = require ('./page');
     
class HomePage extends Page{
 
    //page locators:
        
        get newPasteText() { return $('textarea[id="postform-text"]') };
        get syntaxHighlightingChoice() { return $('div[class="form-group field-postform-format"]') };
        get syntaxHighlightingInput() { return $('input[class="select2-search__field"]') };
        get pasteExpirationChoice() { return $('div[class="form-group field-postform-expiration"]') };
        get pasteTitleText() { return $('input[id="postform-name"]') };
        get submitBtn() { return $('button[class="btn -big"]') };

    //page actions:  

        //URL
        async open (url) {
            await super.open(url);
        }

        //Field #1
        async newPaste (txt) {
            await this.newPasteText.setValue(txt);
        }

        //Field #2
        async syntaxHighlighting (txt) {
            await this.syntaxHighlightingChoice.click();
            await this.syntaxHighlightingInput.setValue(txt);
            browser.keys('Enter');
        }

        //Field #3
        async pasteExpiration () {
            await this.pasteExpirationChoice.click();
            browser.keys(['Down arrow', 'Down arrow', 'Enter']);
        }

        //Field #4
        async pasteTitle (txt) {
            await this.pasteTitleText.setValue(txt);
        }

        //Submit
        async submit () {
            await this.submitBtn.click();
        }
    }

module.exports = new HomePage();