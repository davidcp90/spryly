import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'spr-profile-tour',
  template: require('./profile-tour.component.html')
})
export class ProfileTourComponent implements AfterViewInit {
 ngAfterViewInit() {
   setTimeout(() => {
      this.firstStep();
    }, 100);
 }
  firstStep() {
    let aim = document.getElementById('first-experience');
    let aim_pos = this.getPosition(aim);
    let step = document.getElementById('first-step');
    let offX = 0;
    let offY = 0;
    let arrow_pos = '';
    step.style.width = '158px';
    step.className += ' active';
    if (window.innerWidth > 1024) {
      offY = aim_pos.y + Math.round(aim.offsetHeight / 4);
      offX = aim_pos.x - 168;
      arrow_pos = 'middle-right';
    } else {
      offX = aim_pos.x;
      offY = aim_pos.y + aim.offsetHeight;
      arrow_pos = 'top-middle';
    }
    this.setBox(step, offX, offY);
    this.setArrow(step, arrow_pos);
  }
  secondStep() {
    let aim = document.getElementById('first-experience').getElementsByClassName('people')[0];
    let aim_pos = this.getPosition(aim);
    let step = document.getElementById('second-step');
    step.className += ' active';
    step.style.width = '199px';
    let offY = aim_pos.y - ((step.offsetHeight / 2) + 16);
    let offX = aim_pos.x - 209;
    this.setBox(step, offX, offY);
    this.setArrow(step, 'middle-right');
  }
  thirdStep() {
    let aim = (window.innerWidth > 1024) ? document.getElementById('add-btn') : document.getElementById('add-btn-xs') ;
    let aim_pos = this.getPosition(aim);
    let step = document.getElementById('third-step');
    let offX = 0;
    let offY = 0;
    step.style.width = '200px';
    step.className += ' active';
    if (window.innerWidth > 1024) {
      offY = aim_pos.y - ((step.offsetHeight / 2) + 16)                                                          ;
      offX = aim_pos.x - 50;
    } else {
      offX = aim_pos.x;
      offY = aim_pos.y + aim.offsetHeight;
    }
    this.setBox(step, offX, offY);
    this.setArrow(step, 'bottom-right');
  }
  lastStep() {
    let aim = document.getElementById('search-box');
    let aim_pos = this.getPosition(aim);
    console.log(aim_pos);
    let step = document.getElementById('last-step');
    let offX = 0;
    let offY = 0;
    step.style.width = '200px';
    step.className += ' active';
    offY = aim_pos.y + 60;
    offX = aim_pos.x - 50;
    this.setBox(step, offX, offY);
    this.setArrow(step, 'top-right');
  }
  skipTour (step: string) {
    this.hideStep(step);
    // IDEALLY: send a signal to the db to know that the person doesnt need to view the tour again
  }
  hideStep(currentStep) {
    let current = document.getElementById(currentStep);
    this.removeClass(current, 'active');
  }
  setBox(step, offX, offY) {
    step.style.top = offY + 'px';
    step.style.left =  offX + 'px';
    step.focus();
  }
  setArrow(step, position: string) {
    let arrow = step.getElementsByClassName('arrow')[0];
    if (position === 'middle-right') {
      arrow.style.top =  ((step.offsetHeight / 2) - 7 ) + 'px';
      arrow.style.right = '-7px';
    } else if (position === 'top-middle') {
      arrow.style.top = '-7px';
      arrow.style.right = ((step.offsetWidth / 2) - 7 ) + 'px';
    } else if (position === 'top-right') {
      arrow.style.top = '-7px';
      arrow.style.right = '22px';
    } else if (position === 'bottom-right') {
      arrow.style.right = '-7px';
      arrow.style.bottom = '22px';
    }
    this.fadeIn(step);
  }
  removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  getPosition(el) {
    let xPos = 0;
    let yPos = 0;
    while (el) {
      if (el.tagName === 'BODY') {
        let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        let yScroll = el.scrollTop || document.documentElement.scrollTop;
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
  fadeIn(el) {
    el.style.opacity = 0;

    let last = +new Date();
    // This silly line is to keep the linter in silence
    let exp = (st) => st;
    let tick = () => {
      el.style.opacity = +el.style.opacity + (+new Date() - last) / 400;
      last = +new Date();
      if (+el.style.opacity < 1) {
        exp((window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16));
      }
    };

    tick();
  }

}
