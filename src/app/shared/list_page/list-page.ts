import { Observable } from "rxjs";
import { News } from "../news";

export abstract class AbstractListPageService {
    abstract testData$: News[];
    abstract getNewsPages(pageNumber:number):News[];
}
