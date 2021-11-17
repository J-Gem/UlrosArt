// defines the main Data in form of an object


const images = [
    {
        name: "Alte Heimat",
        previewImage: "Preview_Image/image_s_0.jpg",
        fullSizeImage: "Full_Size_Image/image_0.jpg",
        category: "abspringtechnick"
    },
    {
        name: "Auf messers Schneide",
        previewImage: "Preview_Image/image_s_1.jpg",
        fullSizeImage: "Full_Size_Image/image_1.jpg",
        category: "abspringtechnick"
    },
    {
        name: "Farbenspiel",
        previewImage: "Preview_Image/image_s_2.jpg",
        fullSizeImage: "Full_Size_Image/image_2.jpg",
        category: "abspringtechnick"
    },
    {
        name: "mehr Sand",
        previewImage: "Preview_Image/image_s_3.jpg",
        fullSizeImage: "Full_Size_Image/image_3.jpg",
        category: "abspringtechnick"
    },
    {
        name: "rembere escher",
        previewImage: "Preview_Image/image_s_4.jpg",
        fullSizeImage: "Full_Size_Image/image_4.jpg",
        category: "abspringtechnick"
    },
    {
        name: "Apfel Asymetrie",
        previewImage: "Preview_Image/image_s_5.jpg",
        fullSizeImage: "Full_Size_Image/image_5.jpg",
        category: "collagen"
    },
    {
        name: "big brother",
        previewImage: "Preview_Image/image_s_6.jpg",
        fullSizeImage: "Full_Size_Image/image_6.jpg",
        category: "collagen"
    },
    {
        name: "birkenflied",
        previewImage: "Preview_Image/image_s_7.jpg",
        fullSizeImage: "Full_Size_Image/image_7.jpg",
        category: "collagen"
    },
    {
        name: "geordnetes Chaos",
        previewImage: "Preview_Image/image_s_8.jpg",
        fullSizeImage: "Full_Size_Image/image_8.jpg",
        category: "collagen"
    },
    {
        name: "maritim",
        previewImage: "Preview_Image/image_s_9.jpg",
        fullSizeImage: "Full_Size_Image/image_9.jpg",
        category: "collagen"
    },
    {
        name: "Traumbaum",
        previewImage: "Preview_Image/image_s_10.jpg",
        fullSizeImage: "Full_Size_Image/image_10.jpg",
        category: "collagen"
    },
    {
        name: "Unding",
        previewImage: "Preview_Image/image_s_11.jpg",
        fullSizeImage: "Full_Size_Image/image_11.jpg",
        category: "collagen"
    },
    {
        name: "Verschlungen",
        previewImage: "Preview_Image/image_s_12.jpg",
        fullSizeImage: "Full_Size_Image/image_12.jpg",
        category: "collagen"
    },
    {
        name: "vogel",
        previewImage: "Preview_Image/image_s_13.jpg",
        fullSizeImage: "Full_Size_Image/image_13.jpg",
        category: "collagen"
    },
    {
        name: "Zwergnase",
        previewImage: "Preview_Image/image_s_14.jpg",
        fullSizeImage: "Full_Size_Image/image_14.jpg",
        category: "collagen"
    },
    // {
    //     name: "Akt vor Akt",
    //     previewImage: "Preview_Image/image_s_15.jpg",
    //     fullSizeImage: "Full_Size_Image/image_15.jpg",
    //     category: "drucke"
    // },
    {
        name: "Eselsruhe",
        previewImage: "Preview_Image/image_s_16.jpg",
        fullSizeImage: "Full_Size_Image/image_16.jpg",
        category: "drucke"
    },
    {
        name: "Gabelstrasse",
        previewImage: "Preview_Image/image_s_17.jpg",
        fullSizeImage: "Full_Size_Image/image_17.jpg",
        category: "drucke"
    },
    {
        name: "Instrument",
        previewImage: "Preview_Image/image_s_18.jpg",
        fullSizeImage: "Full_Size_Image/image_18.jpg",
        category: "drucke"
    },
    // {
    //     name: "Love and Music",
    //     previewImage: "Preview_Image/image_s_19.jpg",
    //     fullSizeImage: "Full_Size_Image/image_19.jpg",
    //     category: "drucke"
    // },
    {
        name: "Schnecken",
        previewImage: "Preview_Image/image_s_20.jpg",
        fullSizeImage: "Full_Size_Image/image_20.jpg",
        category: "drucke"
    },
    // {
    //     name: "Freigesetzt",
    //     previewImage: "Preview_Image/image_s_21.jpg",
    //     fullSizeImage: "Full_Size_Image/image_21.jpg",
    //     category: "feder"
    // },
    // {
    //     name: "Schirmherrschaft",
    //     previewImage: "Preview_Image/image_s_22.jpg",
    //     fullSizeImage: "Full_Size_Image/image_22.jpg",
    //     category: "feder"
    // },
    {
        name: "Selbst Fazit",
        previewImage: "Preview_Image/image_s_23.jpg",
        fullSizeImage: "Full_Size_Image/image_23.jpg",
        category: "feder"
    },
    {
        name: "Silence",
        previewImage: "Preview_Image/image_s_24.jpg",
        fullSizeImage: "Full_Size_Image/image_24.jpg",
        category: "feder"
    },
    {
        name: "Skatspieler",
        previewImage: "Preview_Image/image_s_25.jpg",
        fullSizeImage: "Full_Size_Image/image_25.jpg",
        category: "feder"
    },
    {
        name: "Sonntagskonzert",
        previewImage: "Preview_Image/image_s_26.jpg",
        fullSizeImage: "Full_Size_Image/image_26.jpg",
        category: "feder"
    },
    {
        name: "Aztekmystik",
        previewImage: "Preview_Image/image_s_27.jpg",
        fullSizeImage: "Full_Size_Image/image_27.jpg",
        category: "gemälde"
    },
    {
        name: "Das Biest",
        previewImage: "Preview_Image/image_s_28.jpg",
        fullSizeImage: "Full_Size_Image/image_28.jpg",
        category: "gemälde"
    },
    // {
    //     name: "Die Veber Leichen",
    //     previewImage: "Preview_Image/image_s_29.jpg",
    //     fullSizeImage: "Full_Size_Image/image_29.jpg",
    //     category: "gemälde"
    // },
    {
        name: "Inferno",
        previewImage: "Preview_Image/image_s_30.jpg",
        fullSizeImage: "Full_Size_Image/image_30.jpg",
        category: "gemälde"
    },
    // {
    //     name: "IS",
    //     previewImage: "Preview_Image/image_s_31.jpg",
    //     fullSizeImage: "Full_Size_Image/image_31.jpg",
    //     category: "gemälde"
    // },
    {
        name: "Kopf ueberlisten",
        previewImage: "Preview_Image/image_s_32.jpg",
        fullSizeImage: "Full_Size_Image/image_32.jpg",
        category: "gemälde"
    },
    {
        name: "Herr Gewichtig",
        previewImage: "Preview_Image/image_s_33.jpg",
        fullSizeImage: "Full_Size_Image/image_33.jpg",
        category: "skulpturen"
    },
    {
        name: "Lisa",
        previewImage: "Preview_Image/image_s_34.jpg",
        fullSizeImage: "Full_Size_Image/image_34.jpg",
        category: "skulpturen"
    },
    {
        name: "Trichter",
        previewImage: "Preview_Image/image_s_35.jpg",
        fullSizeImage: "Full_Size_Image/image_35.jpg",
        category: "skulpturen"
    },
    {
        name: "zerrissenheit",
        previewImage: "Preview_Image/image_s_36.jpg",
        fullSizeImage: "Full_Size_Image/image_36.jpg",
        category: "skulpturen"
    },
    {
        name: "Exotic",
        previewImage: "Preview_Image/image_s_37.jpg",
        fullSizeImage: "Full_Size_Image/image_37.jpg",
        category: "wachsschichttechnik"
    },
    {
        name: "Hahn",
        previewImage: "Preview_Image/image_s_38.jpg",
        fullSizeImage: "Full_Size_Image/image_38.jpg",
        category: "wachsschichttechnik"
    },
    {
        name: "In Memory",
        previewImage: "Preview_Image/image_s_39.jpg",
        fullSizeImage: "Full_Size_Image/image_39.jpg",
        category: "wachsschichttechnik"
    },
    {
        name: "Nacht und Tag",
        previewImage: "Preview_Image/image_s_40.jpg",
        fullSizeImage: "Full_Size_Image/image_40.jpg",
        category: "wachsschichttechnik"
    },
    {
        name: "Stilleben",
        previewImage: "Preview_Image/image_s_41.jpg",
        fullSizeImage: "Full_Size_Image/image_41.jpg",
        category: "wachsschichttechnik"
    },
    {
        name: "Unendlichegeschichte",
        previewImage: "Preview_Image/image_s_42.jpg",
        fullSizeImage: "Full_Size_Image/image_42.jpg",
        category: "wachsschichttechnik"
    },
]





//Filters the Data based on the category

let galleryData = [];

let categorySelect = document.querySelector("#category").value;

if (categorySelect !== "default") {
    galleryData = images.filter(image => image.category === categorySelect);
} else {
    galleryData = [...images];
}


//Counts and calculate the base values

let numImages = Object.keys(galleryData).length - 1;
let tilesPerRow = 3;
let numOfRows = (Math.floor(numImages / tilesPerRow) + 1);

let numOnFinaleRow = ((numImages % tilesPerRow) + 1);


const container = document.querySelector(".container");

buildRows();





function buildRows() {
    for (let i = 0; i <= numOfRows - 1; i++) {

        console.log("row");                         //DEBUG

        let newRow = document.createElement("div");
        newRow.classList.add("row");
        container.insertBefore(newRow, document.querySelector("#buttons"));
        buildTiles(newRow, i);
    }
}


function buildTiles(newRow, i) {
    if ((i) === numOfRows - 1) {
        tilesPerRow = numOnFinaleRow;
        console.log("true")
    }
    for (let y = 0; y < tilesPerRow; y++) {
        let newTile = document.createElement("div");
        newTile.classList.add("col-sm");
        newRow.append(newTile);
        let index = ((i * 3) + y);

        console.log(i, "Tile");                     //DEBUG

        buildImage(newTile, index);
        newTile.append(Object.values(galleryData)[index].name);
    }

}


function buildImage(newTile, index) {
    let newImage = document.createElement("img");
    newImage.src = galleryData[index].previewImage;
    newTile.append(newImage);
    addButton(newTile, index);
}


function addButton(newTile, index) {
    newTile.addEventListener("click", function () {
        console.log("TILE", galleryData[index]);
        popup.style.transform = "translateY(0)";
        popupImage.src = Object.values(galleryData)[index].fullSizeImage;
        selectedTile = Object.values(galleryData)[index];
        nextIndex = (galleryData.indexOf(selectedTile));
    })
}




const categorySelectBtn = document.querySelector("#category");

categorySelectBtn.addEventListener("change", function () {

    removeAllTiles();
    galleryData = [];

    if (categorySelectBtn.value !== "default") {
        galleryData = images.filter(image => image.category === categorySelectBtn.value);
        console.log("category")
    } else {
        galleryData = [...images];
        console.log("default")
    }

    numImages = [];
    numImages = Object.keys(galleryData).length - 1;
    tilesPerRow = 3;
    numOfRows = (Math.floor(numImages / tilesPerRow) + 1);

    numOnFinaleRow = ((numImages % tilesPerRow) + 1);

    buildRows();

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


let selectedTile = "";
let nextIndex = 0;

const tiles = document.querySelectorAll(".col-sm");
const popup = document.querySelector("#popupFrame");
const popupImage = document.querySelector("#popupImg");

const backButton = document.querySelector("#popupFrame>div>#back");
const backwardButton = document.querySelector("#popupFrame>div>#backward");
const forwardButton = document.querySelector("#popupFrame>div>#forward");


backButton.addEventListener("click", function () {
    popup.style.transform = "translateY(-130%)";
})

backwardButton.addEventListener("click", function () {
    if (nextIndex >= 1) {
        --nextIndex;
        popupImage.src = Object.values(galleryData)[nextIndex].fullSizeImage;
    }
})

forwardButton.addEventListener("click", function () {
    if (nextIndex <= galleryData.length - 2) {
        ++nextIndex;
        popupImage.src = Object.values(galleryData)[nextIndex].fullSizeImage;
    }
})
