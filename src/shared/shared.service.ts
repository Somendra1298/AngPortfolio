import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class SharedService {

    toastObj: any = {
        severity: '',
        summary: '',
        detail: ''
    };

    constructor() { }

    toastObject = new BehaviorSubject(this.toastObj);
    $toastData = this.toastObject.asObservable();

    updateToastMessage(obj: any) {
        this.toastObject.next(obj)
    }

}