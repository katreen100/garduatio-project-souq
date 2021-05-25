import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAddress } from 'src/app/view model/iaddress';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit,OnDestroy {
  addresses: IAddress[] = [];
  address: IAddress;
  flag: boolean;
  sub: Subscription;

  constructor(private service: UserService) {
    this.newObject();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  ngOnInit(): void {
    
    this.sub = this.service.getAddresses().subscribe(result => {
        result.forEach((res) => {
          console.log(res.data())
        this.address = res.data();
        this.address.id = res.id;
        this.addresses.push(this.address)
      })
      if (this.addresses.length > 0)
        this.flag = true
    })
  }
  newAdd(edit: IAddress) {
    this.flag = !this.flag;
    if (edit) {
      this.address = edit;
      console.log(edit.id)
    }
    else
      this.newObject();
  }
  add() {
    this.service.addAddress(this.address);
    this.flag = !this.flag;
  }

  newObject() {
    this.address = {
      id: '',
      name: '',
      phone: '',
      city: '',
      state: '',
      street: '',
      bldgNo: '',
      createdAt: new Date(),
      editedAt: new Date(),
    }
  }
  editAddress() {
    this.address.editedAt = new Date();
    this.service.updateAddress(this.address);
  }
  remove(id) {
    this.service.removeAddress(id)
  }
}
