let string='';

let history=[];

function append(symbol){
    string += symbol;
    document.getElementById('input-box').value=string;
}

function cal(){
    try {
        let res=eval(string);
        history.push(`${string} = ${res}`);
        document.getElementById('history').textContent=history.join(' | ');
        string=res;
        string=string.toString();
        document.getElementById('input-box').value=string;
    } catch (error) {
        document.getElementById('input-box').value="Syntax Error";
        string='';
    }
}

function clearAll(){
    string='';
    document.getElementById('input-box').value='';
}

function sqrt(){
    let res=Math.sqrt(string);
    history.push(`√${string}=${res}`);
    document.getElementById('history').textContent=history.join(' | ');
    string=res;
    document.getElementById('input-box').value=string;
}

function sq(){
    let res=string*string;
    history.push(`${string}²=${res}`);
    document.getElementById('history').textContent=history.join(' | ');
    string=res;
    document.getElementById('input-box').value=string;
}

function reseprocal(){
    let res=1/string;
    history.push(`1/${string}=${res}`);
    document.getElementById('history').textContent=history.join(' | ');
    string=res;
    document.getElementById('input-box').value=string;
}

function cancel(){
    string=string.slice(0,-1);
    document.getElementById('input-box').value=string;
}

function kbdevent(event){
    const allowed_keys=['+','-','/','(',')','*','Backspace','Enter'];

    if(allowed_keys.includes(event.key)){
        if(event.key==='Enter'){
            cal();
        }
        else if(event.key==='Backspace'){
            cancel();
        }
        else{
            append(event.key);
        }
    }
    else if(!isNaN(event.key)){
        append(event.key);
    }
}

document.addEventListener('keydown', kbdevent);

let btn_his=document.getElementById('history-btn');
let his=document.getElementById('history');

function toggleHistory(){
    if(his.style.display === 'none' || his.style.display === ''){
        his.style.display="block";
        btn_his.textContent="Hide History";
    }
    else{
        his.style.display="none";
        btn_his.textContent="Show History";
    }
}