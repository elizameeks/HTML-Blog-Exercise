var Blog = (function(oldBlog){
	oldBlog.revealList = function(event){
		var blogListView = document.getElementById("blogListView");
		var addBlogView = document.getElementById("addBlogView");
		blogListView.classList.remove("hidden");
		addBlogView.classList.add("hidden");
	}

	oldBlog.revealBlog = function(event){
		var blogListView = document.getElementById("blogListView");
		var addBlogView = document.getElementById("addBlogView");
		blogListView.classList.add("hidden");
		addBlogView.classList.remove("hidden");
	}

	return oldBlog;
})(Blog || {});