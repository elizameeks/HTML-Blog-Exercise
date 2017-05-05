var Blog = (function(oldBlog){
	oldBlog.listens = function(){
		var blogList = document.getElementById("blogList");
		var addBlog = document.getElementById("addBlog");
		blogList.addEventListener("click", Blog.revealList);
		addBlog.addEventListener("click", Blog.revealBlog);
	}

	return oldBlog;
})(Blog || {});