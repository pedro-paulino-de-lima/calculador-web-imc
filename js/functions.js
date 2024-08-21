let imcResult = document.querySelector(".imc-result");
let imcStatus = document.querySelector(".imc-status");

function calculate()
{
    function avaluate(result)
    {
        if (result < 19)
        {
            var status = "Magreza";
        }else if (result > 19 && result < 25)
        {
            var status = "Normal";
        }else if (result > 25 && result < 30)
        {
            var status = "Sobrepeso";
        }else if (result > 30 && result < 40)
        {
            var status = "Obesidade";
        }else if (result > 40)
        {
            var status = "Obesidade grave";
        }

        return status;
    }

    var weight = Number.parseFloat(document.getElementById("inputWeight").value);
    var height = Number.parseFloat(document.getElementById("inputHeight").value);
    var result = weight / (height * height);
    var status = avaluate(result);

    imcResult.innerText = "" + Number.parseInt(result);
    imcStatus.innerText = "" + status;
}