
function productHandle (product , isIncrease){
    const productCount = document.getElementById(product + "Count");
    const productInt = parseInt(productCount.value);
    let productNewCount = productInt;
    if (isIncrease == true){
        productNewCount = productInt + 1;
    }
    if (isIncrease == false && productNewCount > 0){
        productNewCount = productInt - 1;
    }
    let productPrice = productNewCount;
    productCount.value = productNewCount;
    if (product == 'mobile'){
        productPrice = productNewCount * 1219;
    }
    if (product == 'case'){
        productPrice = productNewCount * 59;
    }
    document.getElementById(product + "Price").innerText = productPrice;
    subtotal();
}
function subtotal (){
    const mobileCount = document.getElementById("mobileCount").value;
    const parseMobile = parseInt(mobileCount);
    const caseCount = document.getElementById("caseCount").value;
    const parseCase = parseInt(caseCount);
    const subtotal = (parseMobile * 1219) + (parseCase * 59);
    document.getElementById("subtotal").innerText = subtotal;
    const tax = subtotal * 0.1;
    const round = Math.round(tax);
    document.getElementById("tax").innerText = round;
    const total = subtotal + round;
    document.getElementById('total').innerText = total;
}
