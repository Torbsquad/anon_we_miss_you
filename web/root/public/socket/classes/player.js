class Player extends GameObject {
  constructor() {
    super()
    this.x = 10
    this.y = 10
    this.width = 20
    this.height = 40

    this.speed = 4
  }

  logic() {
    if (inputs['ArrowUp'] || inputs['w']) {
      this.y -= this.speed
    }
    if (inputs['ArrowDown'] || inputs['s']) {
      this.y += this.speed
    }
    if (inputs['ArrowLeft'] || inputs['a']) {
      this.x -= this.speed
    }
    if (inputs['ArrowRight'] || inputs['d']) {
      this.x += this.speed
    }
    // console.log(inputs)
  }

  toData() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }
}