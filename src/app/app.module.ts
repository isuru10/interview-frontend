import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CatSelectionComponent } from './cat-selection/cat-selection.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/app',
    pathMatch:'full'
  },
  {
    path:'app',
    component:HomeComponent,
  },
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'book-details',
    component:BookDetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'checkout',
    component:CheckoutPageComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FooterComponent,
    TestimonialComponent,
    HomeComponent,
    BooksComponent,
    BookDetailsComponent,
    CartComponent,
    CheckoutPageComponent,
    CatSelectionComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
