export default function(time){
 var date=new Date(time);
 var y=date.getFullYear();
 var m=(date.getMonth()+1+'').padStart(2,'0');
 var d=(date.getDate()+'').padStart(2,'0');
 return `${y}-${m}-${d}`
}