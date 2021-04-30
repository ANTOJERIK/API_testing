describe('Watches Page', () => {
    it('should show the banner container', () =>{
        browser.url('https://www.ebay.com/b/Sporting-Goods/888/bn_1865031');

        const banner =$('title-banner__right-image');
        expect(banner).toBeDisplayed()
    });
});