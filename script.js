function drawTree(h) {
    for ( i=1; i<=h ; i++ ) {
        var star = '';
        for (j=0 ; j<i ; j++){
            var star = star +'*';
        }
        console.log(star);
    }
}
drawTree(5);