import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './memory/game/game.component';
import { HomeComponent } from './home/home/home.component';
import { ConfigComponent } from './config/config/config.component';

const routes: Routes = [
  { path: 'game', component: GameComponent, data: { animation: 'GamePage' } },
  {
    path: 'config',
    component: ConfigComponent,
    data: { animation: 'ConfigPage' }
  },
  { path: '**', component: HomeComponent, data: { animation: 'HomePage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
