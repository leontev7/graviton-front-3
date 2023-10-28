import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fortune-wheel',
  templateUrl: './fortune-wheel.component.html',
  styleUrls: ['./fortune-wheel.component.css']
})
export class FortuneWheelComponent implements OnInit {

  COLORS = ["#4094de", "royalblue", "#7741e7"];
  values = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'];

  used: boolean = false;
  stopped: boolean = false;

  // @ts-ignore
  @ViewChild("wheel") wheel: ElementRef<HTMLCanvasElement>;
  // @ts-ignore
  @ViewChild("spin") spin: ElementRef;

  sectors: any[] = [];

  // @ts-ignore
  tot;
  // @ts-ignore
  ctx;
  // @ts-ignore
  wheelWidth;
  // @ts-ignore
  wheelRadius;
  // @ts-ignore
  TAU;
  // @ts-ignore
  arc0;

  friction = 0.999; // 0.995=soft, 0.99=mid, 0.98=hard
  angVel = 0; // Angular velocity
  ang = 0; // Angle in radians
  // @ts-ignore
  lastSelection;

  ngOnInit() {
    /*let lastAngle = localStorage.getItem("fortune-wheel-angle");
    let lastSelection = localStorage.getItem("fortune-wheel-last-selection");
    if (lastSelection)
      this.lastSelection = Number(lastSelection);
    if (lastAngle)
      this.ang = Number(lastAngle);
    this.used = localStorage.getItem("startBalance") != undefined;
    this.stopped = this.used;*/

    this.sectors = this.values.map((opts, i) => {
      return {
        color: this.COLORS[(i >= this.COLORS.length ? i + 1 : i) % this.COLORS.length],
        label: opts
      };
    });
  }

  ngDoCheck(): void {
    requestAnimationFrame(this.frame.bind(this));
  }

  ngAfterViewInit(): void {
    this.createWheel();
  }

  createWheel() {
    this.ctx = this.wheel.nativeElement.getContext("2d");
    this.wheelWidth = this.ctx.canvas.width;
    this.tot = this.sectors.length;
    this.wheelRadius = this.wheelWidth / 2;
    this.TAU = 2 * Math.PI;

    this.arc0 = this.TAU / this.sectors.length;
    this.sectors.forEach((sector, i) => this.drawSector(sector, i));

    this.ctx.strokeStyle = 'whitesmoke';
    this.ctx.lineWidth = 3; // Толщина границы
    for (let i = 0; i < this.sectors.length; i++) {
      const ang = this.arc0 * i;
      this.ctx.beginPath();
      this.ctx.moveTo(this.wheelRadius, this.wheelRadius);
      this.ctx.lineTo(this.wheelRadius + this.wheelRadius * Math.cos(ang), this.wheelRadius + this.wheelRadius * Math.sin(ang));
      this.ctx.stroke();
    }

    this.rotate();
  }

  spinner() {
    if (!this.angVel && !this.used) this.angVel = Math.random() * (0.1 - 0.05) + 0.05;
    this.used = true;
  }

  getIndex = () =>
    Math.floor(this.tot - (this.ang / this.TAU) * this.tot) % this.tot;

  // @ts-ignore
  drawSector(sector, i) {
    const ang = this.arc0 * i;

    this.ctx.save();
    // COLOR
    this.ctx.beginPath();
    this.ctx.fillStyle = sector.color;
    this.ctx.moveTo(this.wheelRadius, this.wheelRadius);
    this.ctx.arc(this.wheelRadius, this.wheelRadius, this.wheelRadius, ang, ang + this.arc0);
    this.ctx.lineTo(this.wheelRadius, this.wheelRadius);
    this.ctx.fill();

    // TEXT
    this.ctx.translate(this.wheelRadius, this.wheelRadius);
    this.ctx.rotate(ang + this.arc0 / 2);
    this.ctx.textAlign = "left";
    this.ctx.fillStyle = "whitesmoke";
    this.ctx.font = "bold 20px sans-serif";
    this.ctx.fillText(sector.label, (this.wheelRadius * 0.6), 10);

    this.ctx.restore();
  }


  rotate() {
    const sector = this.sectors[this.getIndex()];
    this.ctx.canvas.style.transform = `rotate(${this.ang - Math.PI / 2}rad)`;
    this.spin.nativeElement.textContent = !this.used ? "Крутить" : sector.label;
    if (!this.stopped) {
      this.lastSelection = !this.angVel ? this.lastSelection : this.getIndex();
    }
    this.spin.nativeElement.style.background = sector.color;
  }

  frame() {
    if (!this.angVel) return;

    this.angVel *= this.friction; // Decrement velocity by friction
    if (this.angVel < 0.0001) {
      this.angVel = 0;
      this.stopped = true;
      localStorage.setItem("fortune-wheel-angle", this.ang.toString());
      localStorage.setItem("fortune-wheel-last-selection", this.lastSelection.toString());
      let balance = this.values.at(this.lastSelection);
      if (balance)
        localStorage.setItem("startBalance", balance);
    } // Bring to stop
    this.ang += this.angVel; // Update angle
    this.ang %= this.TAU; // Normalize angle
    this.rotate();
  }
}
