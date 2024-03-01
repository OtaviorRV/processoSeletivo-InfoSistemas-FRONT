import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tap, finalize } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule]
})
export class VeiculosListComponent implements OnInit {
  items: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.dataService.getAll()
      .pipe(
        tap(data => {
          this.items = data;
          console.log(data);
        }),
        finalize(() => {
          // Ações finais após a conclusão da requisição
        })
      )
      .subscribe();
  }
}
