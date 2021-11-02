var fs = require('fs');

let s = '', st = '';
let key = [], que = [];

var file = fs.readFileSync('game.txt', 'utf8');

for(i = 0; i<file.length; i++)
{
  if(file.charAt(i) == '.')
  for(j = 0; j < s.length; j++)
  {
    key[j] = s.charAt(j);
  }
  for(j = 0; j < key.length; j++)
  {
    if(key[j] == ' ')
    que[j].push(' ');
    else
    que[j].push('_');
  }

  t = 0;
  c = 1;
  k = 0;

  for(j = 0; j < que.length; j++)
  {
    st = st + que[j] + ' ';
  }
  console.log(st);
  st = '';
  console.log('Turns Remaining : 6');

  while(k < 6)
  {
    for(j = 0; j < que.length; j++)
    {
      if(que[j] != '_')
      t = t + 1;
      else
      t = 0;
      break;
    }
    
  }
}
