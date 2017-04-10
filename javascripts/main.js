var images =[
	{
		id: 1,
		image :"http://hdwallpaper2013.com/wp-content/uploads/2012/12/Cool-White-and-Black-Background-HD-Wallpaper-1080x675.jpg"
	},
	{
		id: 2,
		image :"http://1.bp.blogspot.com/-2WnnWgeYec4/UDi4trbV7GI/AAAAAAAACyA/0kw4It9Z_wM/s1600/HD-black-and-white-sunset-wallpapers.jpg"	},
	{
		id: 3,
		image :"http://www.wallpapersxl.com/wallpapers/1366x768/lion/171260/lion-wild-black-white-hd-jootix-171260.jpg"
	},
	{
		id: 4,
		image :"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/black-and-white-wallpaper-9-610x343.jpg"
	},
	{
		id: 5,
		image :"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/black-and-white-wallpaper-15-610x457.jpg"
	},
	{
		id: 6,
		image :"https://newevolutiondesigns.com/images/freebies/black-white-background-24.jpg"
	},
	{
		id: 7,
		image :"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/black-and-white-wallpaper-12-610x343.jpg"
	},
	{
		id: 8,
		image :"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/black-and-white-wallpaper-11-610x381.jpg"
	},
	{
		id: 9,
		image :"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/black-and-white-wallpaper-10-610x403.jpg"
	},
	{
		id: 10,
		image :"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/07/black-and-white-wallpaper-7-610x381.jpg"
	}
]


$.each(images, function(index, value) {
	index += 1;
	$("#imageContainer").append(`<div class="card">`);
	$(".card:nth-of-type(" + index + ")").append(`<img class="col-lg-4" src=${value.image}>`);
});



