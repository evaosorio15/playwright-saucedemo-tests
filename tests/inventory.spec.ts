import { test } from './fixtures';

test.describe('Inventory',() => {
    test('logged-in user lands on the products page', async ({ inventoryPage}) => {         // TODO: 1st test logged-in user lands on the products page'
        await inventoryPage.expectLoaded();                                                 // TODO: check the inventory page loaded (expectLoaded)
    });

    test('user can add an item to the cart', async ({ inventoryPage}) => {                  // TODO:  test 'user can add an item to the cart'
        await inventoryPage.addBackpackToCart();                                            // TODO: addBackpackToCart()
        await inventoryPage.expectCartCount('1');                                           // TODO: expectCartCount('1')
    });
});