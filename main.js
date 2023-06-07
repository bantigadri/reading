

function generatebill(){
    //present reading unit p1 room nuber 1 ok  
    let p1=document.getElementById("p1").value
   p1=Number.parseInt(p1)

    let p2=document.getElementById("p2").value
   p2=Number.parseInt(p2)

    let p3=document.getElementById("p3").value
   p3=Number.parseInt(p3)

    let p4=document.getElementById("p4").value
   p4=Number.parseInt(p4)

    let p5=document.getElementById("p5").value
   p5=Number.parseInt(p5)

    let p6=document.getElementById("p6").value
   p6=Number.parseInt(p6)

    let p7=document.getElementById("p7").value
   p7=Number.parseInt(p7)

    let p8=document.getElementById("p8").value
   p8=Number.parseInt(p8)

// past reading pa1 for room number  pa1


let pa1=document.getElementById("pa1").value
pa1=Number.parseInt(pa1)

 let pa2=document.getElementById("pa2").value
pa2=Number.parseInt(pa2)

 let pa3=document.getElementById("pa3").value
pa3=Number.parseInt(pa3)
 let pa4=document.getElementById("pa4").value
pa4=Number.parseInt(pa4)

 let pa5=document.getElementById("pa5").value
pa5=Number.parseInt(pa5)
 let pa6=document.getElementById("pa6").value
pa6=Number.parseInt(pa6)

 let pa7=document.getElementById("pa7").value
pa7=Number.parseInt(pa7)

 let pa8=document.getElementById("pa8").value
 pa8=Number.parseInt(pa8)

// paresent or past unit - karne pare
let un1 = p1 - pa1
let un2 = p2 - pa2
let un3 = p3 - pa3
let un4 = p4 - pa4
let un5 = p5 - pa5
let un6 = p6 - pa6
let un7 = p7 - pa7
let un8 = p8 - pa8

// total units 
let totalunit=un1+un2+un3+un4+un5+un6+un7+un8


//totalbill to conver to bill and esthai sulkhe 
let totalbill=document.getElementById("totalbill").value
totalbill=Number.parseInt(totalbill)

let slk=document.getElementById("slk").value
slk=Number.parseInt(slk)

//bill without esthai sulkhe 
let bill=totalbill-slk
//per person esthai sulkhe 
let personSlk=(slk/7).toFixed(2)

// per unit rate for this formula 
let perUnitRate=bill/totalunit

let uni11= perUnitRate.toFixed(2)

// per person bill without esthai sulkhe 
let b1 = (un1 * perUnitRate).toFixed(2)
let b2 = (un2 * perUnitRate).toFixed(2)
let b3 = (un3 * perUnitRate).toFixed(2)
let b4 = (un4 * perUnitRate).toFixed(2)
let b5 = (un5 * perUnitRate).toFixed(2)
let b6 = (un6 * perUnitRate).toFixed(2)
let b7 = (un7 * perUnitRate).toFixed(2)
let b8 = (un8 * perUnitRate).toFixed(2)

let f1= parseFloat(b1)
let f2= parseFloat(b2)
let f3= parseFloat(b3)
let f4= parseFloat(b4)
let f5= parseFloat(b5)
let f6= parseFloat(b6)
let f7= parseFloat(b7)
let f8= parseFloat(b8)

let tt= parseFloat(personSlk)
let add=parseFloat(1)

let tb1 =(f1+tt+add).toFixed(); 
let tb2 = (f2).toFixed(); 
let tb3 =(f3+tt+add).toFixed();
let tb4 =(f4+tt+add).toFixed();
let tb5 =(f5+tt+add).toFixed();
let tb6 =(f6+tt+add).toFixed();
let tb7 =(f7+tt+add).toFixed();
let tb8 =(f8+tt+add).toFixed();
 




    console.log("Hello World1",p1,p2,p3,p4,p5,p6,p7,p8);
    console.log("Hello World2",pa1,pa2,pa3,pa4,pa5,pa6,pa7,pa8);
   console.log("per person unit ",un1,un2,un3,un4,un5,un6,un7,un8)
   console.log(" bill for person ",b1,b2,b3,b4,b5,b6,b7,b8)
console.log('notice : esthai shulak not add for room number 2 ',totalbill,slk,bill,personSlk,totalunit)
console.log(tb1,tb4)

document.getElementById("readingN").innerHTML=`
<div class="main"><div class="ram"><br><br><br><br>
    <h1>Reading Calculation</h1>    <div class="rai">  <span id="time" class="ttime"  ></span> <span class="ttime" > Date : </span>
 </div>  </div> 
    <div>
      <table class="table" border="1">
        <tr>
          <th>R.<br>No.</th>
          <th>Parsent Unit</th>
          <th>Past Unit</th>
          <th>Units</th>
          <th>Bill</th>
          <th>Sthai Sulkhe</th>
          <th>Total Bill</th>
        </tr>
        <tr>
         <td>1</td>
         <td id="p1">${ p1}</td>
         <td id="pa1">${pa1 }</td>
         <td id="u1">${ un1}</td>
         <td id="b1">${ b1}</td>
         <td id="sulkhe">${personSlk}</td>
         <td id="totalb1">${tb1}</td>
        </tr>
              <tr>
         <td>2</td>
         <td id="p2">${p2 }</td>
         <td id="pa2">${pa2 }</td>
         <td id="u2">${un2 }</td>
         <td id="b2">${b2 }</td>
         <td id="sulkhe"> 0 </td>
         <td id="totalb2">${ tb2}</td>
        </tr>
              <tr>
                <td>3</td>
                <td id="p3">${ p3}</td>
                <td id="pa3">${ pa3}</td>
                <td id="u3">${ un3}</td>
                <td id="b3">${ b3}</td>
                <td id="sulkhe">${personSlk}</td>
                <td id="totalb3">${ tb3}</td>
              </tr>
                    <tr>
                      <td>4</td>
                      <td id="p4">${p4 }</td>
                      <td id="pa4">${ pa4}</td>
                      <td id="u4">${ un4}</td>
                      <td id="b4">${ b4}</td>
                      <td id="sulkhe">${personSlk}</td>
                      <td id="totalb4">${ tb4}</td>
                    </tr>
                          <tr>
                            <td>5</td>
                            <td id="p5">${ p5}</td>
                            <td id="pa">${ pa5}</td>
                            <td id="u5">${ un5}</td>
                            <td id="b5">${b5 }</td>
                            <td id="sulkhe">${personSlk}</td>
                            <td id="totalb5">${ tb5}</td>
                          </tr>
                                <tr>
                                  <td>6</td>
                                  <td id="p6">${p6 }</td>
                                  <td id="pa6">${pa6 }</td>
                                  <td id="u6">${un6 }</td>
                                  <td id="b6">${b6 }</td>
                                  <td id="sulkhe">${personSlk}</td>
                                  <td id="totalb6">${tb6 }</td>
                                </tr>
                                      <tr>
                                        <td>7</td>
                                        <td id="p7">${ p7}</td>
                                        <td id="pa7">${ pa7}</td>
                                        <td id="u7">${un7 }</td>
                                        <td id="b7">${b7 }</td>
                                        <td id="sulkhe">${personSlk}</td>
                                        <td id="totalb7">${ tb7}</td>
                                      </tr>
                                            <tr>
                                              <td>8</td>
                                              <td id="p8">${ p8}</td>
                                              <td id="pa8">${pa8 }</td>
                                              <td id="u8">${ un8}</td>
                                              <td id="b8">${b8 }</td>
                                              <td id="sulkhe">${personSlk}</td>
                                              <td id="totalb8">${ tb8}</td>
                                            </tr>
      </table>
    </div>
    <!-- use for bill full details and other information -->
<br><br><br><br><br>
  <div class="report">
    <table>
        <tr>
            <td> Total Units </td>
           <td>${totalunit} </td>
        </tr>
        <tr>
            <td> Total Es.Sulkhe</td>
            <td> ${slk} </td>
        </tr>
        <tr>
            <td> Total Bill </td>
            <td> ${totalbill} </td>

        </tr>
        <tr> 
            <td> Per Unit Rate</td>
        <td> ${ uni11} </td>

        </tr>
        <tr> 
            <td> Per Ps Sulkhe </td>
            <td> ${personSlk} </td>

        </tr>
        <tr>
            <td> Bill </td>
            <td> ${bill} </td>

        </tr>
    </table>
  </div>
  <br><br>
<!-- end for bill full details  -->
</div>
`

}

