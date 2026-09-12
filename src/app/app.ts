import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({selector:'app-root',standalone:true,imports:[CommonModule,RouterOutlet,NavbarComponent],templateUrl:'./app.html',styleUrl:'./app.scss'})
export class App implements OnInit {
  customizerOpen=signal(false); mode=signal<'light'|'dark'>('light'); palette=signal('rose');
  palettes=[{id:'rose',name:'وردي',colors:'linear-gradient(90deg,#ff9a9e,#fecfef,#a1c4fd)'},{id:'ocean',name:'محيط',colors:'linear-gradient(90deg,#89f7fe,#66a6ff)'},{id:'violet',name:'بنفسجي',colors:'linear-gradient(90deg,#c471f5,#fa71cd)'},{id:'emerald',name:'زمردي',colors:'linear-gradient(90deg,#84fab0,#8fd3f4)'},{id:'sunset',name:'غروب',colors:'linear-gradient(90deg,#f6d365,#fda085)'}];
  ngOnInit(){const m=(localStorage.getItem('library-mode') as 'light'|'dark')||'light';const p=localStorage.getItem('library-palette')||'rose';this.setMode(m);this.setPalette(p)}
  setMode(m:'light'|'dark'){this.mode.set(m);document.documentElement.dataset['mode']=m;localStorage.setItem('library-mode',m)}
  setPalette(p:string){this.palette.set(p);document.documentElement.dataset['palette']=p;localStorage.setItem('library-palette',p)}
  toggleCustomizer(){this.customizerOpen.update(v=>!v)}
}
