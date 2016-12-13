window.onload = function() { //use onload to make sure elements are set up before code runs as <script> is in <head>
textstring = "";
var data = '{"projects": [ '+
		'{"type": "Website","image": "https://zaxn1234.github.io/img/portfolio/holbeckhighline/site.png","name": "Holbeck Viaduct","date": "2014 to Present","description": "A website for the community project to turn the Holbeck Viaduct into a walkway to Leeds City Centre.","url": "http://www.holbeckhighline.org.uk/"}, '+
		'{"type": "Website","image": "https://zaxn1234.github.io/img/portfolio/edleeds/site.png","name": "Ed Carlisle for City + Hunslet","date": "February 2015 to Present","description": "A website made for a friend of mine who ran in the Leeds Council elections for 2015 and 2016.","url": "http://www.edleeds.org/"}, '+
		'{"type": "Program","image": "https://zaxn1234.github.io/img/portfolio/test.png","name": "TestProject2","date": "01-01-2016","description": "Test program project for JSON","url": "http://www.edleeds.org/"}, '+
		'{"type": "Game","image": "https://zaxn1234.github.io/img/portfolio/test.png","name": "TestProject3","date": "01-01-2016","description": "Test game project for JSON","url": "http://www.edleeds.org/"}, '+
		'{"type": "App","image": "https://zaxn1234.github.io/img/portfolio/test.png","name": "TestProject4","date": "01-01-2016","description": "Test app project for JSON","url": "http://www.edleeds.org/"}, '+
		'{"type": "Website","image": "https://zaxn1234.github.io/img/portfolio/test.png","name": "TestProject5","date": "01-01-2016","description": "Test website project for JSON","url": "http://www.edleeds.org/"}, '+
		'{"type": "Website","image": "https://zaxn1234.github.io/img/portfolio/test.png","name": "TestProject7","date": "01-01-2016","description": "Test website project for JSON","url": "http://www.edleeds.org/"}, '+
		'{"type": "Program","image": "https://zaxn1234.github.io/img/portfolio/test.png","name": "TestProject6","date": "01-01-2016","description": "Test program project for JSON","url": "http://www.edleeds.org/"} '+
	']}';

dataobj = JSON.parse(data);
var datalen = dataobj.projects.length;

for (i = 0; i <= datalen; i++) {
	//Set up textstring to hold html code for next post
    textstring += "<div class='post'>";
    textstring += "<a href='"+dataobj.projects[i].url+"'>";
    textstring += "<img class='post_img' src='"+dataobj.projects[i].image+"' />";
    textstring += "<span class='post_name'>"+dataobj.projects[i].name+"</span>";
    textstring += "<span class='post_date'>"+dataobj.projects[i].date+"</span>";
    textstring += "<span class='post_desc'>"+dataobj.projects[i].description+"</span>";
    textstring += "</a>";
    textstring += "</div>";
	
	//decide where to put the html code (which panel/tab)
	if(dataobj.projects[i].type == "Website"){
		document.getElementById("websites").innerHTML += textstring;
	}else if(dataobj.projects[i].type == "Program"){
		document.getElementById("programs").innerHTML += textstring;
	}else if(dataobj.projects[i].type == "Game"){
		document.getElementById("games").innerHTML += textstring;
	}else if(dataobj.projects[i].type == "App"){
		document.getElementById("apps").innerHTML += textstring;
	}
	
	
	//clear textstring each iteration to stop post3 html entering post 4.. for example
	textstring = "";
}
}
