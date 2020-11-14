import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navLinks') navLinks: ElementRef;
  @ViewChild('burger') burger: ElementRef;
  @ViewChild('componentsRef') componentsRef: ElementRef;
  @ViewChild('projectsRef') projectsRef: ElementRef;
  @ViewChild('blogsRef') blogsRef: ElementRef;
  @ViewChild('componentsLinkRef') componentsLinkRef: ElementRef;
  @ViewChild('projectsLinkRef') projectsLinkRef: ElementRef;
  @ViewChild('blogsLinkRef') blogsLinkRef: ElementRef;

  toggler = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onSizeChange() {
    console.log('H');
  }

  navbarSlide() {
    if (this.toggler) {
      this.renderer.addClass(this.navLinks.nativeElement, 'nav-active');
      this.renderer.addClass(this.burger.nativeElement, 'toggle');
    } else {
      this.renderer.removeClass(this.navLinks.nativeElement, 'nav-active');
      this.renderer.removeClass(this.burger.nativeElement, 'toggle');
    }
    this.toggler = !this.toggler;
  }

  onClick() {}
}
