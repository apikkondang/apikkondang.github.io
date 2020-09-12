var bhs = lang;
	if(bhs == "ID") 		var linkredir = "https://www.blog-hot.com/p/blog-page_24.html"  
	else if(bhs == "MY") 	var linkredir = "https://www.blog-hot.com/p/my-penjelasan-fxc.html"          
	else if(bhs == "IN") 	var linkredir = "https://www.blog-hot.com/p/in.html"          
	else if(bhs == "TH") 	var linkredir = "https://www.blog-hot.com/p/th_15.html"          
	else if(bhs == "VN") 	var linkredir = "https://www.blog-hot.com/p/vn-follow-up.html"          
	else if(bhs == "TR") 	var linkredir = "https://www.blog-hot.com/p/tr-follback.html"    
	else if(bhs == "RO") 	var linkredir = "RO"    
	else                    var linkredir = "https://www.blog-hot.com/p/blog-page_24.html"    

window.history.pushState('forward', null, '');
window.onpopstate = function() {
window.location.href = linkredir;
window.history.pushState('forward', null, '');
};