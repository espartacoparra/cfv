import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../../../services/request.service";
import { ImageService } from "../../../../services/image.service";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  formCreateProduct: FormGroup;
  products = [];
  closeResult: string;
  base64textString = [];
  categories = [];

  constructor(private request: RequestService, private modalService: NgbModal, private formBuilder: FormBuilder, private imgService: ImageService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories()
  }
  //forms
  private createBuildForm() {
    this.formCreateProduct = this.formBuilder.group({
      image: [[], [Validators.required]],
      name: ["", [Validators.required, Validators.minLength(6)]],
      price: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      categories: ["", [Validators.required]]
    });
    console.log(this.formCreateProduct);
  }

  private updateBuildForm(product) {
    this.formCreateProduct = this.formBuilder.group({
      name: [product.name, [Validators.required, Validators.minLength(6)]],
      price: [product.price, [Validators.required]],
      quantity: [product.quantity, [Validators.required]]
    });
    console.log(this.formCreateProduct);
  }
  /////////////////////////////////////////////////////////////////////

  //methods
  getProducts() {
    this.request.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  getCategories() {
    this.request.getCategory().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }


  createProduct() {
    this.formCreateProduct.value.image = this.base64textString;
    var product = this.formCreateProduct.value;
    this.request.createProducts(product).subscribe(data => {
      console.log(data);
      this.getProducts();
    });
  }

  deleteProduct(product) {
    this.request.deleteProducts(product).subscribe(data => {
      console.log(data);
      this.getProducts();
    });
  }

  updateProduct() {
    console.log('hola');
  }

  /////////////////////////////////////////////////////////////////////

  //modals
  open(content, operation) {
    this.createBuildForm();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      switch (operation) {
        case "create":
          this.createProduct();
          break;
        case "update":
          this.updateProduct();
          break;

        default:
          break;
      }
    }, (reason) => {

    });
  }
  //////////////////////////////////////////////////////////////////////

  // load image
  onUploadImage(evt: any) {
    var data = this.imgService.onUploadChange(evt);
    this.base64textString = data;
    console.log(data);
    this.formCreateProduct.value.image = data;
    console.log(this.formCreateProduct);
  }



}
