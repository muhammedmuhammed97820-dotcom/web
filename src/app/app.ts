import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[RouterOutlet, NavbarComponent],
  templateUrl:'./app.html',
  styleUrl:'./app.scss'
})
export class App implements OnInit {
  customizerOpen = signal(false);
  mode = signal<'light'|'dark'>('light');
  palette = signal('rose');
  palettes = [
    {id:'rose',name:'وردي',colors:'linear-gradient(90deg,#ff9a9e,#fecfef,#a1c4fd)'},
    {id:'ocean',name:'محيط',colors:'linear-gradient(90deg,#89f7fe,#66a6ff)'},
    {id:'violet',name:'بنفسجي',colors:'linear-gradient(90deg,#c471f5,#fa71cd)'},
    {id:'emerald',name:'زمردي',colors:'linear-gradient(90deg,#84fab0,#8fd3f4)'},
    {id:'sunset',name:'غروب',colors:'linear-gradient(90deg,#f6d365,#fda085)'}
  ];
  ngOnInit(){
    const savedMode=(localStorage.getItem('library-mode') as 'light'|'dark')||'light';
    const savedPalette=localStorage.getItem('library-palette')||'rose';
    this.setMode(savedMode); this.setPalette(savedPalette);
  }
  setMode(mode:'light'|'dark'){this.mode.set(mode);document.documentElement.dataset['mode']=mode;localStorage.setItem('library-mode',mode)}
  setPalette(palette:string){this.palette.set(palette);document.documentElement.dataset['palette']=palette;localStorage.setItem('library-palette',palette)}
  toggleCustomizer(){this.customizerOpen.update(v=>!v)}
}
