//	/**********************************************************/
//	/ CollectionFS package configuration for Meteor FileSystem /
//	/**********************************************************/

var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('100', '100').stream().pipe(writeStream);
};


Images = new FS.Collection("images", {
	stores: [
		new FS.Store.FileSystem("thumbs", {
			transformWrite: createThumb
		}),
		new FS.Store.FileSystem("images"),
	],
	filter: {
    	allow: {
      		contentTypes: ['image/*'] //allow only images in this FS.Collection
    	},
    	maxSize: 5 * 1024 * 1024,	// in bytes
  	}
});

Images.allow({
	insert: function() { 
		return true; 
	},
    update: function() {
        return true;
    },
    remove: function() { 
    	return true; 
    }
});
