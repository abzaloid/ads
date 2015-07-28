if (SellItems.find().count() === 0) {
    for (var i = 0; i < 20; i++) {
        SellItems.insert({
            name: 'Item #' + i + ': toshiba chromebook 2',
            img: 'https://slm-assets0.secondlife.com/assets/5059168/view_large/Closed%20Book.jpg?1328747023',
            price: 45.65,
            old_price: -(i % 2) * 34,
            owner: 'abzaloid',
            condition: 'new',
            views: i,
            comments: 20-i,
            added_date: Date.now() - 123123,
            updated_date: Date.now() - 1212,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        name: 'Service'
    });
    Categories.insert({
        name: 'Lost & Found'
    });
    Categories.insert({
    	name: 'Others'
    });
}