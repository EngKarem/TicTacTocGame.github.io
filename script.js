let game = document.querySelector('.game');
let square = document.querySelectorAll('.square');
let title = document.getElementById('title');
let turn = "Player 1 Turn";
let squares=[];
let count =0;
//Disable Selection
document.onselectstart =()=>{ return false;}
document.onmousedown =()=>{return false;}

function play(id){
  count++;

  let winner = title.innerHTML.split(" ")
  let element = document.getElementById(id)
  if(element.innerHTML ==="")
  {
    if(turn==="Player 1 Turn")
    {
      element.innerHTML = 'X';
      turn = "Player 2 Turn";
    }
    else{
      element.innerHTML = 'O';
      turn = "Player 1 Turn";
    }

    if(CheckWinner())
    {
      document.body.style.pointerEvents= 'none'
      title.innerHTML = `${winner[0]} ${winner[1]} Win`;
    }
    else
    {
      if(count ===9)
      {
        title.innerHTML = "Draw"
        setInterval(()=>{
          title.innerHTML+='.'
        },1000)
        setTimeout(()=>{window.location.reload()},4000)
      }
      else
        title.innerHTML = turn;
    }

  }
}

function end(x,y,z){
  document.getElementById("item"+x).style.backgroundColor = '#a6c2de';
  document.getElementById("item"+y).style.backgroundColor = '#a6c2de';
  document.getElementById("item"+z).style.backgroundColor = '#a6c2de';
  setInterval(()=>{
    title.innerHTML+='.'
  },1000)
  setTimeout(()=>{window.location.reload()},4000)
  return true
}

function CheckWinner(){

  for(let i =1;i<10;i++)
    squares[i] = document.getElementById("item"+i).innerHTML;

  // Horizontal
  if( squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !=="" )
    return end(1,2,3);
  else if( squares[4] === squares[5] && squares[4] === squares[6] && squares[4] !=="" )
    return end(4,5,6);
  else if( squares[7] === squares[8] && squares[7] === squares[9] && squares[7] !=="" )
    return end(7,8,9);

  // Vertical
  else if( squares[1] === squares[4] && squares[1] === squares[7] && squares[1] !=="" )
    return end(1,4,7);

  else if( squares[2] === squares[5] && squares[2] === squares[8] && squares[2] !=="" )
    return end(2,5,8);

  else if( squares[3] === squares[6] && squares[3] === squares[9] && squares[3] !=="" )
    return end(3,6,9);

  // Diagonal
  else if( squares[1] === squares[5] && squares[1] === squares[9] && squares[1] !=="" )
    return end(1,5,9);

  else if( squares[3] === squares[5] && squares[3] === squares[7] && squares[3] !=="" )
    return end(3,5,7);
  else
    return false

}
