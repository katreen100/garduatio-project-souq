import 'package:flutter/material.dart';
import 'package:mobile_ecommerce_app/components/cart_product.dart';

class CartPage extends StatefulWidget {
  @override
  _CartPageState createState() => _CartPageState();
}

class _CartPageState extends State<CartPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0.1,
        backgroundColor: Colors.red,
        title: Text('Cart'),
        actions: [
          IconButton(
              icon: Icon(
                Icons.search,
                color: Colors.white,
              ),
              onPressed: () {}),
        ],
      ),


      
      body: CartProducts(),


      bottomNavigationBar: Container(
        color: Colors.white,
        child: Row(children: [
          Expanded(child: ListTile(
            title: Text('Total'),
            subtitle: Text('\$230'),),
          ),

          Expanded(child: MaterialButton(onPressed: (){},
          child: Text('Check Out', style: TextStyle(color: Colors.white),),
          color: Colors.red,
          ),
          ),

          
        ],),
      ),
    );
  }
}