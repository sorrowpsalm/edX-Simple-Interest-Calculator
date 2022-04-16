/* function addOption()
{
    var min = 2,
        max = 40,
        select = document.getElementById('noOfYears');

    for (var i = min; i<=max; i++)
    {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
} */

function updateRateValue(rate) 
{
    var preciseRate = Number(rate).toFixed(2);
    document.getElementById('rateValue').value=preciseRate+"%"; 
}
function validate()
{
    var P = document.getElementById("principal").value;
    if(P<1 || P=="")
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    return true;
}

function compute() {
    if(validate())
    {
        var pri = document.getElementById("principal").value;
        var intr = document.getElementById("rate").value;
        var numYear = document.getElementById("noOfYears").value;
        const d = new Date();
        var year=Number(d.getFullYear())+Number(numYear);
        var amount= pri*intr*numYear/100;

        document.getElementById("output").innerHTML= "If you deposit <output>"+ pri +                          
                                                "</output>,<br> at an interest rate of <output>"+intr+
                                                "%</output>.<br> You will receive an amount of <output>"+amount+
                                                "</output>,<br> in the year <output>"+year+"</output>";
    }
}