function capitalize(s){
 let input = ''; 
    let arrayTwo = '';
    for (let i = 0; i < s.length; i++) { 
        if (i % 2 === 0) { 
            input += s[i].toUpperCase();
        } else { 
            input += s[i]; 
        }
    } 
    for (let i = 0; i < s.length; i++) { 
        if (i % 2 === 1) { 
            arrayTwo += s[i].toUpperCase(); 
        } else { 
            arrayTwo += s[i]; 
        }
    } 
    return [input,arrayTwo]; 
};