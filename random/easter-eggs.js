/* Course: SENG 513 */
/* Date: November 13th, 2023 */
/* Assignment 3 */
/* Name: Colton Gowans */
/* UCID: 30143970 */

const columnLoob = document.getElementById("column-loob");

// make Loob do a lil flip when you click on him
columnLoob.addEventListener("click", () => {
    console.log("clicked on loob");
    columnLoob.classList.add("rotate");
    setTimeout(() => {
        columnLoob.classList.remove("rotate");
    }, 2000);
});
