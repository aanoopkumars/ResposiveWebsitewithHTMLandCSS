
document.getElementById('exit').addEventListener('click',(item)=> { 
  document.getElementById('nav').classList.add("hideMobile");
})

document.getElementById('menu').addEventListener('click',(item)=> { 
    document.getElementById('nav').classList.remove("hideMobile");
  })

