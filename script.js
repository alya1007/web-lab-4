document.addEventListener("DOMContentLoaded", () => {
	var mascotContainer = document.querySelector(".mascot-container");

	setTimeout(() => {
		setTimeout(() => {
			mascotContainer.classList.add("active");
		}, 500);
	}, 4000);
});
