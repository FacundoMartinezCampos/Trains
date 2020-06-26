var i = 0;

function increment() {
    if (i == 69) {
        // stop when it hits 300
        window.clearInterval(id); 
        return;
    }

    i++;
    document.getElementById('1').innerHTML = Number(i).toLocaleString('en');
}

var id = window.setInterval('increment()', 50);