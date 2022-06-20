// // Method 1

// let link = document.body.getElementsByTagName("img")[0];
// console.log(link.href);

// // retrieves the first tag in doc

// -=---=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// // Method 2

// // find element by specific id tag

// let picture1 = document.getElementById("Doom93");
// console.log(Doom93.src);

// let picture2 = document.getElementById("DoomSlayer");
// console.log(DoomSlayer.src);

// let picture3 = document.getElementById("CyberDemon");
// console.log(CyberDemon.src);

// // retrieves each indivual elemental node

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Method 3

// getElementsByClassName does the same as ID but retireves by attached Class Name

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=--=--=-=-=

// replace button code demo

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }

//   succesfully replaces all pictures with theier alt image descriptions

// -=====-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// should work but does not
// function replaceImage() {
//     let image = document.body.getElementById("Doom93");
//       if (image.alt) {
//         let text = document.createTextNode(image.alt);
//         image.parentNode.replaceChild(text, image);
//       }
//   }

// -==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-

// example to filter nodes
// let paras = document.body.getElementsByTagName("p");
//   for (let para of Array.from(paras)) {
//     if (para.getAttribute("data-classified") == "secret") {
//       para.remove();
//     }
//   }


// -=-=-===-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// multiple tags need to be included to be Read.

// /* p elements with id main and with classes a and b */
// p#main.a.b {
//     margin-bottom: 20px;
//   }

// -=-=-===-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// to center an image:

// <p style="text-align: center">
//   <img src="" style="position: relative">
// </p>

// -=-=-===-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=