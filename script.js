var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."

var dinosaur = "triceratops";

var upperc = dinosaur.toUpperCase();

var repl = text.replace('Velociraptor', upperc);

console.log(repl.slice(0,text.length/2));