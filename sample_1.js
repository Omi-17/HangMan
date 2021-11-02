
let key = ['S', 'A', 'M', 'P', 'L', 'E'];
let que = [];
let st = "";
for(i = 0; i < key.length; i++)
{
    if(key[i] == " ")
    que.push(" ");
    else
    que.push("_");
}
for(i = 0; i < que.length; i++)
{
    st = st + que[i] + " ";
}
console.log(st);
let s = prompt('Enter your name : ');
console.log(s);