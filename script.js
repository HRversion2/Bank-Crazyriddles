console.log(
  "Congratulations! You have successfully given us money, and we will use it for good use (A lamborghini)"
);

let total = 1000;

document.querySelector("#bank-form").addEventListener("click", function (e) {
  e.preventDefault();

  // get the inputs
  const dunk = parseFloat(document.querySelector("#deposit").value) || 0;
  const yank = parseFloat(document.querySelector("#withdraw").value) || 0;

  console.log(dunk, yank);

  // do the math
  // total + dunk - yank
  const final = total + dunk - yank;
  total = final;

  // show the result
  document.querySelector("#total").textContent = final;
});

// write your code here
document.querySelector("#tax-form").addEventListener("click", function (e) {
  e.preventDefault();

  const tot = parseFloat(document.querySelector("#tot").value) || 0;
  const rate = parseFloat(document.querySelector("#tax-rate").value) || 0;
  const final = rate * tot;
  
  document.querySelector("#tax").textContent = final;
});


document.querySelector("#circle-form").addEventListener("click", function (e) {
    e.preventDefault();
  
    const radius = parseFloat(document.querySelector("#radius").value) || 0;
    const final = Math.PI * radius * radius
    
    document.querySelector("#circle").textContent = final;
  });

// hypotenuse
document.querySelector("#hypotenuse-form").addEventListener("click", function (e) {
e.preventDefault();
  
    const A = document.querySelector("#adjacent").value
    const B = document.querySelector("#opposite").value
    const final =Math.sqrt (Math.pow(A,2) + Math.pow(B,2));
    
    document.querySelector("#hypotenuse").textContent = final;
  });



// (a*a +  b *b )^1/2= c