if (Items.find().count() === 0) {
    for (var i = 0; i < 20; i++) {
        Items.insert({
            name: 'Item #' + i + ': toshiba chromebook 2',
            img: 'https://slm-assets0.secondlife.com/assets/5059168/view_large/Closed%20Book.jpg?1328747023',
            price: 45.65,
            owner: 'abzaloid',
            condition: 'new',
            views: i,
            comments: 20-i,
            added_date: Date.now() - 123123,
            updated_date: Date.now() - 1212
        });
    }
}

if (Categories.find().count() === 0) {
    Categories.insert({
    	name: 'Books'
    });
    Categories.insert({
    	name: 'Electronics'
    });
    Categories.insert({
    	name: 'Computers & Laptops'
    });
    Categories.insert({
    	name: 'Cell Phones & Accessories'
    });
    Categories.insert({
    	name: 'Clothing, Shoes & Jewelry'
    });
    Categories.insert({
    	name: 'Sports & Outdoors'
    });
    Categories.insert({
    	name: 'Home & Kitchen'
    });
    Categories.insert({
    	name: 'Toys & Games'
    });
    Categories.insert({
    	name: 'Office Products'
    });
    Categories.insert({
    	name: 'Tools'
    });
    Categories.insert({
    	name: 'Health & Personal Care'
    });
    Categories.insert({
    	name: 'Video Games'
    });
    Categories.insert({
    	name: 'Industrial & Scientific'
    });
    Categories.insert({
    	name: 'Grocery'
    });
    Categories.insert({
    	name: 'Beauty'
    });
    Categories.insert({
    	name: 'Musical Intruments'
    });
    Categories.insert({
    	name: 'Others'
    });
}