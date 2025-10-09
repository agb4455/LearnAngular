import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { Character } from '../../model/Character';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";


@Component({
  selector: 'app-character-list',
  imports: [MatCardModule, NgFor, MatIcon, CdkAccordion, CdkAccordionItem],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  
  @Input() character:Character = {} as Character;

}
