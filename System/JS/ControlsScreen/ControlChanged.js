function HabilitarBody()
{
let methodRequisition=document.getElementById("method");
let title=document.getElementById("title");
let displayBodyRequisition=document.getElementById("displayBody");
if(methodRequisition.options[methodRequisition.selectedIndex].value==2)
{
title.innerHTML="(POST) Easy APIsMCD 1.0";

displayBodyRequisition.style.display="block";
SoundShowFields();
}
else
{
    title.innerHTML="(GET) Easy APIsMCD 1.0";

displayBodyRequisition.style.display="none";
}
}