import { NgModule } from "@angular/core";
import { StatePipe } from "./state.pipe";
import { GenrePipe } from "./genre.pipe";
import { IsFavoritePipe } from "./isFavorite.pipe";

@NgModule({
    declarations: [
        StatePipe,
        GenrePipe,
        IsFavoritePipe
    ],
    exports: [
        StatePipe,
        GenrePipe,
        IsFavoritePipe
    ]
})
export class PipesModule {

}