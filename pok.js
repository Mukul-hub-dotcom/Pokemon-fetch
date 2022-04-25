getData()

async function getData(){
let url='https://pokeapi.co/api/v2/pokemon';
console.log(url);
try{

    const res=await fetch(url);
    let data=await res.json();
    console.log(data);
    data=data.results;
    console.log(data);
    displayData(data);
}

catch(err){
    console.log(err);
}
}
    function displayData(data){
    data.forEach(function(results){
    let area=document.getElementById("container");
    let box=document.createElement("div");
    let name=document.createElement("h1");
    name.textContent="Name: "+results.name;

    box.append(name);

    area.append(box);
    });
    }
      function storeData(data){        
       let st=localStorage.setItem('stored',JSON.stringify(data));
       console.log(st);
       
      }

    