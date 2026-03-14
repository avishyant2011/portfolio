const username = "avishyant2011"
const repo = "portfolio"

const api = `https://api.github.com/repos/${username}/${repo}/contents/gallery`

fetch(api)
.then(res => res.json())
.then(data => {

const gallery = document.getElementById("gallery")

 data.forEach(file => {

 if(file.type === "file")
 {

 const img = document.createElement("img")
 img.src = file.download_url

 gallery.appendChild(img)

 }

 })

})
