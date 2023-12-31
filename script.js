// https://www.youtube.com/watch?v=vvjaRIM4Bjs  


fetch("https://fakestoreapi.com/products").then((data)=>{
    // console.log(data) // data is currently in json format
    return data.json();// converted to object
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td> <img src = "${values.image}"/></td> 
      </tr>`;
        document.getElementById("table_body").innerHTML=tableData;
    })
})