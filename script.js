window.onload = function() {

    var form = document.getElementsByClassName('function-form')[0];
    var formButtonCalculate = form.elements.calculate;
    var formResultSection = form.getElementsByClassName("form__result-section")[0];

    formButtonCalculate.addEventListener("click",function () {
        var a = form.elements.a.value,
            b = form.elements.b.value,
            c = form.elements.c.value,
            D = (Math.pow(b,2)-4*a*c);

        if (D > 0){
            printCalculationResult((-b+Math.sqrt(D))/(2*a),
                                   (-b-Math.sqrt(D))/(2*a), D);
        } else if (D === 0) {
            printCalculationResult(-b/(2*a), -b/(2*a), D);
        } else {
            printCalculationResult(-b+"+i*"+Math.sqrt(Math.abs(D))+"/"+2*a,
                                   -b+"-i*"+Math.sqrt(Math.abs(D))+"/"+2*a, D);
        }
    });

    function printCalculationResult(x1, x2, D){
        formResultSection.innerHTML = "<h3>Solution:</h3> D = "+D+"<br>x1 ="+x1+"<br> x2 = "+x2;
    }
}
