import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { PostCardComponent } from './post-card/post-card.component';



@NgModule({
  declarations: [
    LogoComponent,
    FooterComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    FooterComponent,
    PostCardComponent,
  ]
})
export class SharedModule { }
