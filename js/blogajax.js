var Blog = (function(oldBlog){
	
	var dataArray = [];

	oldBlog.runAjax = function(){
		$.ajax({
			url:"../blog.json"
			}).done(oldBlog.parseAjax);
		
	}

	oldBlog.parseAjax = function(data){
		console.log("data", data);
		console.log("dataentry", data.blog[0]);
		var objArray = Object.keys(data.blog);
		console.log("objArray", objArray);
		var objLength = objArray.length;
		console.log("objLength", objLength);
		for (var i = 0; i < objLength; i++){
			dataArray.push(data.blog[i]);
		}
		console.log("dataArray", dataArray);
		// console.log("Blog Entry", dataArray[0].entry);
		Blog.writeToDom(dataArray);
		Blog.listens();
		Blog.deleteButton();
	}

	return oldBlog;
})(Blog || {});