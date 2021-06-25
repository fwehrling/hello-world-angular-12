# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Exercice 1

1/ créer un nouveau composant "cars" => appelé depuis appComponent
2/ créer une interface Car :
    - marque
    - couleur
    - carburant
    - nbPlace
    - nbPorte
3/ créer un enum concernant le carburant :
    - Diesel
    - Essence
    - Gaz
4/ créer autant de champs input que de propriété
   de l'interface Car
5/ créer un bouton "Ajouter une voiture"
6/ lister les voitures avec marque et couleur et une case à cocher pour chaque carburant possible
7/ présenter la liste en utilisant des classes (interval de couleur)
8/ ajouter un bouton "supprimer"
9/ afficher un message si aucune voiture n'est enregistrée
10/ ajouter un bouton "detail"
11/ afficher le détail de la voiture (toutes les infos). Si aucune voiture
    choisie alors afficher un message

renault bleu Essence
BMW rouge Diesel 

MARQUE | COULEUR | DIESEL | ESSENCE | GAZ
renault  bleu                x
BMW      rouge        x

tab = [
    0,1,2,Diesel,Essence,Gaz
]

carburants = Carburant;
carburants[0] = Diesel => <option value="0">Diesel</option> => <option [value]="carburants[0]">{{ carburants[0] }}</option>

listCarburants = Object.keys(this.carburants)
                .filter(e => !isNaN(+e))                           //listCaburants = [0,1,2];
                .map(o => {index: o, libelle: this.carburants[0]}) //[{index: 0, libelle: 'Diesel'}, {index: 1, libelle: 'Essence'}...]

[0,1,2,3,4,5,6].filter(e => e % 2 === 0).map(e => e * 2) // 0, 4, 8, 12
 
ngFor="let item of listCaburant" => item

enum Carburant[0] = Diesel

## Exercice 2
1/ créer un pipe letters
2/ retourner le texte avec un interval de minuscule et majuscule
   en commençant par une minuscule
3/ ajouter un paramètre pour savoir si on tient compte de l'espace
4/ ajouter un 2ème paramètre pour savoir si on commence par une minuscule

exemple :

# si on ne tient pas compte des espaces :

"la formation est superbe" => "lA fOrMaTiOn EsT sUpErBe"

# si on tient compte des espaces :

"la formation est superbe" => "lA FoRmAtIoN EsT SuPeRbE"

# si on ne commence par une minuscule et on tient compte des espaces

"la formation est superbe" => "La fOrMaTiOn eSt sUpErBe"

## Exercice 3

https://jsonplaceholder.typicode.com/todos

1/ créer un service todo
2/ créer un composant todos (parent)
3/ créer un composant todo (enfant)
4/ créer une interface todo
5/ créer une méthode http.get dans le service pour récupérer tous les todos
 => retourne un observable de type todo
6/ le composant todos fait appel à la méthode du service pour récupérer les todos
7/ le composant todos envoie les données des todos à todo
8/ le composant todo affiche les 10 premiers todos (utiliser un pipe)

# Exercice 4

1/ créer un chemin qui va permettre de récupérer un todo spécifique
2/ créer un bouton détail qui va permettre d'afficher ce todo dans le composant TodoDetail

# Exercice 5

1/ créer un composant TodoAvecResolver
2/ créer un resolver Todo
3/ créer un nouveau chemin dans app.module avec un resolver
4/ afficher le todo récupérer


















NOUVEAU PROJET TODOS


PROJET TODO :

- créer un nouveau projet angular avec le routing, css

IDENTIFICATION :

- créer un module identification
- créer un service identification dans un dossier services dans son module
- créer un formulaire d'identification dans son module
- 2 champs :
    - username
    - mot de passe

TODO :

- créer un module todo
- créer un composant todos dans son module todo
- créer un composant todo dans son module todo
- créer un service todo dans un dossier services dans son module
    - 4 méthodes :
        - getTodos
        - getTodo(id)
        - deleteTodo(id)
        - updateTodo(id)


EXPLICATIONS :

- créer le routing principal
- créer les routings des sous modules
- le component todos récupère les todos depuis le service et les envoie un à un à todo
- le component todo affiche un todo avec les boutons associés :
    - modifier => affiche un formulaire dans le même template avec les champs préremplis
    - supprimer
- le component todo permet d'afficher le todo suivant ou précédent
- les services s'occupent de communiquer avec la BDD
- utiliser les resolver pour récupérer les données
- utiliser le guard CanLoad pour accéder à todos
- un bouton "déconnexion" permet de se déconnecter de l'application





