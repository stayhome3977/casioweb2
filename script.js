function tinhTong() {
    const n = parseInt(document.getElementById('sumN').value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    document.getElementById('result').innerText = `Tổng từ 1 đến ${n} là: ${sum}`;
}

function tinhTongChan() {
    const n = parseInt(document.getElementById('evenSumN').value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    document.getElementById('result').innerText = `Tổng các số chẵn từ 1 đến ${n} là: ${sum}`;
}

function tinhTongLe() {
    const n = parseInt(document.getElementById('oddSumN').value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    document.getElementById('result').innerText = `Tổng các số lẻ từ 1 đến ${n} là: ${sum}`;
}

function kiemTraNguyenTo() {
    const n = parseInt(document.getElementById('primeN').value);
    if (n < 2) {
        document.getElementById('result').innerText = `${n} không phải là số nguyên tố`;
        return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            document.getElementById('result').innerText = `${n} không phải là số nguyên tố`;
            return;
        }
    }
    document.getElementById('result').innerText = `${n} là số nguyên tố`;
}

function timUCLN() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    document.getElementById('result').innerText = `UCLN của 2 số là: ${a}`;
}
