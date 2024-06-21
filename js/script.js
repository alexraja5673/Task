localStorage.setItem('score',0)
let scores = document.getElementById('user_score')
let user = localStorage.getItem('score')

scores.innerHTML=user;
function startGame(id,str) {
  var mine = str
  var bc
  let choices = document.getElementById('list_choice')
  choices.classList.add('d-none')

  let game = document.getElementById('start')
  game.classList.add('d-flex')

 let yours =  `<div class="col-6">
				<div><h5>You Picked</h5></div>
				<div class="col-8 m-auto choice_home1">
					<div class='icon_btns ${str}'>
						<img src=./assets/images/${id} alt="load" />
					</div>
				</div>	
	</div>
  <div class="col-6">
				<div><h5>The House Picked</h5></div>
				<div class="col-8 m-auto choice_home1">
					<div class="icon_btns empty">
					</div>
				</div>
			</div>`


  game.innerHTML=yours;

  let img = ['icon-paper.svg','icon-scissors.svg','icon-rock.svg']
  let name = ['paper','scissor','rock']
  var num = Math.floor(Math.random() * 2) + 1
  setTimeout(()=>{
  
    let final =  `<div class="col-6">
				<div><h5>You Picked</h5></div>
				<div class="col-8 m-auto choice_home1">
					<div class='icon_btns ${str}'>
						<img src=./assets/images/${id} alt="load" />
					</div>
				</div>	
	</div>
  <div class="col-6">
				<div><h5>The House Picked</h5></div>
				<div class="col-8 m-auto choice_home1">
					<div class='icon_btns ${name[num]}'>
          <img src=./assets/images/${img[num]} alt="load" />
					</div>
				</div>
			</div>`
      game.innerHTML=final;
      bc = name[num]
  },3000)

  setTimeout(()=>{
    var flag 
    if(mine == 'rock'){
      if(bc == 'rock'){
        falg = 'draw'
      }else if( bc == 'scissor'){
        flag = 'win'
      }else{
        flag = 'lose'
      }
    }else if(mine == 'scissor'){
      if(bc == 'scissor'){
        falg = 'draw'
      }else if( bc == 'rock'){
        flag = 'lose'
      }else{
        flag = 'win'
      }
    }else{
      if(bc == 'paper'){
        falg = 'draw'
      }else if( bc == 'rock'){
        flag = 'win'
      }else{
        flag = 'lose'
      }
    }
    let result1 =  `<div class="col-md-4 col-6">
				<div><h5>You Picked</h5></div>
				<div class="col-8 m-auto choice_home1">
					<div class='icon_btns ${str}'>
						<img src=./assets/images/${id} alt="load" />
					</div>
				</div>	
	</div>
  <div class='col-md-4 col-6 result_final3'>
    <div class='match_result'><h5>You Lose</h5></div>
    <div>
      <div class='play_again' onclick="Retake()">Play Again</div> 
    </div>
  </div>
  <div class="col-md-4 col-6">
				<div><h5>The House Picked</h5></div>
				<div class="col-8 m-auto choice_home1 pulse">
					<div class='icon_btns ${name[num]}'>
          <img src=./assets/images/${img[num]} alt="load" />
					</div>
				</div>
			</div>`

      let result2 =  `<div class="col-md-4 col-6 result_final1" >
      <div><h5>You Picked</h5></div>
      <div class="col-8 m-auto choice_home1 pulse">
        <div class='icon_btns ${str}'>
          <img src=./assets/images/${id} alt="load" />
        </div>
      </div>	
</div>
<div class='col-md-4 col-6 result_final3'>
  <div class='match_result'><h5>You Win</h5></div>
  <div>
    <div class='play_again' onclick="Retake()">Play Again</div> 
  </div>
</div>
<div class="col-md-4 col-6 result_final2">
      <div><h5>The House Picked</h5></div>
      <div class="col-8 m-auto choice_home1">
        <div class='icon_btns ${name[num]}'>
        <img src=./assets/images/${img[num]} alt="load" />
        </div>
      </div>
    </div>`

    let result3 =  `<div class="col-md-4 col-6">
      <div><h5>You Picked</h5></div>
      <div class="col-8 m-auto choice_home1">
        <div class='icon_btns ${str}'>
          <img src=./assets/images/${id} alt="load" />
        </div>
      </div>	
</div>
<div class='col-md-4 col-6 result_final3'>
  <div class='match_result'><h5>Draw</h5></div>
  <div>
    <div class='play_again' onclick="Retake()">Play Again</div> 
  </div>
</div>
<div class="col-md-4 col-6">
      <div><h5>The House Picked</h5></div>
      <div class="col-8 m-auto choice_home1">
        <div class='icon_btns ${name[num]}'>
        <img src=./assets/images/${img[num]} alt="load" />
        </div>
      </div>
    </div>`

    if(flag == 'win'){
      game.innerHTML=result2;
      let scr = JSON.parse(localStorage.getItem('score'))
      
      localStorage.setItem('score',scr+1)

      let scores = document.getElementById('user_score')
      scores.innerHTML=scr+1;
    }else if(flag == 'lose'){
      game.innerHTML=result1;
    }else{
      game.innerHTML=result3;
    }
  },4000)


}

function Retake(){
  let choices = document.getElementById('list_choice')
  choices.classList.remove('d-none')
  choices.classList.add('choices')

  let game = document.getElementById('start')
  game.classList.remove('d-flex')
  game.classList.add('game_start')
}