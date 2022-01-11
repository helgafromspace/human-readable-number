module.exports = function toReadable (number) {
  n = number.toString();
  m = n.split('');
  digits = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  decimalsTen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  decimalsTwentyPlus = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  hundred = ["hundred"];
  if (m.length == 1){
  for(i = 0; i <= m[0]; i++){
     if (i == m[0]) {
       return digits[i];
     }
  }
  }
   if (m.length == 2 && m[0] == 1){
     for(i = 0; i <= m[1]; i++){
       if (i == m[1]) {
         return decimalsTen[i]
     }
  }  
}
     if (m.length == 2 && m[0] > 1){
       for(i = 0; i <= m[0]; i++){
        for(j = 0; j <= m[1]; j++){
          if (i == m[0] && j == m[1]){
            if(digits[j] == digits[0]){
              return decimalsTwentyPlus[i];
            } else {
             return decimalsTwentyPlus[i] + ' ' + digits[j];
              }
          }
     } 
   }
 }
if (m.length == 3 && m[1] == 0){
  for(i = 0; i <= m[0]; i++){
    for(j = 0; j <= m[2]; j++){
      if(i == m[0] && j == m[2]){
        if(digits[j]==digits[0]){
          return digits[i] + ' ' + hundred[0];
        } else {
        return digits[i] + ' ' + hundred[0] + ' ' + digits[j];
      }
    }
  }
}
}
if (m.length == 3 && m[1] == 1){
  for(i = 0; i <= m[0]; i++){
    for(j = 0; j <= m[2]; j++){
      if(i == m[0] && j == m[2]){
        return digits[i] + ' ' + hundred[0] + ' ' + decimalsTen[j]
      }
    }
  }
}
if(m.length == 3 && m[1] > 1){
  for(i = 0; i <= m[0]; i++){
    for(j = 0; j <= m[1];j++){
      for(k = 0; k <= m[2]; k++){
      if(i == m[0] && j == m[1] && k == m[2]){
        if(digits[k] == digits[0]){
              return digits[i] + ' ' + hundred[0] + ' ' + decimalsTwentyPlus[j];
            } else {
             return digits[i] + ' ' + hundred[0] + ' ' + decimalsTwentyPlus[j] + ' ' + digits[k];
              }
      }
    }
  }
}
}
}