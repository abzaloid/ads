// 	/****************************************************************/
//	/  /admin page configuration for ADMIN package (as MongoDB GUI)	 /
//	/****************************************************************/

AdminConfig = { 
	adminEmails: ['	abzal.serekov@gmail.com'], 
	collections: { 
		SellItems: {
			tableColumns: [
				{label: 'Name', name: 'name'},
				{label: 'Categories', name: 'categories'},
				{label: 'Time', name: 'added_time'},
			]
		}, 
	Categories: {} 
	} 
}

// 	/****************************************************************/
//	/  		EasySearch with ElastiSearch configuration				 /
//	/****************************************************************/

EasySearch.createSearchIndex('sell_items', {
	'use': 'elastic-search'
});