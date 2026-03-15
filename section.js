const username="YOUR_GITHUB_USERNAME"
const repo="portfolio"

const params=new URLSearchParams(window.location.search)
const folder=params.get("folder")

const container=document.getElementById("images")

fetch(`https://api.github.com/repos/${username}/${repo}/contents/gallery/${folder}`)
.then(res=>res.json())
.then(files=>{

files.forEach(file=>{

if(file.type==="file")
{

const img=document.createElement("img")
img.src=file.download_url

img.onclick=()=>openViewer(file.download_url)

container.appendChild(img)

}

})

})

const viewer=document.getElementById("viewer")
const viewerImg=document.getElementById("viewerImg")
const close=document.getElementById("close")

function openViewer(src){

viewer.style.display="flex"
viewerImg.src=src

}

close.onclick=()=>viewer.style.display="none"

document.addEventListener("keydown",e=>{
if(e.key==="Escape")
viewer.style.display="none"
})
