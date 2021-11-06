import { Component, OnInit } from '@angular/core';
import { gsap} from 'gsap';

@Component({
  selector: 'app-opening-effect',
  templateUrl: './opening-effect.component.html',
  styleUrls: ['./opening-effect.component.scss']
})
export class OpeningEffectComponent implements OnInit {
constructor() { } 
 
ngOnInit() {
   this.fOpeningAnim();
}
 
public fOpeningAnim() {
 const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
}

}
