import 'package:flutter/material.dart';

import 'package:mobile_ecommerce_app/pages/product_details.dart';

class Products extends StatefulWidget {
  @override
  _ProductsState createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  var productList = [
    {
      'name': 'Blazzer',
      'picture': 'images/product/blazzer.jpg',
      'old_price': 120,
      'price': 85,
    },
    {
      'name': 'Apple Watch',
      'picture': 'images/product/apple_watch.png',
      'old_price': 170,
      'price': 95,
    },
    {
      'name': 'Sport Shoes',
      'picture': 'images/product/addidas.jpg',
      'old_price': 190,
      'price': 120,
    },
  ];
  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate:
          SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
      itemCount: productList.length,
      itemBuilder: (BuildContext context, int index) {
        return Padding(
                  padding: const EdgeInsets.all(4.0),
                  child: SingleProduct(
            productName: productList[index]['name'],
            productImage: productList[index]['picture'],
            productOldPrice: productList[index]['old_price'],
            productPrice: productList[index]['price'],
          ),
        );
      },
    );
  }
}

class SingleProduct extends StatelessWidget {
  final productName;
  final productImage;
  final productOldPrice;
  final productPrice;

  SingleProduct(
      {this.productName,
      this.productImage,
      this.productOldPrice,
      this.productPrice});
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Hero(
        tag: Text(productName),
        child: Material(
          child: InkWell(
            onTap: () => Navigator.of(context).push(MaterialPageRoute(
                //passing values to product details
                builder: (context) => ProductDetails(
                      productDetailsName: productName,
                      productDetailsImage: productImage,
                      productDetailsOldPrice: productOldPrice,
                      productDetailsPrice: productPrice,
                    ))),
            child: GridTile(
              footer: Container(
                color: Colors.white70,
                child:
                    // Row(
                    //   children: [
                    //     Expanded(
                    //       child: Text(
                    //         productName,
                    //         style: TextStyle(fontWeight: FontWeight.bold),
                    //       ),
                    //     ),
                    //     Text(
                    //       "\$$productPrice",
                    //       style: TextStyle(
                    //           color: Colors.lightBlue, fontWeight: FontWeight.w800),
                    //     ),
                    //                     Text(
                    //     "\$$productOldPrice",
                    //     style: TextStyle(
                    //         color: Colors.black54,
                    //         fontWeight: FontWeight.w800,
                    //         decoration: TextDecoration.lineThrough),
                    //   ),

                    //   ],
                    // ),
                    ListTile(
                  leading: Text(
                    productName,
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  title: Text(
                    "\$$productPrice",
                    style: TextStyle(
                        color: Colors.lightBlue, fontWeight: FontWeight.w800),
                  ),
                  subtitle: Text(
                    "\$$productOldPrice",
                    style: TextStyle(
                        color: Colors.black54,
                        fontWeight: FontWeight.w800,
                        decoration: TextDecoration.lineThrough),
                  ),
                ),
              ),
              child: Image.asset(
                productImage,
                fit: BoxFit.cover,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
