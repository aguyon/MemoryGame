<h1 align="center">Memory Game</h1>

## Technos utilisées

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)

## Composants

### Grille

![Grille du Memory](/assets/images/Grid.jpg)

Une grille `4x4` qui a pour contenu les cartes du jeux.

### Carte

| Idle  | Checked  | Disabled  |
|:-:|:-:|:-:|
| ![](/assets/images/components/Card/Recto.jpg) | ![](/assets/images/components/Card/Verso.jpg) | ![](/assets/images/components/Card/Found.jpg) |

**Faces :**
La carte a deux faces : 
* `recto` : background
* `verso` : une image devant être associée à une paire

**États :**
* `idle` : La carte n'est pas retourné
* `checked` : La carte a été cliqué et retourné
* `disabled` : La carte et sa paire ou été trouvé

**Action :**
* `click` -> Retourne la carte sur son verso. Si la carte cliqué est la première à être retournée de la partie, alors lancer le `Timer`.

### Timer

![Timer à zéro](/assets/images/components/Timer.jpg)

**Comportement :** Dès que l'utilisateur clique sur la première carte le `Timer` ce lance. 

### Compteur de clics

![Compteur de cliques](/assets/images/components/Counter.jpg)

**Comportement :** Dès que l'utilisateur clique sur deux cartes, alors le compteur est incrémenter d'un clique. 

### Reset

![Button reset](/assets/images/components/Reset.png)

Un `bouton` permettant de réinitialiser la grille et de remélanger les paires, réinitialise le `Timer` et le `Compteur`.

**Action :** 
* `click` -> Réinitialise la partie en cours. Si aucune partie n'est en cours, alors le bouton est désactivé.
