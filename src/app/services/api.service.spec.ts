import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController; //variable pour le service de test HTTP

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Module pour simuler les requêtes HTTP
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController); //injecte le service de test HTTP
    
  });
afterEach(()=>{
  httpMock.verify(); //verifie que toutes les requetes ont été traitées
})
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts',()=>{
    //variable retournée par le mock de l'appel HTTP
    const mockPosts=[
      {id:1, title:'Post 1', body:'This is post 1'},
      {id:2, title:'Post 2', body:'This is post 2'}
    ];
    //Test de la méthode getPosts()
    service.getPosts().subscribe((posts)=>{
      //les tests sont effectues quand la reponse est émise
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);

    })

    //Simule une requete GET et emet une reponse
    const req= httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts); //retourne la reponse simulée
  })
});
