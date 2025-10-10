import { Component } from '@angular/core';
import { CharacterList } from "../../components/character-list/character-list";
import { Character, raza } from '../../model/Character';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character-list-page',
  imports: [CharacterList, NgFor],
  templateUrl: './character-list-page.html',
  styleUrl: './character-list-page.css'
})
export class CharacterListPage {
  
  characters:Character[] = [
    new Character('Aragorn', raza.enano,3,'/characterImages/aragon.jpg' ),
    new Character('Legolas', raza.elfo,5,'/characterImages/legolas.jpg' ),
    new Character('Gimli', raza.horco,4,'/characterImages/gimli.jpg' ),
    new Character('Frodo', raza.hada,2,'/characterImages/frodo.jpg'),
    new Character('Gandalf', raza.elfo,5,'/characterImages/gandalf.jpg'),
  ];
}
