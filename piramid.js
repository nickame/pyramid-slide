



/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

let doc = document.getElementById('choice');
doc.addEventListener('change', printPyramid);
 
let count0 =  document.getElementById('count'); 

let p = document.createElement('p');
    p.innerHTML = count0.value;
    count0.parentNode.appendChild(p);
    
 printPyramid(10);    

function printPyramid(height) {
    

    let pyramid = document.getElementById('pyramid');
  //
    while (pyramid.hasChildNodes()) {
  pyramid.removeChild(pyramid.lastChild);
}
  //
    let symbol = document.getElementById('symbol').value;
    let count =  document.getElementById('count'); 
    
    height =parseInt(count.value);
    let p = document.createElement('p');
    p.innerHTML = count.value;
    count.parentNode.removeChild(count.parentNode.lastChild);
    count.parentNode.appendChild(p);
  
    console.log(height);
    let line = new Array(height+1);
    line.fill('<i>&nbsp;</i>', 0, height);
    line.fill('<span>'+symbol+'</span>', height-1, height+1);
    for(let i=height-1; i>=0; i--){
    line.fill('<span>'+symbol+'</span>', i, height); 
    let p = document.createElement('p');
    p.innerHTML = line.join('');
    pyramid.appendChild(p);
    //console.log(line.join(''));   
    }
   
}
