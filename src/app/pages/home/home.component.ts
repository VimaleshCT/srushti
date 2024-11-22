import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  why: any[] = [
    { icons: '1.png', title: 'Customized Fertility Care & Counselling', content: 'Personalized treatments with free counseling before, during, and after your journey.' },
    { icons: '2.png', title: 'Advanced Reproductive & Genetic Techniques', content: 'Expert reproductive surgeries with pre-implantation screening to ensure healthy embryos.' },
    { icons: '3.png', title: 'Special Program for Azoospermia', content: 'Focused on egg quality and offering Micro-TESE for specialized azoospermia treatment' },
    { icons: '4.png', title: 'Trusted for Over 20 Years', content: 'Over two decades of experience with a 62% success rate in assisted reproductive techniques, delivering over 3,000 babies. ' },
    { icons: '5.png', title: 'State-of-the-Art IVF Lab ', content: 'A cutting-edge IVF lab that ensures ideal embryo development and a highly successful cryopreservation program.' },
    { icons: '6.png', title: 'Experienced Team & Continuous Development', content: 'A highly trained team staying ahead with the latest fertility treatments and diagnostics.' },
  ];
  specialization: any[] = [
    { images: 'assets/images/specialization/1.png', title: 'Assisted Reproductive Techniques', content: 'Laparoscopy | Hysteroscopy | Myomectomy | Conservative Surgery' },
    { images: 'assets/images/specialization/2.png', title: 'Reproductive Surgeries', content: 'Egg Freezing | Embryo Freezing | Sperm Freezing' },
    { images: 'assets/images/specialization/3.png', title: 'Genetics & Preservation', content: 'IVF | Genetic Screening | Fertility Preservation' },
    { images: 'assets/images/specialization/4.png', title: 'Maternity & Childcare', content: 'Stress Relief | Hormonal Balance | Fertility Enhancement' },
    { images: 'assets/images/specialization/5.png', title: 'Aesthetics', content: 'IVF Failure Solutions | PCOS Management | Azoospermia Treatment' },
  ];
}
