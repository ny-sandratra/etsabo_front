import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  menuOpen: boolean = false;
  username: string = "Edrick fibber's";

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToProfile() {
    // Logique pour la navigation vers le profil
  }

  navigateToSettings() {
    // Logique pour la navigation vers les réglages
  }

  navigateToHelp() {
    // Logique pour la navigation vers l'aide
  }

  logout() {
    // Logique de déconnexion
  }
}
