import { Pipe, PipeTransform } from "@angular/core";
import { map, Observable } from "rxjs";
import { Genre } from "../types/genre.type";
import { GenresService } from "../services/genres.service";

@Pipe({
    name: "genre"
})
export class GenrePipe implements PipeTransform{

    constructor(private readonly _genreService: GenresService)
    {}

    transform(value: number): Observable<string> {
        


        const genresList: Observable<Genre> = this._genreService.getGenres()


        return genresList.pipe(
            map(genres => {
                
                const genreFounded = genres.find( genre => genre.id === value )?.description

                return genreFounded ? genreFounded : '';


            })
        )



    }


}