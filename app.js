// Build rows tiles and images

const numImages = 43;
const imageTitles = ["Alte Heimat", "Auf messers Schneide", "Farbenspiel", "mehr Sand", "rembere escher", "Apfel Asymetrie", "big brother", "Birkenflied", "geordnetes Chaos",
    "maritim", "Traumbaum", "unding", "Verschlungen", "Voegel", "Zwergnase", "Akt vor Akt", "Eselsruhe", "Gabelstrass", "Instrument", "Love and Music", "Schnecken", "Freigesetzt",
    "Schirmherrschaft", "selbst Fazit", "Silence", "Skatspieler", "sonntagskonzert", "Aztekmystik", "Das Biest", "die Veber Leichen", "Inferno", "IS", "Kopf ueberlisten", "Herr Gewichtig",
    "Lisa", "Trichter", "Zerrissenheit", "Exotic Night", "Hahn", "In Memory", "Nacht Tag", "Stilleben", "unendliche Geschichte"];




let numPerRow = 3;
let numOfRows = (Math.floor(numImages / numPerRow));
let numOfRowsRest = (numImages % numPerRow);




addTiles()

function addTiles() {
    const container = document.querySelector(".container");



    // Builds the row
    for (let i = 0; i < numOfRows + numOfRowsRest; i++) {

        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.insertBefore(newRow, document.querySelector("#buttons"));

        if (i == numOfRows) {
            numPerRow = numOfRowsRest;
        }
        for (let y = 0; y < numPerRow; y++) {
            let newTile = document.createElement("div");
            let newImage = document.createElement("img");
            newTile.classList.add("col-sm");
            newRow.append(newTile);
            newTile.append(newImage);
            newImage.src = `Preview_Image/image_s_${(i * 3) + y}.jpg`;
            newTile.append(imageTitles[(i * 3) + y]);
            newTile.addEventListener("click", function () {
                console.log("TILE", (i * 3) + y);
                popup.style.transform = "translateY(0)";
                popupImage.src = `Full_Size_Image/image_${(i * 3) + y}.jpg`;
            })




        }
    }
    numPerRow = 3;

}




const tiles = document.querySelectorAll(".col-sm");
const popup = document.querySelector("#popupFrame");
const popupImage = document.querySelector("#popupImg");

const backButton = document.querySelector("#popupFrame>button");



backButton.addEventListener("click", function () {
    popup.style.transform = "translateY(-110%)";
})



const selectBtn = document.querySelector("#category");

selectBtn.addEventListener("change", function () {
    console.log(selectBtn.value);

    if (selectBtn.value === "default") {
        removeAllTiles();
        addTiles();
    } else {
        removeAllTiles()
        addFilteredTiles();
    }
})



function removeAllTiles() {
    let allTiles = document.querySelectorAll(".col-sm");
    for (let tile of allTiles) {
        tile.remove();
    }
    let allRows = document.querySelectorAll(".row");
    for (let row of allRows) {
        row.remove();
    }
}



const filters = {
    "abspringtechnick": [0, 1, 2, 3, 4]
    // "collagen": {
    //     "start": 5,
    //     "end": 14
    // },
    // "drucke": {
    //     "start": 15,
    //     "end": 20
    // },
    // "feder": {
    //     "start": 21,
    //     "end": 26
    // },
    // "gemälde": {
    //     "start": 27,
    //     "end": 32
    // },
    // "skulpturen": {
    //     "start": 33,
    //     "end": 36
    // },
    // "wachsschichttechnik": {
    //     "start": 37,
    //     "end": 42
    // },
};


function addFilteredTiles() {
    const container = document.querySelector(".container");

    // Builds the row
    for (let i = 0; i < numOfRows + numOfRowsRest; i++) {

        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.insertBefore(newRow, document.querySelector("#buttons"));
        if (i == numOfRows) {
            numPerRow = numOfRowsRest;
        }
        for (let y = 0; y < numPerRow; y++) {
            if (filters.abspringtechnick[(i * 3) + y]) {
                let newTile = document.createElement("div");
                let newImage = document.createElement("img");
                newTile.classList.add("col-sm");
                newRow.append(newTile);
                newTile.append(newImage);
                newImage.src = `Preview_Image/image_s_${(i * 3) + y}.jpg`;
                newTile.append(imageTitles[(i * 3) + y]);
                newTile.addEventListener("click", function () {
                    console.log("TILE", (i * 3) + y);
                    popup.style.transform = "translateY(0)";
                    popupImage.src = `Full_Size_Image/image_${(i * 3) + y}.jpg`;
                })
            }




        }
    }
    numPerRow = 3;

}

