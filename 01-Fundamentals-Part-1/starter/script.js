let system = '1523';
console.log(typeof(system));
console.log(typeof(Number(system)));

switch(name){
    case 'Aryan':
        console.log('Welcome Aryan')
        break;
    case 'Aashu':
        console.log('Welcome, Aashu')
        break;
    default:
        console.log('Enter the name!')
}

name = 'Aryan';
age = 1;
if(age>=18){
    console.log('Eligible')
}
else{
    console.log('Murkh')
}

age>=18 ? console.log('Eligible'):console.log('Murkh');