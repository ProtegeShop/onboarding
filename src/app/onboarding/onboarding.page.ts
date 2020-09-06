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

  onSkip() {
    this.onNext();
  }

  // EXAMPLE SELECTIONS

  singleSelect;
  // single selection
  onSingleSelect(selection) {
    this.singleSelect = selection;
  }

  multiSelect: any[] = [];
  options = [
    {
      id: 1,
      name: "Tomato",
      img: "../../assets/temp/tomato.jpg"
    },
    {
      id: 2,
      name: "Orange Juice",
      img: "../../assets/temp/16571.png"
    },
    {
      id: 3,
      name: "Apple",
      img: "../../assets/temp/6739.png"
    }
  ]

  // multi selection
  onMultiSelect(selection) {
    if (this.multiSelect.includes(selection)) {
      this.multiSelect = this.multiSelect.filter(s => s.id !== selection.id)
    }
    else {
      this.multiSelect.push(selection)
    }
  }

  multiSelect2: any[] = [];
  options2 = [
    {
      id: 1,
      name: "Tomoto",
    },
    {
      id: 2,
      name: "Apple",
    },
    {
      id: 3,
      name: "Orange",
    },
    {
      id: 4,
      name: "Painting",
    },
    {
      id: 5,
      name: "Sky Diving",
    },
    {
      id: 6,
      name: "Cheese",
    },
    {
      id: 7,
      name: "Eggplant",
    },
    {
      id: 8,
      name: "Chess",
    }
  ]

  // multi selection
  onMultiSelect2(selection) {
    if (this.multiSelect2.includes(selection)) {
      this.multiSelect2 = this.multiSelect2.filter(s => s.id !== selection.id)
    }
    else {
      this.multiSelect2.push(selection)
    }
  }

  multiSelect3: any[] = [];
  options3 = [
    {
      id: 1,
      name: "Designs",
      img: '../../assets/temp/pen.svg'
    },
    {
      id: 2,
      name: "Projects",
      img: '../../assets/temp/project.svg'
    },

  ]

  // multi selection
  onMultiSelect3(selection) {
    if (this.multiSelect3.includes(selection)) {
      this.multiSelect3 = this.multiSelect3.filter(s => s.id !== selection.id)
    }
    else {
      this.multiSelect3.push(selection)
    }
  }
}
