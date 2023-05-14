
function change() {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#FFF';
    document.getElementById('lite').style.display = 'block';
    document.getElementById('dark').style.display = 'none';
};
function change2() {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
    document.getElementById('dark').style.display = 'block';
    document.getElementById('lite').style.display = 'none';
};

document.getElementById('dark').style.background = '#000';
document.getElementById('dark').style.color = '#fff';
document.getElementById('dark').style.border = 'none';
document.getElementById('dark').style.borderRadius = '20px';
document.getElementById('dark').style.padding = '8px 20px';
document.getElementById('dark').style.fontSize = '20px';
document.getElementById('dark').style.cursor = 'pointer';

document.getElementById('lite').style.background = '#fff';
document.getElementById('lite').style.color = '#000';
document.getElementById('lite').style.border = 'none';
document.getElementById('lite').style.borderRadius = '20px';
document.getElementById('lite').style.padding = '8px 20px';
document.getElementById('lite').style.fontSize = '20px';
document.getElementById('lite').style.cursor = 'pointer';
document.getElementById('lite').style.display = 'none';

let paragraph = document.getElementsByClassName('para');
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.fontSize = '20px';
    paragraph[i].style.padding = '5px 10px';
}

function hover(x) {
    x.style.background = 'blue';
    x.style.transition = '1s';
}
function noHover(x) {
    x.style.background = '#000';
}
function hover2(x) {
    x.style.background = '#f658c1';
    x.style.transition = '1s';
}
function noHover2(x) {
    x.style.background = '#fff';
}
function noHover3(x) {
    x.style.background = '#f5ac58';
}
document.getElementById('post').style.background = '#f5ac58';
document.getElementById('post').style.padding = '10px 20px';
document.getElementById('post').style.cursor = 'pointer';
document.getElementById('post').style.border = 'none';
document.getElementById('post').style.borderRadius = '30px';
document.getElementById('post').style.color = '#fff';
document.getElementById('post').style.fontSize = '18px';
document.getElementById('post').addEventListener('click', function () {
    let text = document.getElementById('text');
    let put = text.value;
    let p = document.createElement('p');
    p.innerText = put;
    p.style.fontSize = '20px';
    document.getElementById('comment').appendChild(p);
    text.value = '';
});

document.getElementById('text').style.border = '1px solid #000';
document.getElementById('text').style.borderRadius = '10px';
document.getElementById('text').addEventListener('focus', function () {
    document.getElementById('text').setAttribute('rows', '5');
    document.getElementById('text').style.border = '2px solid blue';
    document.getElementById('text').style.outline = 'none';
});
document.getElementById('text').addEventListener('blur', function () {
    document.getElementById('text').setAttribute('rows', '3');
    document.getElementById('text').style.border = '1px solid #000';
});

document.getElementById('cnfm').style.textAlign = 'center';
document.getElementById('cnfm').style.padding = '5px 0';
document.getElementById('cnfm').style.color = 'green';
document.getElementById('cnfm').style.fontSize = '40px';
document.getElementById('cnfm').style.fontWeight = 'bold';
document.getElementById('cnfm').style.display = 'none';

let label = document.getElementsByTagName('label');
for (let i = 0; i < label.length; i++) {
    label[i].style.fontSize = '20px';
    label[i].style.padding = '5px 0';
    label[i].style.color = 'gray';
}
let box = document.getElementsByTagName('input');
for (let i = 0; i < label.length; i++) {
    box[i].style.fontSize = '17px';
    box[i].style.padding = '8px';
    box[i].style.margin = '10px 0';
    box[i].style.width = '500px';
    box[i].style.color = 'gray';
    box[i].style.borderRadius = '5px';
    box[i].style.border = '1px solid #3c3c3c';
}
document.getElementById('confirm').style.background = '#fa1170';
document.getElementById('confirm').style.fontSize = '19px';
document.getElementById('confirm').style.padding = '10px 20px';
document.getElementById('confirm').style.border = 'none';
document.getElementById('confirm').style.borderRadius = '20px';
document.getElementById('confirm').style.color = '#fff';
document.getElementById('confirm').style.cursor = 'pointer';


document.getElementById('confirm').addEventListener('click', function () {
    document.getElementById('cnfm').style.display = 'block';
    document.getElementById('password').style.display = 'none';
});

if (document.getElementById('confirm').hasAttribute('disabled')) {
    document.getElementById('confirm').style.opacity = '0.5';
    document.getElementById('confirm').style.cursor = 'not-allowed';
};



document.getElementById('cpassword').addEventListener('keyup', function (event) {
    let newPass = document.getElementById('npassword');
    let conPass = document.getElementById('cpassword');
    if (newPass.value === conPass.value) {
        document.getElementById('confirm').removeAttribute('disabled');
        document.getElementById('confirm').style.opacity = '1';
        document.getElementById('confirm').style.cursor = 'pointer';
    } else {
        document.getElementById('confirm').setAttribute('disabled', true);
        document.getElementById('confirm').style.opacity = '0.5';
        document.getElementById('confirm').style.cursor = 'not-allowed';
    }
});
