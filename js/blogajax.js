var Blog = (function(oldBlog){
	
	var dataArray = [];

	oldBlog.runAjax = function(){
		$.ajax({
			url:"../blog.json"
			}).done(oldBlog.parseAjax);
		
	}

	oldBlog.parseAjax = function(data){
		console.log("data", data);
		for (node in data){
			for (node2 in node){
				dataArray.push(data[node][node2]);
				
			}
		}
		console.log("dataArray", dataArray);
		// console.log("Blog Entry", dataArray[0].entry);
		Blog.writeToDom(dataArray);
	}

	return oldBlog;
})(Blog || {});