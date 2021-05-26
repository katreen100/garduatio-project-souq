import 'package:flutter/material.dart';

class CartProducts extends StatefulWidget {
  @override
  _CartProductsState createState() => _CartProductsState();
}

class _CartProductsState extends State<CartProducts> {
  var productCart = [
    {
      'name': 'Blazzer',
      'picture': 'images/product/blazzer.jpg',
      'price': 85,
      'size': 'M',
      'color': 'red',
      'qunatity': 1
    },
    {
      'name': 'Apple Watch',
      'picture': 'images/product/apple_watch.png',
      'price': 95,
      'size': 'M',
      'color': 'red',
      'qunatity': 1
    },
    {
      'name': 'Sport Shoes',
      'picture': 'images/product/addidas.jpg',
      'price': 120,
      'size': 'M',
      'color': 'red',
      'qunatity': 1
    },
  ];
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: 3,
        itemBuilder: (context, index) {
          return SingleCartProduct(
            cartProductName: productCart[index]['name'],
            cartProductImage: productCart[index]['picture'],
            cartProductPrice: productCart[index]['price'],
            cartProductSize: productCart[index]['size'],
            cartProductColor: productCart[index]['color'],
            cartProductQuantity: productCart[index]['qunatity'],
          );
        });
  }
}

class SingleCartProduct extends StatelessWidget {
  final cartProductName;
  final cartProductImage;
  final cartProductPrice;
  final cartProductSize;
  final cartProductColor;
  final cartProductQuantity;
  SingleCartProduct(
      {this.cartProductColor,
      this.cartProductImage,
      this.cartProductName,
      this.cartProductPrice,
      this.cartProductQuantity,
      this.cartProductSize});
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        //image Section
        leading: Image.asset(
          cartProductImage,
          width: 120,
          height: 120,
        ),
        // body Section
        title: Text(cartProductName),
        subtitle: Column(
          children: [
            Row(
              children: [
                // for size section
                Padding(
                  padding: const EdgeInsets.all(0.0),
                  child: Text('Size'),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    cartProductSize,
                    style: TextStyle(color: Colors.lightBlue),
                  ),
                ),
                // for color section
                Padding(
                  padding: const EdgeInsets.fromLTRB(30, 8.0, 8.0, 8.0),
                  child: Text('Color'),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    cartProductColor,
                    style: TextStyle(color: Colors.lightBlue),
                  ),
                ),
              ],
            ),
            // for price section
            Container(
              alignment: Alignment.topLeft,
              child: Text(
                '\$$cartProductPrice',
                style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.lightBlue),
              ),
            ),

            Container(
              child: Row(children: [
                IconButton(
                    icon: Icon(Icons.arrow_left),
                    onPressed: () {}),
                Text("\$$cartProductQuantity"),
                IconButton(icon: Icon(Icons.arrow_right), onPressed: () {}),
              ]),
            ),
          ],
        ),
        // trailing:
        // Column(
        //   mainAxisAlignment: MainAxisAlignment.start,
        //   children: [
        //     IconButton(
        //       alignment: Alignment.topLeft,
        //         icon: Icon(Icons.arrow_left),
        //         onPressed: () {}),
        //     Text("\$$cartProductQuantity"),
        //     IconButton(
        //         icon: Icon(Icons.arrow_right),
        //         onPressed: () {}),
        //   ],
        // ),
      ),
    );
  }
}
