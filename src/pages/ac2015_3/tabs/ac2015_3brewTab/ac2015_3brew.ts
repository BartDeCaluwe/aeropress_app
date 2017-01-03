import { Component } from '@angular/core';
import { Vibration } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: './ac2015_3brew.html'
})
export class Ac2015_3brewPage {
  myTimeout: any;
  timeForTimer: number;
  timer: any;
  started: boolean = false;
  paused: boolean;
  done: boolean;
  step1: boolean = false;
  step1time: number = 25;
  step2: boolean = false;
  step2time: number = 20;
  step3: boolean = false;
  step3time: number = 60;
  stepTime: number;

  constructor(public navCtrl: NavController) {

  }

  startTimer(timeForTimer) {
    this.started = true;
    this.timeForTimer = timeForTimer;
    this.timer = setInterval(() => {
      if (this.timeForTimer != 0) {
        this.timeForTimer -= 1;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  pauseTimer(timeLeft) {
    this.timeForTimer = timeLeft;
    clearInterval(this.timer);
  }

  stopTimer() {
    this.started = false;
    this.timeForTimer = 0;
    clearInterval(this.timer);
    this.clearInstructions();
  }

  brew() {
    var that = this;
    this.step1 = true;
    this.startTimer(this.step1time);
    this.stepTime = this.step1time * 1000;
    setTimeout(function () {
      clearInterval(that.timer);
      if (that.started) {
        window.navigator.vibrate(1000);
        that.step1 = false;
        that.step2 = true;
        that.startTimer(that.step2time);
      }
    }, this.stepTime);

    this.stepTime += (this.step2time * 1000);
    setTimeout(function () {
      clearInterval(that.timer);
      if (that.started) {
        window.navigator.vibrate(1000);
        that.step2 = false;
        that.step3 = true;
        that.startTimer(that.step3time);
      }
    }, this.stepTime);


    this.stepTime += (this.step3time * 1000);
    setTimeout(function () {
      clearInterval(that.timer);
      if (that.started) {
        window.navigator.vibrate([2000, 1000, 2000]);
        that.step3 = false;
        that.done = true;
      }
    }, this.stepTime);
  }

  clearInstructions() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
  }
}
