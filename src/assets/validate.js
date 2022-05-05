const regex =  /^[A-Za-z]+$/

export function validate(input){
    return regex.test(input);
  }