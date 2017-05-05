var Blog = (function(oldBlog){
	oldBlog.listens = function(){
		var blogList = document.getElementById("blogList");
		var addBlog = document.getElementById("addBlog");
		blogList.addEventListener("click", Blog.revealList);
		addBlog.addEventListener("click", Blog.revealBlog);
	}

	oldBlog.deleteButton = function(){
		var deleteButton = document.getElementsByClassName("delete-btn");
		for (var i = 0; i < deleteButton.length; i++){
			deleteButton.item(i).addEventListener("click", function(event){
				var articleHandle = event.target.closest("div.delete");
				var article = articleHandle.querySelector("article");
				console.log("articleHandle", articleHandle, "article", article);
				articleHandle.removeChild(article);

			})
		}
	}

	return oldBlog;
})(Blog || {});