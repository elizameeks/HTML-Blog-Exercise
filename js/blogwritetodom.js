var Blog = (function(oldBlog){
	
	oldBlog.writeToDom = function(blogData){
		var blogString = "";
		var write = document.getElementById("blogListView")
		for (var i = 0; i < blogData.length; i++){
			// blogData[i].author; blogData[i].date; blogData[i].entry; blogData[i].keywords; blogData[i].title;
			blogString += 
				`<div class="delete">
					<article class="container white z-depth-5">
						<div class="row">
							<header class="col s12" style="position: relative;">
								<h2 class="center-align pink lighten-4 z-depth-2">${blogData[i].title}</h2>
								<a class="waves-effect waves-light btn pink delete-btn" style="position: relative; margin: -115px 0 0 5px; padding: 5px;"><i class="material-icons">delete</i></a>
							</header>
						</div>
						<div class="row">
							<section class="col s10 offset-s1">
								${blogData[i].entry}
							</section>
						</div>
						<footer>
							<div class="row">
								<div class="col s6 offset-s3 center-align">
									<h3>${blogData[i].author}</h3>
								</div>
							</div>
							<div class="row yellow">
								<div class="col s2 offset-s5 center-align">
								<p>${blogData[i].date}</p>
								</div>
							</div>
						</footer>
					</article>
				</div>`;
		}
		write.innerHTML = blogString;
	}

	return oldBlog;
})(Blog || {});



