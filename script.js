let string='';
function append(symbol){
    string += symbol;
    document.getElementById('input-box').value=string;
}

function cal(){
    string=eval(string);
    string=string.toString();
    document.getElementById('input-box').value=string;
}

function clearAll(){
    string='';
    document.getElementById('input-box').value='';
}

function sqrt(){
    string=Math.sqrt(string);
    document.getElementById('input-box').value=string;
}

function sq(){
    string=string*string;
    document.getElementById('input-box').value=string;
}

function reseprocal(){
    string=1/string;
    document.getElementById('input-box').value=string;
}

function cancel(){
    string=string.slice(0,-1);
    document.getElementById('input-box').value=string;
}