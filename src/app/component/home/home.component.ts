import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  isInicioRouteActive(): boolean {
    return this.route.snapshot.routeConfig?.path === 'home' || this.route.snapshot.routeConfig?.path === '';
  }

  isBuscarTrabajoRouteActive(): boolean {
    return this.route.snapshot.routeConfig?.path === 'home/buscar-trabajo';
  }

  isPublicarEmpleoRouteActive(): boolean {
    return this.route.snapshot.routeConfig?.path === 'home/publicar-empleo';
  }

  isPostulantesRouteActive(): boolean {
    return this.route.snapshot.routeConfig?.path === 'home/postulantes';
  }
}
