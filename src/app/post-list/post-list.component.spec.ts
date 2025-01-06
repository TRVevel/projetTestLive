import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Module pour simuler les requêtes HTTP
      providers: [ApiService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); //injecte le service de test HTTP
    fixture.detectChanges();
  });

  it('should display a list of posts',()=>{
    const mockPosts=[
      {id:1, title:'Post 1', body:'This is post 1'},
      {id:2, title:'Post 2', body:'This is post 2'}
    ]
    //simuler une requete GET vers l'API
    const req= httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts); //retourne la reponse simulée

    //Détect les changements pour mettre à jour le DOM
    fixture.detectChanges ();
    //Vérifie les données sont affichées correctement dans le DOM
    const listItems=fixture.nativeElement.querySelectorAll('li');
    expect (listItems.length).toBe(2);
    expect(listItems[0].textContent).toContain('Post 1');
    expect(listItems[1].textContent).toContain('Post 2');
  })
});
