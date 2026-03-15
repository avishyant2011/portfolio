const username = "avishyant2011"
const repo = "portfolio"

const sectionContainer = document.getElementById("sections")
const imageViewer = document.getElementById("imageViewer")

const api = `https://api.github.com/repos/${username}/${repo}/contents/gallery`

fetch(api)
.then(res => res.json())
.then(folders => {

folders.forEach(folder => {

if(folder.type === "dir")
{

const button = document.createElement("div")
button.className = "section-btn"
button.textContent = folder.name

button.onclick = () => {

imageViewer.innerHTML = ""

fetch(folder.url)
.then(res => res.json())
.then(files => {

files.forEach(file => {

if(file.type === "file")
{

const img = document.createElement("img")
img.src = file.download_url

imageViewer.appendChild(img)

}

})

})

}

sectionContainer.appendChild(button)

}

})

})
