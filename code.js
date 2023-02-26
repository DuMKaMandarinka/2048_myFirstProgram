const field = document.querySelector('.field');
field.setAttribute('id',"field");
const cellSize = 100;
const indet =10;
let option =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];//свободные ячейки
let filled =[];//заполненные ячейки
let points = [];//очки ячеек
let Two_or_Four =[0,0,1,0,0,0,0,0,0,0]
let atribut =0;
//создание игрового поля
for (let i = 0; i <= 15; i++) { 
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.innerHTML = i;
  const left = i % 4;
  const top = (i - left) / 4;

  cell.style.left = `${ cellSize * left+indet*left+indet}px`;
  cell.style.top = `${ cellSize * top+indet*top+indet}px`;

  field.append(cell);
}
//начало игры
function start(){
 for(let j=0;j<2;j++)
 {
   random();
 }
}

document.addEventListener('keydown',function(e){
if(e.keyCode==38)
{
let a1=0;
let a2=1;
let a3=2;
let a4=3;
let points1 =0;
let points2 = 0;
let points3 =0;
let points4 = 0;
let index1 = 0;
let index2 = 0;
let index3 =0;
let index4 = 0;
let old_filled_test =[];
let filled_test = [];
let points_test = [];
for(let i=0;i<filled.length;i++)
{
  let a = filled[i];
  old_filled_test[i] =a;
}

for(let i=0;i<points.length;i++)
{
  let a = points[i];
  points_test[i] =a;
}


filled.sort(function(a, b) {
  return a - b;
});

for(let i=0;i<filled.length;i++)
{
  for(let j=0;j<old_filled_test.length;j++)
  {
    if(old_filled_test[j]==filled[i])
    {
     points[i]=points_test[j];
    }
  }
}

for(let i=0;i<filled.length;i++)
{
  let a = filled[i];
  filled_test[i] =a;
}

let array =filled_test.length;
for(let i=0,j=0;i<array;i++,j++)
{
  if((filled[i]%4==0)&&(filled[i]>=a1))
  {
    if(points1==points[i])
    {
       points[index1]=points[i]*2;
       points1=0;
       doAnimaionUp(filled_test[j],filled[index1]);
       const idElemetns = document.getElementById("id"+filled[index1]);
       searchValue(points[index1],idElemetns);
       deleteElement(filled[i]);
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a1);
    filled[i] = a1;
    a1 +=4;
    points1=points[i];
    index1=i;
    doAnimaionUp(filled_test[j],filled[i]);
    }
    
  }
  else if((filled[i]%4==1)&&(filled[i]>=a2))
  {
    if(points2==points[i])
    {
       points[index2]=points[i]*2;
       points2=0;
       doAnimaionUp(filled_test[j],filled[index2]);
      //  let aa = idValue+i;
       const idElemetns = document.getElementById("id"+filled[index2]);
       searchValue(points[index2],idElemetns);
      deleteElement(filled[i]);
      //  изменить id?хз
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a2);
    filled[i] = a2;
    a2 +=4;
    points2=points[i];
    index2=i;
    doAnimaionUp(filled_test[j],filled[i]);
    }
  }
  else if((filled[i]%4==2)&&(filled[i]>=a3))
  {
    if(points3==points[i])
    {
       points[index3]=points[i]*2;
       points3=0;
       doAnimaionUp(filled_test[j],filled[index3]);
      //  let aa = idValue+i;
       const idElemetns = document.getElementById("id"+filled[index3]);
       searchValue(points[index3],idElemetns);
       deleteElement(filled[i]);
      //  изменить id?хз
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a3);
    filled[i] = a3;
    a3 +=4;
    points3=points[i];
    index3=i;
    doAnimaionUp(filled_test[j],filled[i]);
    }
  }
  else if((filled[i]%4==3)&&(filled[i]>=a4))
  {
    if(points4==points[i])
    {
       points[index4]=points[i]*2;
       points4=0;
       doAnimaionUp(filled_test[j],filled[index4]);
      //  let aa = idValue+i;
       const idElemetns = document.getElementById("id"+filled[index4]);
       searchValue(points[index4],idElemetns);
       deleteElement(filled[i]);
      //  изменить id?хз
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a4);
    filled[i] = a4;
    a4 +=4;
    points4=points[i];
    index4=i;
    doAnimaionUp(filled_test[j],filled[i]);
    }
  }
}
let moveUp = false;
if(filled.length==filled_test.length){
  for(let i=0;i<filled.length;i++)
  {
    if(filled[i]!=filled_test[i]){
     moveUp =true;
    }
  }
}
else{
moveUp=true;
}
if(moveUp){
  newOption(filled_test,filled);
  random();
}
}
//////////////////////////////////////////////////////////
/////////////////////Движение ВНИЗ////////////////////////
//////////////////////////////////////////////////////////
else if(e.keyCode==40){
let a1=12;
let a2=13;
let a3=14;
let a4=15;
let points1 =0;
let points2 = 0;
let points3 =0;
let points4 = 0;
let index1 = 0;
let index2 = 0;
let index3 =0;
let index4 = 0;
let old_filled_test =[];
let filled_test = [];
let points_test = [];
for(let i=0;i<filled.length;i++)
{
  let a = filled[i];
  old_filled_test[i] =a;
}

for(let i=0;i<points.length;i++)
{
  let a = points[i];
  points_test[i] =a;
}


filled.sort(function(a, b) {
  return b-a;
});

for(let i=0;i<filled.length;i++)
{
  for(let j=0;j<old_filled_test.length;j++)
  {
    if(old_filled_test[j]==filled[i])
    {
     points[i]=points_test[j];
    }
  }
}

for(let i=0;i<filled.length;i++)
{
  let a = filled[i];
  filled_test[i] =a;
}

let array =filled_test.length;
for(let i=0,j=0;i<array;i++,j++)
{
  if((filled[i]%4==0)&&(filled[i]<=a1))
  {
    if(points1==points[i])
    {
       points[index1]=points[i]*2;
       points1=0;
       doAnimaionDown(filled_test[j],filled[index1]);
       const idElemetns = document.getElementById("id"+filled[index1]);
       searchValue(points[index1],idElemetns);
       deleteElement(filled[i]);
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a1);
    filled[i] = a1;
    a1 -=4;
    points1=points[i];
    index1=i;
    doAnimaionDown(filled_test[j],filled[i]);
    }
    
  }
  else if((filled[i]%4==1)&&(filled[i]<=a2))
  {
    if(points2==points[i])
    {
       points[index2]=points[i]*2;
       points2=0;
       doAnimaionDown(filled_test[j],filled[index2]);
      //  let aa = idValue+i;
       const idElemetns = document.getElementById("id"+filled[index2]);
      searchValue(points[index2],idElemetns);
      deleteElement(filled[i]);
      //  изменить id?хз
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a2);
    filled[i] = a2;
    a2 -=4;
    points2=points[i];
    index2=i;
    doAnimaionDown(filled_test[j],filled[i]);
    }
  }
  else if((filled[i]%4==2)&&(filled[i]<=a3))
  {
    if(points3==points[i])
    {
       points[index3]=points[i]*2;
       points3=0;
       doAnimaionDown(filled_test[j],filled[index3]);
      //  let aa = idValue+i;
       const idElemetns = document.getElementById("id"+filled[index3]);
       searchValue(points[index3],idElemetns);
       deleteElement(filled[i]);
      //  изменить id?хз
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a3);
    filled[i] = a3;
    a3 -=4;
    points3=points[i];
    index3=i;
    doAnimaionDown(filled_test[j],filled[i]);
    }
  }
  else if((filled[i]%4==3)&&(filled[i]<=a4))
  {
    if(points4==points[i])
    {
       points[index4]=points[i]*2;
       points4=0;
       doAnimaionDown(filled_test[j],filled[index4]);
      //  let aa = idValue+i;
       const idElemetns = document.getElementById("id"+filled[index4]);
       searchValue(points[index4],idElemetns);
       deleteElement(filled[i]);
      //  изменить id?хз
       points.splice(i,1);
       filled.splice(i,1);
       i--;
       array--;
      
    }
    else{
    var hiddenInput = document.getElementById("id"+filled[i]);
    hiddenInput.setAttribute("id", "id"+a4);
    filled[i] = a4;
    a4 -=4;
    points4=points[i];
    index4=i;
    doAnimaionDown(filled_test[j],filled[i]);
    }
  }
}
let moveUp = false;
if(filled.length==filled_test.length){
  for(let i=0;i<filled.length;i++)
  {
    if(filled[i]!=filled_test[i]){
     moveUp =true;
    }
  }
}
else{
moveUp=true;
}
if(moveUp){
  newOption(filled_test,filled);
  random();
}
}
/////////////////////////////////////////////////////
//////////////Движение ВЛЕВО////////////////////////
////////////////////////////////////////////////////
else if(e.keyCode==37){
  let a1=0;
  let a2=4;
  let a3=8;
  let a4=12;
  let points1 =0;
  let points2 = 0;
  let points3 =0;
  let points4 = 0;
  let index1 = 0;
  let index2 = 0;
  let index3 =0;
  let index4 = 0;
  let old_filled_test =[];
  let filled_test = [];
  let points_test = [];
  for(let i=0;i<filled.length;i++)
  {
    let a = filled[i];
    old_filled_test[i] =a;
  }
  
  for(let i=0;i<points.length;i++)
  {
    let a = points[i];
    points_test[i] =a;
  }
  
  
  filled.sort(function(a, b) {
    return a-b;
  });
  
  for(let i=0;i<filled.length;i++)
  {
    for(let j=0;j<old_filled_test.length;j++)
    {
      if(old_filled_test[j]==filled[i])
      {
       points[i]=points_test[j];
      }
    }
  }
  
  for(let i=0;i<filled.length;i++)
  {
    let a = filled[i];
    filled_test[i] =a;
  }
  
  let array =filled_test.length;
  for(let i=0,j=0;i<array;i++,j++)
  {
    if((Math.floor(filled[i]/4)==0)&&(filled[i]>=a1))
    {
      console.log("Я зашел сюда");
      if(points1==points[i])
      {
         points[index1]=points[i]*2;
         points1=0;
         doAnimaionLeft(filled_test[j],filled[index1]);
         const idElemetns = document.getElementById("id"+filled[index1]);
         searchValue(points[index1],idElemetns);
         deleteElement(filled[i]);
         points.splice(i,1);
         filled.splice(i,1);
         i--;
         array--;
        
      }
      else{
      var hiddenInput = document.getElementById("id"+filled[i]);
      hiddenInput.setAttribute("id", "id"+a1);
      filled[i] = a1;
      a1 +=1;
      points1=points[i];
      index1=i;
      doAnimaionLeft(filled_test[j],filled[i]);
      }
      
    }
    else if((Math.floor(filled[i]/4)==1)&&(filled[i]>=a2))
    {
      if(points2==points[i])
      {
         points[index2]=points[i]*2;
         points2=0;
         doAnimaionLeft(filled_test[j],filled[index2]);
        //  let aa = idValue+i;
         const idElemetns = document.getElementById("id"+filled[index2]);
        searchValue(points[index2],idElemetns);
        deleteElement(filled[i]);
        //  изменить id?хз
         points.splice(i,1);
         filled.splice(i,1);
         i--;
         array--;
        
      }
      else{
      var hiddenInput = document.getElementById("id"+filled[i]);
      hiddenInput.setAttribute("id", "id"+a2);
      filled[i] = a2;
      a2 +=1;
      points2=points[i];
      index2=i;
      doAnimaionLeft(filled_test[j],filled[i]);
      }
    }
    else if((Math.floor(filled[i]/4)==2)&&(filled[i]>=a3))
    {
      if(points3==points[i])
      {
         points[index3]=points[i]*2;
         points3=0;
         doAnimaionLeft(filled_test[j],filled[index3]);
        //  let aa = idValue+i;
         const idElemetns = document.getElementById("id"+filled[index3]);
         searchValue(points[index3],idElemetns);
         deleteElement(filled[i]);
        //  изменить id?хз
         points.splice(i,1);
         filled.splice(i,1);
         i--;
         array--;
        
      }
      else{
      var hiddenInput = document.getElementById("id"+filled[i]);
      hiddenInput.setAttribute("id", "id"+a3);
      filled[i] = a3;
      a3 +=1;
      points3=points[i];
      index3=i;
      doAnimaionLeft(filled_test[j],filled[i]);
      }
    }
    else if((Math.floor(filled[i]/4)==3)&&(filled[i]>=a4))
    {
      if(points4==points[i])
      {
         points[index4]=points[i]*2;
         points4=0;
         doAnimaionLeft(filled_test[j],filled[index4]);
        //  let aa = idValue+i;
         const idElemetns = document.getElementById("id"+filled[index4]);
         searchValue(points[index4],idElemetns);
         deleteElement(filled[i]);
        //  изменить id?хз
         points.splice(i,1);
         filled.splice(i,1);
         i--;
         array--;
        
      }
      else{
      var hiddenInput = document.getElementById("id"+filled[i]);
      hiddenInput.setAttribute("id", "id"+a4);
      filled[i] = a4;
      a4 +=1;
      points4=points[i];
      index4=i;
      doAnimaionLeft(filled_test[j],filled[i]);
      }
    }
  }
  let moveUp = false;
  if(filled.length==filled_test.length){
    for(let i=0;i<filled.length;i++)
    {
      if(filled[i]!=filled_test[i]){
       moveUp =true;
      }
    }
  }
  else{
  moveUp=true;
  }
  if(moveUp){
    newOption(filled_test,filled);
    random();
  }
  }
/////////////////////////////////////////////////////
//////////////Движение ВПРАВО////////////////////////
////////////////////////////////////////////////////
else if(e.keyCode==39){
    let a1=3;
    let a2=7;
    let a3=11;
    let a4=15;
    let points1 =0;
    let points2 = 0;
    let points3 =0;
    let points4 = 0;
    let index1 = 0;
    let index2 = 0;
    let index3 =0;
    let index4 = 0;
    let old_filled_test =[];
    let filled_test = [];
    let points_test = [];
    for(let i=0;i<filled.length;i++)
    {
      let a = filled[i];
      old_filled_test[i] =a;
    }
    
    for(let i=0;i<points.length;i++)
    {
      let a = points[i];
      points_test[i] =a;
    }
    
    
    filled.sort(function(a, b) {
      return b-a;
    });
    
    for(let i=0;i<filled.length;i++)
    {
      for(let j=0;j<old_filled_test.length;j++)
      {
        if(old_filled_test[j]==filled[i])
        {
         points[i]=points_test[j];
        }
      }
    }
    
    for(let i=0;i<filled.length;i++)
    {
      let a = filled[i];
      filled_test[i] =a;
    }
    
    let array =filled_test.length;
    for(let i=0,j=0;i<array;i++,j++)
    {
      if((Math.floor(filled[i]/4)==0)&&(filled[i]<=a1))
      {
        if(points1==points[i])
        {
           points[index1]=points[i]*2;
           points1=0;
           doAnimaionRight(filled_test[j],filled[index1]);
           const idElemetns = document.getElementById("id"+filled[index1]);
           searchValue(points[index1],idElemetns);
           deleteElement(filled[i]);
           points.splice(i,1);
           filled.splice(i,1);
           i--;
           array--;
          
        }
        else{
        var hiddenInput = document.getElementById("id"+filled[i]);
        hiddenInput.setAttribute("id", "id"+a1);
        filled[i] = a1;
        a1 -=1;
        points1=points[i];
        index1=i;
        doAnimaionRight(filled_test[j],filled[i]);
        }
        
      }
      else if((Math.floor(filled[i]/4)==1)&&(filled[i]<=a2))
      {
        if(points2==points[i])
        {
           points[index2]=points[i]*2;
           points2=0;
           doAnimaionRight(filled_test[j],filled[index2]);
          //  let aa = idValue+i;
           const idElemetns = document.getElementById("id"+filled[index2]);
          searchValue(points[index2],idElemetns);
          deleteElement(filled[i]);
          //  изменить id?хз
           points.splice(i,1);
           filled.splice(i,1);
           i--;
           array--;
          
        }
        else{
        var hiddenInput = document.getElementById("id"+filled[i]);
        hiddenInput.setAttribute("id", "id"+a2);
        filled[i] = a2;
        a2 -=1;
        points2=points[i];
        index2=i;
        doAnimaionRight(filled_test[j],filled[i]);
        }
      }
      else if((Math.floor(filled[i]/4)==2)&&(filled[i]<=a3))
      {
        if(points3==points[i])
        {
           points[index3]=points[i]*2;
           points3=0;
           doAnimaionRight(filled_test[j],filled[index3]);
          //  let aa = idValue+i;
           const idElemetns = document.getElementById("id"+filled[index3]);
           searchValue(points[index3],idElemetns);
           deleteElement(filled[i]);
          //  изменить id?хз
           points.splice(i,1);
           filled.splice(i,1);
           i--;
           array--;
          
        }
        else{
        var hiddenInput = document.getElementById("id"+filled[i]);
        hiddenInput.setAttribute("id", "id"+a3);
        filled[i] = a3;
        a3 -=1;
        points3=points[i];
        index3=i;
        doAnimaionRight(filled_test[j],filled[i]);
        }
      }
      else if((Math.floor(filled[i]/4)==3)&&(filled[i]<=a4))
      {
        if(points4==points[i])
        {
           points[index4]=points[i]*2;
           points4=0;
           doAnimaionRight(filled_test[j],filled[index4]);
          //  let aa = idValue+i;
           const idElemetns = document.getElementById("id"+filled[index4]);
           searchValue(points[index4],idElemetns);
           deleteElement(filled[i]);
          //  изменить id?хз
           points.splice(i,1);
           filled.splice(i,1);
           i--;
           array--;
          
        }
        else{
        var hiddenInput = document.getElementById("id"+filled[i]);
        hiddenInput.setAttribute("id", "id"+a4);
        filled[i] = a4;
        a4 -=1;
        points4=points[i];
        index4=i;
        doAnimaionRight(filled_test[j],filled[i]);
        }
      }
    }
    let moveUp = false;
    if(filled.length==filled_test.length){
      for(let i=0;i<filled.length;i++)
      {
        if(filled[i]!=filled_test[i]){
         moveUp =true;
        }
      }
    }
    else{
    moveUp=true;
    }
    if(moveUp){
      newOption(filled_test,filled);
      random();
    }
    }
});

function random(){
  var random = option[Math.floor(Math.random()*option.length)];//выбор случайного элемента из доступных ячеек
  let i = option.indexOf(random);
  if(i >= 0) {
    option.splice(i,1);
  }
  filled.push(random);
  //
  const value = document.createElement('div');
  value.className = 'value';
  value.setAttribute('id',"id"+random);
  // atribut++;
  var meaning =Two_or_Four[Math.floor(Math.random()*Two_or_Four.length)]
  if(meaning==1)
  {
    points.push(4);
    value.innerHTML = 4;
    const left1 = random % 4;
    const top1 = (random - left1) / 4;
    
    value.style.left = `${ cellSize * left1+indet*left1+indet}px`;
    value.style.top = `${ cellSize * top1+indet*top1+indet}px`;
    value.style.background = `rgb(245, 234, 197)`;
    value.style.border="3px solid rgb(245, 234, 197)";
  }
  else{
    points.push(2);
    value.innerHTML = 2;
    const left1 = random % 4;
    const top1 = (random - left1) / 4;
    
    value.style.left = `${ cellSize * left1+indet*left1+indet}px`;
    value.style.top = `${ cellSize * top1+indet*top1+indet}px`;
    
  }
  field.appendChild(value);
}


function searchValue(point,htmlElement){
// if(point==2)
// {
//   htmlElement.innerHTML = 2;
//   const left1 = location % 4;
//   const top1 = (location - left1) / 4;
//   htmlElement.style.left = `${ cellSize * left1+indet*left1+indet}px`;
//   htmlElement.style.top = `${ cellSize * top1+indet*top1+indet}px`;
// }
if(point==4)
{
  htmlElement.innerHTML = 4;
  htmlElement.style.background = `rgb(245, 234, 197)`;
  htmlElement.style.border="3px solid rgb(245, 234, 197)";
}
else if(point==8)
{
  htmlElement.innerHTML = 8;
  htmlElement.style.background = `rgb(255, 153, 1)`;
  htmlElement.style.border="3px solid rgb(255, 153, 1)";
}
else if(point==16)
{
  htmlElement.innerHTML = 16;
  htmlElement.style.background = `rgb(247, 155, 155)`;
  htmlElement.style.border="3px solid rgb(247, 155, 155)";
}
else if(point==32)
{
  htmlElement.innerHTML = 32;
  htmlElement.style.background = `rgb(243, 89, 89)`;
  htmlElement.style.border="3px solid rgb(243, 89, 89)";
}
else if(point==64)
{
  htmlElement.innerHTML = 64;
  htmlElement.style.background = `rgb(252, 53, 4)`;
  htmlElement.style.border="3px solid rgb(252, 53, 4)";
}
else if(point==128)
{
  htmlElement.innerHTML = 128;
  htmlElement.style.background = `rgb(255, 238, 142)`;
  htmlElement.style.border="3px solid rgb(255, 238, 142)";
  htmlElement.style.fontSize = "75px";
}
else if(point==256)
{
  htmlElement.innerHTML = 256;
  htmlElement.style.background = `rgb(250, 232, 133)`;
  htmlElement.style.border="3px solid rgb(250, 232, 133)";
  htmlElement.style.fontSize = "68px";
  
}
else if(point==512)
{
  htmlElement.innerHTML = 512;
  htmlElement.style.background = `rgb(250, 231, 121)`;
  htmlElement.style.border="3px solid rgb(250, 231, 121)";
  htmlElement.style.fontSize = "68px";
}
else if(point==1024)
{
  htmlElement.innerHTML = 1024;
  htmlElement.style.background = `rgb(248, 227, 105)`;
  htmlElement.style.border="3px solid rgb(248, 227, 105)";
  htmlElement.style.fontSize = "58px";
}
else if(point==2048)
{
  htmlElement.innerHTML = 2048;
  htmlElement.style.background = `rgb(252, 226, 80)`;
  htmlElement.style.border="3px solid rgb(252, 226, 80)";
  htmlElement.style.fontSize = "58px";
}
}

function newOption(oldFilled,newFilled){
for(let i=0;i<oldFilled.length;i++)
{
 option.push(oldFilled[i])
}
for(let i=0;i<newFilled.length;i++)
{
  let j = option.indexOf(newFilled[i]);
  if(j >= 0) {
    option.splice(j,1);
  }
}
}
function doAnimaionUp(oldFilled,newFilled){
  {
  var x = document.getElementById("id"+newFilled);
  var pos0 =0;
  var pos1 = (cellSize+indet)*((Math.abs(oldFilled-newFilled))/4);
  var id = setInterval(function(){
    if(pos0==pos1)
    {
      clearInterval(id);
    }
    else{
      for (var i = 0; i < 10; i++){
        pos0++;
        x.style.top = cellSize * ((oldFilled - oldFilled%4) / 4)+indet*((oldFilled - oldFilled%4)/4)+indet - pos0 + 'px';
      }
     
    }
  },1) 
  } 
}
function doAnimaionDown(oldFilled,newFilled){
  {
  var x = document.getElementById("id"+newFilled);
  var pos0 =0;
  var pos1 = (cellSize+indet)*((Math.abs(oldFilled-newFilled))/4);
  var id = setInterval(function(){
    if(pos0==pos1)
    {
      clearInterval(id);
    }
    else{
      for (var i = 0; i < 10; i++){
        pos0++;
        x.style.top = cellSize * ((oldFilled - oldFilled%4) / 4)+indet*((oldFilled - oldFilled%4)/4)+indet + pos0 + 'px';
      }
     
    }
  },1) 
  } 
}
function doAnimaionLeft(oldFilled,newFilled){
  {
  var x = document.getElementById("id"+newFilled);
  var pos0 =0;
  var pos1 = (cellSize+indet)*((Math.abs(oldFilled-newFilled))%4);
  var id = setInterval(function(){
    if(pos0==pos1)
    {
      clearInterval(id);
    }
    else{
      for (var i = 0; i < 10; i++){
        pos0++;
        x.style.left = cellSize * (oldFilled % 4)+indet*(oldFilled%4)+indet - pos0 + 'px';
      }
     
    }
  },1) 
  } 
}
function doAnimaionRight(oldFilled,newFilled){
  {
  var x = document.getElementById("id"+newFilled);
  var pos0 =0;
  var pos1 = (cellSize+indet)*((Math.abs(oldFilled-newFilled))%4);
  var id = setInterval(function(){
    if(pos0==pos1)
    {
      clearInterval(id);
    }
    else{
      for (var i = 0; i < 10; i++){
        pos0++;
        x.style.left = cellSize * (oldFilled % 4)+indet*(oldFilled%4)+indet + pos0 + 'px';
      }
     
    }
  },1) 
  } 
}
function deleteElement(number){
  var d = document.getElementById("field");
  var d_nested = document.getElementById("id"+number);
  var throwawayNode = d.removeChild(d_nested);
}

start();