const textArea = document.getElementById("textarea");

const button = document.getElementById("btn");

const output = document.getElementById("output");

button.addEventListener("click", () => {
  if (textArea.value === "") {
    // alert('Please enter a text');
    swal.fire({
      title: "Error",
      text: "Please enter a text  To calculate Vowels ",
      icon: "error",
      confirmButtonText: "OK",
    });
    // output.innerHTML = 'Please enter a text  To calculate Vowels ';
  } else {

    const val = textArea.value;

    let count = 0; 

    for(let i = 0; i < val.length; i++) {

    if(val[i] === 'a' || val[i] === 'e' || val[i] === 'i' || val[i] === 'o' || val[i] === 'u'){

        count++;
    }
    }
    output.innerHTML = `The Number of Vowels are ${count}`;

  }

});
