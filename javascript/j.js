
   let inputfield = document.querySelector("#linkscore");
   let onpress = document.querySelector("#push");
   let grade= document.querySelector("#grade");
   let result = document.querySelector("#result");
   let total = document.getElementById("total");
   let mathresult = document.querySelector("#grade-math");
   
   let mathscore = document.querySelector("#score-math");
   
   let khmersocre = document.querySelector("#score-kh");
   
   let khmerresult = document.querySelector("#grade-kh");
   
   
   
   let psocre = document.querySelector("#score-psy");
   
   let presult = document.querySelector("#grade-psy");
   
   
   let csocre = document.querySelector("#score-chem");
   
   let cresult = document.querySelector("#grade-chem");
   
   
   
   let hsocre = document.querySelector("#score-his");
   
   let hresult = document.querySelector("#grade-his");
   
   
   
   let esocre = document.querySelector("#score-eng");
   
   let eresult = document.querySelector("#grade-eng");
   
   let bsocre = document.querySelector("#score-bio");
   
   let bresult = document.querySelector("#grade-bio");
   
   let res = document.querySelector("#result-clone")
   let grd= document.querySelector("#grade-clone");

//    function loadme(){
//     //  let c = window.prompt("សូមស្វាគមន៍, តើអ្នកឈ្មោះអ្វីដែរ?");
//     //  console.log(c);
//     //  alert("សួរស្តី "+c +"​​ តោះចាប់ផ្តើម!!!")
//     let bo = document.getElementsByTagName("BODY");
//     bo.style.transitionDelay = "10s";
//     bo.style.transitionProperty = " opacity: 100%;";
//    }

onpress.addEventListener("click",function(storevariable){


    let math = document.querySelector("#txt-math").value;

    let khmer = document.querySelector("#txt-khmer").value;
    let bio = document.querySelector("#txt-bio").value;
    let chem = document.querySelector("#txt-chem").value;
    let physic = document.querySelector("#txt-physic").value;
    let his= document.querySelector("#txt-his").value;
    let Eng = document.querySelector("#txt-eng").value;
    let sum = parseFloat(math) + parseFloat(khmer)+parseFloat(chem)+parseFloat(Eng)+parseFloat(bio) +parseFloat(physic)+parseFloat(his);
  


    if(math.length == 0 || khmer.length === 0 || physic.length ==0 || Eng.length == 0 || his.length ==0 || math.length == 0  ){
        console.log("Field is missing");
    }
    // || bio.value =="" || chem.value =="" || physic.value =="" || Eng.value == "" || his.value=="" ||math.value ==""
    else{
       

        if(sum >427){
            result.textContent = "មិនយក"
            res.textContent = result.textContent;
        }
        else{
            result.textContent = sum;   
            res.textContent = result.textContent;
        }



        mathpractice(math); 

        cal(sum);  // calculate total score

        console.log(sum);

        engpractice(Eng);

        khmerpractice(khmer);
    
    
        physicpractice(physic);
    
        chemistrypractice(chem);
    
        biology(bio);

        console.log(bio);

        hispractice(his);

        console.log("successfully");
    }
    

 //grade for all total score

    // khmer(khmer);
    // physic(physic);
    // chemistry(chem);
    // his(his);
    // eng(Eng);




//    inputfield.value = "";
})


 function cal(sum){
    console.log(sum);
    total.value=sum;
    console.log(total);
    if(sum>427){

    }


    console.log("call sum")
  
      if(total.value >= 237 && total.value<=284){
        grade.textContent ="E";
        grd.textContent = grade.textContent;
    
       }  
       else  if(total.value >= 285 && total.value <=331){
        grade.textContent ="D";
        grd.textContent = grade.textContent;
       }  
       else  if(total.value >= 332 && total.value <=379){
        grade.textContent ="C";
        grd.textContent = grade.textContent;
       }  
       else  if(total.value >= 380 && total.value <=426){
        grade.textContent ="B";
        grd.textContent = grade.textContent;
       }  
       else  if(total.value  >= 427 && total.value  <=470){
        grade.textContent ="A";
        grd.textContent = grade.textContent;
       }  
       else if(total.value <= 236 && total.value>=0){
        grade.textContent ="F";
        grd.textContent = grade.textContent;
       }
       else{
        grade.textContent ="N";
        grd.textContent = grade.textContent;
       }

     
       
}

function mathpractice(math){

     mathscore.innerHTML =math; 

 


   //check condition
   if(math >= 112 && math <= 125){
    mathresult.textContent ="A";
    console.log("Printing sth");
   }
   if(math >= 100 && math < 112){
    mathresult.textContent ="B";
    console.log("Printing sth");
   }

   if(math >= 87 && math <100){
    mathresult.textContent ="C";

   }  
   else  if(math>= 75 && math<87){

    mathresult.textContent ="D";

   }  
   else  if(math>= 62  && math<75){
    mathresult.textContent ="E";

   }  
   else  if(math>= 0 && math<62 ){
    mathresult.textContent ="F";

   }  
   else if(math >=125){
    mathresult.textContent ="N";
   }
  




}


function khmerpractice(khmer){
    console.log("ji"+khmer);    

    khmersocre.innerHTML =""+khmer; 

    //check condition
    if(khmer >= 67 && khmer<= 75){
       khmerresult.textContent ="A";
    }
    if(khmer >= 60 && khmer < 67){
        khmerresult.textContent ="B";
    }
 
    if(khmer>= 52 && khmer<67){
        khmerresult.textContent ="C";
 
    }  
    else  if(khmer>= 45 && khmer<52){
 
        khmerresult.textContent ="D";
 
    }  
    else  if(khmer>= 37  && khmer<45){
        khmerresult.textContent ="E";
 
    }  
    else  if(khmer>= 0 && khmer < 37 ){
        khmerresult.textContent ="F";
 
    }  
    else{
        khmerresult.textContent ="N";
    }
 
}

function biology(bio){
    console.log("ji"+bio);    

    bsocre.innerHTML =""+bio; 

    //check condition
    if(bio >= 67 && bio<= 75){
      bresult.textContent ="A";
    }
    if(bio >= 60 &&bio< 67){
        bresult.textContent ="B";
    }
 
    if(bio>= 52 && bio<67){
        bresult.textContent ="C";
 
    }  
    else  if(bio>= 45 && bio<52){
 
        bresult.textContent ="D";
 
    }  
    else  if(bio>= 37  && bio<45){
        bresult.textContent ="E";
 
    }  
    else  if(bio>= 0 && bio < 37 ){
        bresult.textContent ="F";
 
    }  
    else{
        bresult.textContent ="N";
 
    }
 
}

function physicpractice(physic){
    console.log("ji"+physic);    

    psocre.innerHTML =""+physic; 

    //check condition
    if(physic >= 67 && physic<= 75){
      presult.textContent ="A";
    }
    if(physic >= 60 &&physic< 67){
        presult.textContent ="B";
    }
 
    if(physic>= 52 && physic<67){
        presult.textContent ="C";
 
    }  
    else  if(physic>= 45 && physic<52){
 
        presult.textContent ="D";
 
    }  
    else  if(physic>= 37  && physic<45){
        presult.textContent ="E";
 
    }  
    else  if(physic>= 0 && physic < 37 ){
        presult.textContent ="F";
 
    }  
    else{
        presult.textContent ="N";
 
    }
 
}



function chemistrypractice(chem){
    console.log("ji"+chem);    

     csocre.innerHTML =""+chem; 

    //check condition
    if(chem >= 67 && chem<= 75){
      cresult.textContent ="A";
    }
    if(chem >= 60 &&chem< 67){
        cresult.textContent ="B";
    }
 
    if(chem>= 52 && chem<67){
        cresult.textContent ="C";
 
    }  
    else  if(chem>= 45 && chem<52){
 
        cresult.textContent ="D";
 
    }  
    else  if(chem>= 37  && chem<45){
        cresult.textContent ="E";
 
    }  
    else  if(chem>= 0 && chem < 37 ){
        cresult.textContent ="F";
 
    }  
    else{
        cresult.textContent ="N";
    }
 
}





function engpractice(Eng){
    console.log("English: "+Eng);    

    esocre.innerHTML =""+Eng; 

    //check condition
    if(Eng>= 45 && Eng<= 50){
     eresult.textContent ="A";
    }
    if(Eng>= 40 && Eng<45){
        eresult.textContent ="B";
    }
 
    if(Eng>= 35 && Eng< 40){
       eresult.textContent ="C";
 
    }  
    else  if(Eng>= 30 && Eng< 35){
 
        eresult.textContent ="D";
 
    }  
    else  if(Eng>= 25 && Eng < 30){
        eresult.textContent ="E";
 
    }  
    else  if(Eng>= 0 && Eng<= 20 ){
        eresult.textContent ="F";
 
    }  
    else if(Eng >50){
        eresult.textContent ="N";
    }
}

function hispractice(His){
    console.log("ji"+His);    

    hsocre.innerHTML =""+His; 

    //check condition
    if(His>= 45 && His<= 50){
     hresult.textContent ="A";
    }
    if(His>= 40 && His<= 45){
        hresult.textContent ="B";
    }
 
    if(His>= 35 && His<= 40){
        hresult.textContent ="C";
 
    }  
    else  if(His>= 30 && His<= 35){
 
        hresult.textContent ="D";
 
    }  
    else  if(His>= 25 && His< 30){
        hresult.textContent ="E";
 
    }  
    else  if(His>= 0 && His< 25 ){
        hresult.textContent ="F";
 
    }  
    else if(His>50){
        hresult.textContent ="N";
    }
}

function printhere(){
    window.print();
}