const btn = document.querySelector('#btn');


btn.addEventListener('click', function(){ 

    var r = 0;

    function change() {
        color = 'rgb(' + r +', 0, 0)';
        document.body.style.backgroundColor = color;
        r < 256 ? r++ : 0;
    }

    setInterval(change, 10);
})