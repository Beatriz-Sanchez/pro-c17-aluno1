class Box {
    constructor(x,y,largura,altura,velocidadeX) {
      this.x = x;
      this.y = y;
      this.w = largura;
      this.h = altura;
      this.vx = velocidadeX;
    }
    
    show() {
      rect(this.x,this.y,this.w,this.h)
    }
    
    move() {
      this.x = this.x + this.vx;
    }
  
  }

  
