import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent


  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],

  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService, RecipeService, AuthService, DataStorageService]
})
export class CoreModule {

}
