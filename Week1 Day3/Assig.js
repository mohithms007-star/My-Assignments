
let genderType = "female";

function printGender() {
  let color = "brown";

  
  if (genderType.startsWith("female")) {  
    var age = 30;
    let color = "pink";
    console.log("Color inside if block is", color);
  }
  console.log("Age", age);
  console.log("Color outside if block is", color);
}

printGender();
console.log("Global gender",genderType);

genderType = "male";

printGender();
console.log("Gender is", genderType);