<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Công cụ tính toán</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Công cụ tính toán</h1>
        <div class="question">
            <label for="sumN">Nhập giá trị n để tính tổng từ 1 đến n:</label>
            <input type="number" id="sumN" placeholder="Nhập số n">
            <button onclick="tinhTong()">Tính tổng từ 1 đến n</button>
        </div>
        <div class="question">
            <label for="evenSumN">Nhập giá trị n để tính tổng các số chẵn:</label>
            <input type="number" id="evenSumN" placeholder="Nhập số n">
            <button onclick="tinhTongChan()">Tính tổng các số chẵn</button>
        </div>
        <div class="question">
            <label for="oddSumN">Nhập giá trị n để tính tổng các số lẻ:</label>
            <input type="number" id="oddSumN" placeholder="Nhập số n">
            <button onclick="tinhTongLe()">Tính tổng các số lẻ</button>
        </div>
        <div class="question">
            <label for="primeN">Nhập giá trị n để kiểm tra có phải số nguyên tố không:</label>
            <input type="number" id="primeN" placeholder="Nhập số n">
            <button onclick="kiemTraNguyenTo()">Kiểm tra số nguyên tố</button>
        </div>
        <div class="question">
            <label for="a">Nhập số a:</label>
            <input type="number" id="a" placeholder="Nhập số a">
            <label for="b">Nhập số b:</label>
            <input type="number" id="b" placeholder="Nhập số b">
            <button onclick="timUCLN()">Tìm UCLN của a và b</button>
        </div>
        <div class="result" id="result"></div>
    </div>

    <script src="script.js"></script>
</body>
