const username = "avishyant2011"
const repo = "portfolio"

const container = document.getElementById("sections")

fetch(`https://api.github.com/repos/${username}/${repo}/contents/gallery`)
.then(res=>res.json())
.then(data=>{

data.forEach(folder=>{

if(folder.type==="dir")
{

const card=document.createElement("div")
card.className="section-card"

card.innerHTML=`
<h3>${folder.name}</h3>
<p>Click to view screenshots</p>
`

card.onclick=()=>{
window.location=`section.html?folder=${folder.name}`
}

container.appendChild(card)

}

})

})
