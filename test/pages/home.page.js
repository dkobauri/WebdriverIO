const Page = require ('./page');
     
class HomePage extends Page{
 
    //page locators:    
    get newPasteText() { return $('#postform-text') };
    get syntaxHighlightingField() { return $('div.form-group.field-postform-format') };
    get syntaxHighlightingOption() { return $('//li[contains(text(), "Bash")]') };
    get pasteExpirationField() { return $('div.form-group.field-postform-expiration') };
    get pasteExpirationOption() { return $('//li[contains(text(), "10 Minutes")]') };
    get pasteTitleText() { return $('#postform-name') };
    get submitBtn() { return $('//button[contains(text(), "Create New Paste")]') };

    //page actions:  
    
    //URL
    async open (url) {
        await super.open(url);
    };

    //Field #1
    async newPaste (txt) {
        const newPasteTextElement = await this.newPasteText;
        await newPasteTextElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.newPasteText.setValue(txt);
    };

    //Field #2
    async syntaxHighlighting () {
        const syntaxHighlightingElement = await this.syntaxHighlightingField;
        await syntaxHighlightingElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.syntaxHighlightingField.click();
        await this.syntaxHighlightingOption.waitForDisplayed({ timeout : 5000 });
        await this.syntaxHighlightingOption.click();
    };

    //Field #3
    async pasteExpiration () {
        const pasteExpirationElement = await this.pasteExpirationField;
        await pasteExpirationElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.pasteExpirationField.click();
        await this.pasteExpirationOption.waitForDisplayed({ timeout : 5000 });
        await this.pasteExpirationOption.click();
    };

    //Field #4
    async pasteTitle (txt) {
        const pasteTitleTextElement = await this.pasteTitleText;
        await pasteTitleTextElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.pasteTitleText.setValue(txt);
    };

    //Submit
    async submit () {
        const submitBtnElement = await this.submitBtn;
        await submitBtnElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.submitBtn.click();
    };
}

module.exports = new HomePage();