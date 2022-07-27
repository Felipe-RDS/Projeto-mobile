import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,
         CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from 'src/app/domain/services/autenticacao.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(private rota: Router,
                private authServ: AutenticacaoService) { }

    public canActivate(route: ActivatedRouteSnapshot,
                       state: RouterStateSnapshot): boolean | Observable<boolean> {

        if (this.authServ.isLogado()) {
            return true;
        }

        this.rota.navigate(['/login']);
        return false;
    }
}
