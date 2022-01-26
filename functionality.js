var scale=window.devicePixelRatio;
var hgt=window.screen.height;
var wdt=window.screen.width;
var hgt_scaled=hgt*scale;
var wdt_scaled=wdt*scale;
var r=wdt_scaled/hgt_scaled;
console.log(r);
document.getElementById("res_container").innerHTML="<b>"+wdt_scaled+" x "+hgt_scaled+"</b><br><br>";

document.getElementById("main").innerHTML=document.getElementById('op1').innerHTML;

var output=document.getElementById('output');
output.style.height= hgt_scaled/6+'px';
output.style.width=wdt_scaled/6+'px';
console.log(output.style.height);
console.log(output.style.width);

function show(parameter_id){
    document.getElementById("canvas").innerHTML="";
    document.getElementById('main').innerHTML=document.getElementById(parameter_id).innerHTML;


    if(parameter_id=='op1'){
        document.getElementById('op1button').style.display='none';
        document.getElementById('op2button').style.display='block';
    }
    if(parameter_id=='op2'){
        document.getElementById('op2button').style.display='none';
        document.getElementById('op1button').style.display='block';
    }
}


function size2dpi(){
    var dpi;
    var d = document.getElementById("size").value;
    dpi= Math.sqrt(hgt_scaled*hgt_scaled+wdt_scaled*wdt_scaled)/d;
    console.log(dpi);
    document.getElementById("result_text").innerHTML="<b>"+Math.round(dpi)+"</b>";

}

function dpi2size(){
    console.log("inside func");
    var dpi=document.getElementById("dpi").value;
    var height=hgt_scaled/dpi;
    var width=wdt_scaled/dpi;
    var size=Math.sqrt(height*height + width*width);
    console.log(size);
    document.getElementById("result_text").innerHTML="<b>"+Math.round(size*10)/10+" inches</b>";
}
