import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { BASE_URL, LOL_ARTICLES_PAGE_URL, 
        LOL_ARTICLES_URL, 
        LOL_GUIDES_URL, 
        LOL_PROG_URL, 
        LOL_RESULTS_URL, 
        LOL_TEAM_URL, 
        TFT_ARTICLES_PAGE_URL, 
        TFT_ARTICLES_URL, 
        TFT_GUIDES_URL,
        TFT_PROG_URL,
        TFT_RESULTS_URL,
        TFT_TEAM_URL} from 'src/app/shared/constants/urls';
import { NewsDisplayComponent } from './pages/news-display/news-display.component';
import { GuidesListComponent } from './pages/guides/guides-list/guides-list.component';
import { ProgrammationComponent } from './pages/programmation/programmation.component';
import { TeamComponent } from './pages/team/team.component';
import { ResultsComponent } from './pages/results/results.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'contact',
    component: ContactComponent,
    data:{
      url_data : BASE_URL
    }
  },
  // NEWS LIST 
  {
    path : 'tft_news',
    component: NewsListComponent,
    data:{
      url_data: TFT_ARTICLES_URL,
      url_data_page : TFT_ARTICLES_PAGE_URL
    }
  },
  {
    path : 'lol_news',
    component: NewsListComponent,
    data:{
      url_data: LOL_ARTICLES_URL,
      url_data_page : LOL_ARTICLES_PAGE_URL
    }
  },
  // GUIDES LIST
  {
    path : 'tft_guides',
    component: GuidesListComponent,
    data:{
      url_data: TFT_GUIDES_URL,
    }
  },
  {
    path : 'lol_guides',
    component: GuidesListComponent,
    data:{
      url_data: LOL_GUIDES_URL,
    }
  },
  {
    path : 'tft_programmation',
    component: ProgrammationComponent,
    data:{
      url_data: TFT_PROG_URL,
    }
  },
  {
    path : 'lol_programmation',
    component: ProgrammationComponent,
    data:{
      url_data: LOL_PROG_URL,
    }
  },
  // LOL NEWS PATHS
  {
    path : 'lol_news/aegis_rejoint_la_lfl',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/aeg_en_lfl"
    }
  },
  {
    path : 'lol_news/lounet_rejoint_aegis',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/lounet_rejoint_aegis"
    }
  },
  {
    path : 'lol_news/marin_presentation',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/marin_presentation"
    }
  },
  {
    path : 'lol_news/presaison_lol_13',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/presaison_lol_13"
    }
  },
  {
    path : 'lol_news/recette_curry',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/recette_curry"
    }
  },
  {
    path : 'lol_news/tuto_teemo',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/tuto_teemo"
    }
  },
  {
    path : 'lol_news/eika_chez_aegis_rumeur',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/eika_chez_aegis_rumeur"
    }
  },
  {
    path : 'lol_news/mv_streamer_league_of_legends',
    component: NewsDisplayComponent,
    data:{
      base_url_data : LOL_ARTICLES_URL,
      url_data : "/mv_streamer_league_of_legends"
    }
  },
  // TFT NEWS PATH
  {
    path : 'tft_news/magarky_remporte_le_tgs',
    component: NewsDisplayComponent,
    data:{
      base_url_data : TFT_ARTICLES_URL,
      url_data : "/magarky_remporte_le_tgs"
    }
  },
  {
    path : 'tft_news/pdb_remporte_occitanie_esport',
    component: NewsDisplayComponent,
    data:{
      base_url_data : TFT_ARTICLES_URL,
      url_data : "/pdb_remporte_occitanie_esport"
    }
  },
  {
    path : 'tft_news/pdb_remporte_dreamhack_hannover',
    component: NewsDisplayComponent,
    data:{
      base_url_data : TFT_ARTICLES_URL,
      url_data : "/pdb_remporte_dreamhack_hannover"
    }
  },
  // TEAM LINK
  {
    path : 'tft_team',
    component: TeamComponent,
    data:{
      base_url_data : TFT_TEAM_URL,
      url_data : "/tft_team"
    }
  },
  {
    path : 'lol_team',
    component: TeamComponent,
    data:{
      base_url_data : LOL_TEAM_URL,
      url_data : "/lol_team"
    }
  },
  // RESULTATS LINK
  {
    path : 'tft_results',
    component: ResultsComponent,
    data:{
      base_url_data : TFT_RESULTS_URL,
      url_data : "/tft_results"
    }
  },
  {
    path : 'lol_results',
    component: ResultsComponent,
    data:{
      base_url_data : LOL_RESULTS_URL,
      url_data : "/lol_results"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
