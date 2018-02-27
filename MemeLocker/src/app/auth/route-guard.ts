import {CanActivate} from "@angular/router";

export class RouteGuard implements CanActivate {
    canActivate(){
        if(firebase.auth().currentUser) {
            return true;
        } else {
            return false;
        }
    }
}