let hero;
let food;
let lost;
let x = 0;
let y = 0;
let y2 = 0;
let x2 = 0;
let foodX = 0;
let foodY = 0;
let enemyX = 0;
let enemyY = 0;
let dx = 18;
let dy = 18;
let health = 100;
let dHealth = 0;


function setup() {
	createCanvas(1500, 1000);
	noStroke();
  foodX = random(50, 350);
  foodY = random(50, 350);
  enemyX = random(400, 700);
  enemyY = random(400, 700);
  
}

function preload() { // preload() runs once
  hero = loadImage("hero.png");
  food = loadImage("food.png");
  lost = loadImage("lost.jpg");
}

function draw() {
  background('#6AFFF1');
  hero.resize(0, 100);
  image(hero, x, y);
  food.resize(0, 75);
  image(food, foodX, foodY);
  fill(250, 0, 0);

  // движение врага
  if (x > enemyX) {
    enemyX = enemyX + 1;
  } else if (x < enemyX) {
    enemyX = enemyX - 1;
  }
  if (y > enemyY) {
    enemyY = enemyY + 1;
  } else if (y < enemyY) {
    enemyY = enemyY - 1;
  }
  rect(enemyX, enemyY, 75, 75);

  if (x > enemyX - 30 && x < enemyX + 30) {
    if (y > enemyY - 30 && y < enemyY + 30) {
      dHealth = dHealth - 1;
    }
  }

  //Функция, чтобы герой ел еду 
  if (x > foodX - 100 && x < foodX + 50) {
    if (y > foodY - 100 && y < y + 50) {
      foodX = random(100, 700);
      foodY = random(100, 700);
      dHealth = dHealth + 20;
    }
  }

  // условие поражения
  if (health <= 0) {
    lost.resize(0, width + 100);
    image(lost, 0, 0);
    health = 0;
    fill(255);
    textSize(50);
    text("ДАВАЙ", 30, 400);
    text("ПОИГРАЕМ", 30, 470);
    text("ЕЩЕ", 30, 540);
  } else {
    // оставшиеся жизни
    fill('#2CD133');
    if (health < 20) {
      fill(250, 0, 0);
    }
    health = 100 - 5 * millis() / 1000 + dHealth;
    if (health > 100) {
      health = 100;
    }
    rect(width - 130, 30, health, 30);
	}
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		x = x + dx;
	} else if (keyCode == LEFT_ARROW) {
		x = x - dx;
	} else if (keyCode == UP_ARROW) {
		y = y - dy;
	} else if (keyCode == DOWN_ARROW) {
		y = y + dy;
	}
}


