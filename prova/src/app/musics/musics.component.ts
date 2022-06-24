import { Component, OnInit } from '@angular/core';
import { Category } from '../categories/category';
import { SrvService } from '../srv.service';
import { Music } from './music';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  newCategory : Category = {} as Category

  constructor(private service: SrvService) { }

  ngOnInit(): void {
    console.log(this.loadData(2))
  }

  loadData(id: number) {
    this.service.getCategoriesByIdList(id).subscribe(item => {
      this.newCategory = item
    })
  }

}
