Q1:

let badWords = `fosh badfosh foshha`;
let inputWords = prompt('please write something:');
words = inputWords.split('');

function filter(str,badWords){
   for(let i=0 ; i<str.length;i++) {
      if(badWords.includes(str[i])){
         return '*'.repeat(str.length[i]);
      }else{
         return str[i];
      }
   }
   return str.join('');
}




Q2:

function reverse(string) {
   return string.split('').reverse().join('');
};






Q3:

function numberChange(strings) {
strings = strings.split('');

let nom = '۰۱۲۳۴۵۶۷۸۹';
   for (let i = 0; i < strings.length; i++) {
      if (strings[i] == '0') {
         strings[i] = nom[0]
      }
      if (strings[i] == '1') {
         strings[i] = nom[1]
      }
      if (strings[i] == '2') {
         strings[i] = nom[2]
      }
      if (strings[i] == '3') {
         strings[i] = nom[3]
      }
      if (strings[i] == '4') {
         strings[i] = nom[4]
      }
      if (strings[i] == '5') {
         strings[i] = nom[5]
      }
      if (strings[i] == '6') {
         strings[i] = nom[6]
      }
      if (strings[i] == '7') {
         strings[i] = nom[7]
      }
      if (strings[i] == '8') {
         strings[i] = nom[8]
      }
      if (strings[i] == '9') {
         strings[i] = nom[9]
      }
   }
   return strings.join(',');
};




Q4:

function repetitions(str2) {
   str2 = str2.split('');
   let character = {};
   for (let j = 0; j < str2.length; j++) {
      if (character[ltr[j]]) {
         character[ltr[j]]++;
      } else {
         character[ltr[j]] = 1;
      }
   }

   for (let k = 0; k < character.length; k++) {

      if(character.value([k])<character.value([k+1])){
         character.splice(k,1);
      }
   }
   return character;
};




Q6:

function number(str3) {
   str3 = str3.replace(" ", "");
   if (str3.length < 4) {
      return str3;
   } else {
      let result = '';
      for (let q = 0; q < str3.length; q++) {
         result += str3[str3.length - q];
         if ((str3.length - q - 1) % 3 === 0 && q !== str3.length - 1) {
            result += ',';
         }
      }
   }
   return result;
}




 Q8:
 
function removeDuplicates(str4) {
    let output='';
    for (let p = 0; p < str4.length; p++) {
        if(!output.includes(str4[p])){
            output += str4[p]
        }
    }
    return output;
}


