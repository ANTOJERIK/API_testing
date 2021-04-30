import SearchPage from '../pages/search.page';



describe('Ebay Product Search', () => {
    it('should open the main url and verify the title',() => {
        browser.url('https://pages.ebay.in/photocenter/');
        expect(browser).toHaveTitle(
            'eBay India - Online Shopping Mall: Free Auctions, Shop/Buy/Sell Mobiles, Cameras, Apparel, Computers, Bollywood Clothes & Indian Products'
        );
    });

    it('should search for an product and verify the search the text value', () =>{
        SearchPage.searchInput.addValue('Iphone');
        SearchPage.searchBtn.click();


        expect(SearchPage.searchinput).toHaveValue('Iphone');
    });

    it('should redirect to a new page and verify the title', () => {
        const category = $('#gh-cat option:nth-child(1)');

        expect(category).toHaveText('Cell Phones & Smartphones');
    });
});