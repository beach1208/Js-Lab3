tiles = [];

window.onload = function() {

    var arr = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
    shuffle(arr);

    var panel = document.getElementById('panel');
    for (i = 0; i < 9; i++){
        var div = document.createElement('div');
        div.className = 'tile';
        div.index = i;
        div.textContent = arr[i];
        div.onclick = click;
        panel.appendChild(div);
        tiles.push(div);
    }
}

function shuffle(arr) {
  var length = arr.length;
  for(var i = length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
  }
    return arr;
}



function swapContent(i, k){

    var temp = tiles[i].textContent;
    tiles[i].textContent = tiles[k].textContent;
    tiles[k].textContent = temp;

}

function click(e) {

    var i = e.target.index;

    if (i <= 5 && tiles[i + 3].textContent == '' ){
        swapContent(i, i + 3);
    }else if ( i >= 3 && tiles[i - 3].textContent == ''){
        swapContent(i, i - 3);
    }else if (i % 3 !== 2 && tiles[i + 1].textContent == ''){
        swapContent(i, i + 1);
    }else if (i % 3 !== 0 && tiles[i - 1].textContent == ''){
        swapContent(i, i - 1);
    }
}
