import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SrvService } from '../srv.service';
import { Category } from './category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryList: Category[] = []
  newCategory: Category = {} as Category

  constructor(private service: SrvService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.service.getCategoriesList().subscribe(items => {
      this.categoryList = items
    })
  }

  saveCategory(form: NgForm) {
    this.service.postCategories(this.newCategory).subscribe(items => {
      form.resetForm()
      this.loadData()
      this.newCategory = {} as Category
    })
  }

}
