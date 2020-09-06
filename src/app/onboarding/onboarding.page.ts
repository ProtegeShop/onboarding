import { Component, OnInit, ViewChildren, ElementRef, ViewChild, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit, AfterViewInit {
  constructor() { }

  @ViewChildren('section') sections: QueryList<any>;

  allSelections: ElementRef<any>[] = [];
  firstIndex = 0;
  lastIndex = this.allSelections.length - 1;

  currentSection: ElementRef<any> = this.allSelections[this.firstIndex];
  currentIndex = 0;

  nextSection: ElementRef<any>;
  previousSection: ElementRef<any>;

  ngAfterViewInit() {
    // all section to list
    this.sections.map(s => this.allSelections.push(s))
    // hide all element
    this.allSelections.map(s => s.nativeElement.style.display = "none")
    // display first element
    this.allSelections[0].nativeElement.style.display = "block";
    this.currentSection = this.allSelections[this.firstIndex];
    this.currentIndex = 0;
    this.lastIndex = this.allSelections.length - 1;
  }

  ngOnInit() { }

  onNext() {
    if (this.currentIndex < this.allSelections.length - 1) {
      this.previousSection = this.currentSection;
      this.currentSection = this.allSelections[this.currentIndex + 1];
      this.currentIndex = this.allSelections.indexOf(this.currentSection);

      // hide previous
      this.previousSection.nativeElement.style.display = "none";
      // show current
      this.currentSection.nativeElement.style.display = "block";
      console.log(this.currentIndex)
    }
  }

  onPrevious() {
    if (this.currentIndex > -1) {
      this.nextSection = this.currentSection;
      this.currentSection = this.allSelections[this.currentIndex - 1];
      this.currentIndex = this.allSelections.indexOf(this.currentSection);

      // hide next
      this.nextSection.nativeElement.style.display = "none";
      // show current
      this.currentSection.nativeElement.style.display = "block";
      console.log(this.currentIndex)
    }
  }

  onSkip(){
    this.onNext();
  }
}
