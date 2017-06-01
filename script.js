var femaleName = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

allNames = femaleName.concat(maleNames);

var newName = 'Marian'

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    console.log(allNames);
}else {
    console.log('fail');
}