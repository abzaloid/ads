//	/**********************************************************/
//	/ CollectionFS package configuration for Meteor FileSystem /
//	/**********************************************************/

var changeDimensions = function (fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize(300, 300).stream().pipe(writeStream);
};

Images = new FS.Collection("images", {
	stores: [
		new FS.Store.FileSystem("images", {transformWrite: changeDimensions}),
	],
	filter: {
    	allow: {
      		contentTypes: ['image/*'] //allow only images in this FS.Collection
    	},
    	maxSize: 5 * 1024 * 1024,	// in bytes
  	}
});

Images.allow({
    insert:function(userId,project){
        return true;
    },
    update:function(userId,project,fields,modifier){
        return true;
    },
    remove:function(userId,project){
        return true;
    },
    download:function(){
        return true;
    }
});