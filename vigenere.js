// use this function to solve negative modulo problem
// src: https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function mod(n, m) {
  return ((n % m) + m) % m;
}

// encrypt message
function encrypt(key, msg){
  let msgOut = "";

  for(let i=0; i<msg.length; i++){
    let numeric = (msg.charCodeAt(i)+key.charCodeAt(i%key.length)-32);
    numeric = mod(numeric,94);
    let outChar = String.fromCharCode(numeric+32);
    msgOut += outChar;
  }
  return msgOut;
}

// decrypt message
function decrypt(key, msg){
  let msgOut = "";

  for(let i=0; i<msg.length; i++){
    let numeric = (msg.charCodeAt(i)-key.charCodeAt(i%key.length)-32);
    numeric = mod(numeric,94);
    let outChar = String.fromCharCode(numeric+32);
    msgOut += outChar;
  }
  return msgOut;
}