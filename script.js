function drawTree(h) {
    for (var i=1; i<=h ; i++ ) {
        var star = '';
        for (var j=0 ; j<i ; j++){
            star = star +'*';
        }
        console.log(star);
    }
}
drawTree(5);