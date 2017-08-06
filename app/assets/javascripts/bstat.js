<!-- Run on load --->
<!--- roll d20s scripts --->
var str = Math.floor(((Math.random() * 6) + 1) +((Math.random() * 6) + 1)+((Math.random() * 6) + 1));
var con = Math.floor(((Math.random() * 6) + 1) +((Math.random() * 6) + 1)+((Math.random() * 6) + 1));
var dex = Math.floor(((Math.random() * 6) + 1) +((Math.random() * 6) + 1)+((Math.random() * 6) + 1));
var int = Math.floor(((Math.random() * 6) + 1) +((Math.random() * 6) + 1)+((Math.random() * 6) + 1));
var chr = Math.floor(((Math.random() * 6) + 1) +((Math.random() * 6) + 1)+((Math.random() * 6) + 1));
var wis = Math.floor(((Math.random() * 6) + 1) +((Math.random() * 6) + 1)+((Math.random() * 6) + 1));
var point = 0 ;

document.getElementById('strength').innerHTML = str;
document.getElementById('constitution').innerHTML = con;
document.getElementById('dext').innerHTML = dex;
document.getElementById('intell').innerHTML = int;
document.getElementById('chris').innerHTML = chr;
document.getElementById('wisdom').innerHTML = wis;
document.getElementById('points').innerHTML = point;

<!--- base modifers scripts--->

var bstr = Math.floor((str-10)/2);
var bcon = Math.floor((con-10)/2);
var bdex = Math.floor((dex-10)/2);
var bint = Math.floor((int-10)/2);
var bchr = Math.floor((chr-10)/2);
var bwis = Math.floor((wis-10)/2);

document.getElementById('basestr').innerHTML = bstr;
document.getElementById('basecon').innerHTML = bcon;
document.getElementById('basedex').innerHTML = bdex;
document.getElementById('baseint').innerHTML = bint;
document.getElementById('basechr').innerHTML = bchr;
document.getElementById('basewis').innerHTML = bwis;


<!--- add/minus functions--->
function str_1()
{
    if (point > 0)
        str +=1;
        document.getElementById('strength').innerHTML = str;
    if (point > 0)
        point -=1;
        document.getElementById('points').innerHTML = point;
        var bstr = Math.floor((str-10)/2);
        document.getElementById('basestr').innerHTML = bstr;

    
}

function str_0()
{
    if (str > 0)
        point +=1
        document.getElementById('points').innerHTML = point;
    if (str > 0)
        str -=1
        document.getElementById('strength').innerHTML = str;
        var bstr = Math.floor((str-10)/2);
        document.getElementById('basestr').innerHTML = bstr;
}

function con_1()
{
    if (point > 0)
        con +=1
        document.getElementById('constitution').innerHTML = con;
    if (point > 0)
        point -=1;
        document.getElementById('points').innerHTML = point;
        var bcon = Math.floor((con-10)/2);
        document.getElementById('basecon').innerHTML = bcon;
}

function con_0()
{
    if (con > 0)
        point +=1
        document.getElementById('points').innerHTML = point;
    if (con > 0)
        con -=1
        document.getElementById('constitution').innerHTML = con;    
        var bcon = Math.floor((con-10)/2);
        document.getElementById('basecon').innerHTML = bcon;
}
function int_1()
{
    if (point > 0)
        int +=1
        document.getElementById('intell').innerHTML = int;
    if (point > 0)
        point -=1;
        document.getElementById('points').innerHTML = point;
        var bint = Math.floor((int-10)/2);
        document.getElementById('baseint').innerHTML = bint;
    
}

function int_0()
{
    if (int > 0)
        point +=1
        document.getElementById('points').innerHTML = point;
    if (int > 0)
        int -=1
        document.getElementById('intell').innerHTML = int;
        var bint = Math.floor((int-10)/2);
        document.getElementById('baseint').innerHTML = bint;
    
}

function dex_1()
{
    if (point > 0)
        dex +=1
        document.getElementById('dext').innerHTML = dex;
    if (point > 0)
        point -=1;
        document.getElementById('points').innerHTML = point;
        var bdex = Math.floor((dex-10)/2);
        document.getElementById('basedex').innerHTML = bdex;
}

function dex_0()
{
    if (dex > 0)
        point +=1
        document.getElementById('points').innerHTML = point;
    if (dex > 0)
        dex -=1
        document.getElementById('dext').innerHTML = dex; 
        var bdex = Math.floor((dex-10)/2);
        document.getElementById('basedex').innerHTML = bdex;
    
}

<!--- START HERE---!>
function chr_1()
{
    if (point > 0)
        chr +=1
        document.getElementById('chris').innerHTML = chr;
    if (point > 0)
        point -=1;
        document.getElementById('points').innerHTML = point;
        var bchr = Math.floor((chr-10)/2);
        document.getElementById('basechr').innerHTML = bchr;
}

function chr_0()
{
    if (chr > 0)
        point +=1
        document.getElementById('points').innerHTML = point;
    if (chr > 0)
        chr -=1
        document.getElementById('chris').innerHTML = chr;
        var bchr = Math.floor((chr-10)/2);
        document.getElementById('basechr').innerHTML = bchr;
    
}

function wis_1()
{
    if (point > 0)
        wis +=1
        document.getElementById('wisdom').innerHTML = wis;
    if (point > 0)
        point -=1;
        document.getElementById('points').innerHTML = point;
        var bwis = Math.floor((wis-10)/2);
        document.getElementById('basewis').innerHTML = bwis;
}

function wis_0()
{
    if (wis > 0)
        point +=1
        document.getElementById('points').innerHTML = point;
    if (wis > 0)
        wis -=1
        document.getElementById('wisdom').innerHTML = wis;  
        var bwis = Math.floor((wis-10)/2);
        document.getElementById('basewis').innerHTML = bwis;
}