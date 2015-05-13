function showSubcategory(e) {
	this_category = this.getAttribute("id").split("-").slice(1).join(" ");
	console.log(this_category)
}


btn_active_life = document.getElementById("btn-active-life");


btn_active_life.addEventListener("click", showSubcategory, false);