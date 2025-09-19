//            D O M  PRACTICE

//      QUESTION  1    //

// let heading = document.getElementsByTagName("h2");
// console.dir(heading[0]);

// heading[0].innerText = heading[0].innerText + " " + "from Apna College students";
// console.dir(heading[0].innerText);


// let heading1 = document.querySelector("h2");
// console.dir(heading1)

// heading1.innerText = heading1.innerText + " " + "from Apna College students";
// console.dir(heading1.innerText);




//       QUESTION  2    //

// let divs = document.querySelectorAll(".box");

//        BEGINNER  WAY  OF  CHANGING   INDIVIDUAL  VALUE      //

// divs[0].innerText = divs[0].innerText + " " + "new unique value 1";
// console.dir(divs[0].innerText);

// divs[1].innerText = divs[1].innerText + " " + "new unique value 2";
// console.dir(divs[1].innerText);

// divs[2].innerText = divs[2].innerText + " " + "new unique value 3";
// console.dir(divs[2].innerText);


//      LEVEL   UP   WAY   OF  CHANGING   VALUE   BY  LOOPS    / /     **********

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
//     console.log(div.innerText);
// }






//     MY OWN PRACTICE QUESTIONS         //

//QUESTION 1//

// let para = document.querySelector("#demo");
// para.innerText = "Hello World!";
// console.dir(para.innerText);


//QUESTION 2//

// let h1 = document.querySelector(".title");
// console.dir(h1);

// h1.innerText =  h1.innerText + " " + "Welcome to JavaScript";
// console.dir(h1.innerText);


//QUESTION 3//

// let li = document.querySelectorAll("li");
// console.dir(li[1]);
// li[1].innerText = "Updated Item";
// console.dir(li[1].innerText);













//                  APPLYING      QUERIES      //



//  **       ACCESSING   &   CHANGING   VLAUES  OF ATTRIBUTES       //

// let h1 = document.querySelector("h1");
// console.log(h1);

// let h1Class = h1.getAttribute("class");
// console.dir(h1Class);

// h1.setAttribute("id", "greeting");

// let h1Id = h1.getAttribute("id");
// console.dir(h1Id);



//// **        STYLING     THE   ELEMENTS      //////

// let h2 = document.querySelector("h2");

// h2.style.color = "white";
// h2.style.backgroundColor = "green";
// h2.style.paddingTop = "40px";

// let divId = document.querySelector("#box");
// console.log(divId);
// divId.style.backgroundColor = "lightPink";
// divId.style.fontSize = "25px";



//   **       INSERTING     NEW   ELEMENTS         //

// // STEP -1 : CREATING   THAT   NEW  ELEMENT//

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click!";
// console.log(newBtn)
// newBtn.style.padding = "5px 20px"


// // STEP - 2 :  ADD THAT  NEW  ELEMENT  //

// let div = document.querySelector("div"); 
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);


// let h2 = document.querySelector("h2"); 
// h2.append(newBtn);
// h2.prepend(newBtn);
// h2.before(newBtn);
// h2.after(newBtn);






/////   **    DELETING      THE     ELEMENT             ///////

// let para = document.querySelector("p");
// para.remove();

// let list = document.querySelector("li");
// list.remove();


// let allList = document.querySelector("ul");
// allList.remove();
