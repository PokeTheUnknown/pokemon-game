document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById('gameArea');
    const player = document.getElementById('player');
    const monster = document.getElementById('monster');
    
    let playerPos = { x: 10, y: 10 };
    let monsterPos = { x: 300, y: 300 };
    let speed = 5;
  
    function movePlayer(e) {
      switch (e.key) {
        case 'ArrowUp': playerPos.y -= speed; break;
        case 'ArrowDown': playerPos.y += speed; break;
        case 'ArrowLeft': playerPos.x -= speed; break;
        case 'ArrowRight': playerPos.x += speed; break;
      }
      player.style.left = playerPos.x + 'px';
      player.style.top = playerPos.y + 'px';
      moveMonster();
    }
  
    function moveMonster() {
      let dx = playerPos.x - monsterPos.x;
      let dy = playerPos.y - monsterPos.y;
      let angle = Math.atan2(dy, dx);
      monsterPos.x += Math.cos(angle) * speed / 2;
      monsterPos.y += Math.sin(angle) * speed / 2;
      monster.style.left = monsterPos.x + 'px';
      monster.style.top = monsterPos.y + 'px';
    }
  
    document.addEventListener('keydown', movePlayer);
  });
  