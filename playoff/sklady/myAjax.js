// Ajax support for Teamy, jfr'2008
var xmlhttp;
var spanid;
function loadIt(url,sid){
 xmlhttp=XHobj();
 if(xmlhttp!=null){
  spanid=sid;
  xmlhttp.onreadystatechange=stateChange;
  xmlhttp.open("GET",url+"?x="+new Date().getTime(),true);
  xmlhttp.send(null);
 }
}
function XHobj(){
 if(typeof XMLHttpRequest!="undefined") return new XMLHttpRequest();
 var xhrVersion=["Microsoft.XMLHTTP","MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
 for(var i=0;i<xhrVersion.length;i++){
  try{
   var xhrObj=new ActiveXObject(xhrVersion[i]);
   return xhrObj;
  } catch(e){}
 }
 return null;
}
function stateChange(){
 if(xmlhttp.readyState==4){
  if(xmlhttp.status==200){
   document.getElementById(spanid).innerHTML=xmlhttp.responseText;
  }
 }
}
