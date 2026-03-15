const username = "avishyant2011"
const repo = "portfolio"

const galleryContainer = document.getElementById("gallery")

const galleryAPI = `https://api.github.com/repos/${username}/${repo}/contents/gallery`

fetch(galleryAPI)
.then(res => res.json())
.then(folders => {

folders.forEach(folder => {

if(folder.type === "dir")
{

const section = document.createElement("div")

const title = document.createElement("h2")
title.textContent = folder.name

section.appendChild(title)

const grid = document.createElement("div")
grid.className = "grid"

section.appendChild(grid)

galleryContainer.appendChild(section)

fetch(folder.url)
.then(res => res.json())
.then(images => {

images.forEach(file => {

if(file.type === "file")
{

const img = document.createElement("img")
img.src = file.download_url

grid.appendChild(img)

}

})

})

}

})

})
