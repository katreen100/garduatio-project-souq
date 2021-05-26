import 'package:flutter/material.dart';
import 'package:mobile_ecommerce_app/components/products.dart';
import 'package:mobile_ecommerce_app/home.dart';

class ProductDetails extends StatefulWidget {
  final productDetailsName;
  final productDetailsImage;
  final productDetailsOldPrice;
  final productDetailsPrice;

  ProductDetails(
      {this.productDetailsImage,
      this.productDetailsName,
      this.productDetailsOldPrice,
      this.productDetailsPrice});
  @override
  _ProductDetailsState createState() => _ProductDetailsState();
}

class _ProductDetailsState extends State<ProductDetails> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0.1,
        backgroundColor: Colors.lightBlue,
        title: InkWell (child: Text('Ecommerce App'),
        onTap: (){
          Navigator.push(context, MaterialPageRoute(builder: (context)=> HomePage()));
        },
        ),
        actions: [
          IconButton(
              icon: Icon(
                Icons.search,
                color: Colors.white,
              ),
              onPressed: () {}),
        ],
      ),
      body: ListView(
        children: [
          Container(
            height: 300.0,
            child: GridTile(
              child: Container(
                color: Colors.white,
                child: Image.asset(widget.productDetailsImage),
              ),
              footer: Container(
                color: Colors.white70,
                child: ListTile(
                  leading: Text(
                    widget.productDetailsName,
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                  title: Row(
                    children: [
                      Expanded(
                        child: Text(
                          "\$${widget.productDetailsOldPrice}",
                          style: TextStyle(
                              color: Colors.black54,
                              decoration: TextDecoration.lineThrough),
                        ),
                      ),
                      Expanded(
                        child: Text(
                          "\$${widget.productDetailsPrice}",
                          style: TextStyle(
                              fontWeight: FontWeight.bold, color: Colors.lightBlue),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),

          //First Button
          Row(
            children: [
              //Button Size
              Expanded(
                child: MaterialButton(
                  onPressed: () {
                    showDialog(context: context, builder: (context){
                      return AlertDialog(
                        title: Text('Size'),
                        content: Text('Choose Size'),
                        actions: [
                          MaterialButton(onPressed: (){
                            Navigator.of(context).pop(context);
                          }, 
                          child: Text('close', style: TextStyle(color: Colors.blue),)),
                        ],
                      );
                    });
                  },
                  color: Colors.white,
                  textColor: Colors.grey,
                  elevation: 0.2,
                  child: Row(
                    children: [
                      Expanded(
                        child: Text('size'),
                      ),
                      Expanded(
                        child: Icon(Icons.arrow_drop_down),
                      ),
                    ],
                  ),
                ),
              ),

              //Button Color
              Expanded(
                child: MaterialButton(
                  onPressed: () {
                    showDialog(context: context, builder: (context){
                      return AlertDialog(
                        title: Text('Color'),
                        content: Text('Choose Color'),
                        actions: [
                          MaterialButton(onPressed: (){
                            Navigator.of(context).pop(context);
                          }, 
                          child: Text('close', style: TextStyle(color: Colors.blue),)),
                        ],
                      );
                    });
                  },
                  color: Colors.white,
                  textColor: Colors.grey,
                  elevation: 0.2,
                  child: Row(
                    children: [
                      Expanded(
                        child: Text('Color'),
                      ),
                      Expanded(
                        child: Icon(Icons.arrow_drop_down),
                      ),
                    ],
                  ),
                ),
              ),

              //Button Qty
              Expanded(
                child: MaterialButton(
                  onPressed: () {

                    showDialog(context: context, builder: (context){
                      return AlertDialog(
                        title: Text('Quantity'),
                        content: Text('Choose Quantity'),
                        actions: [
                          MaterialButton(onPressed: (){
                            Navigator.of(context).pop(context);
                          }, 
                          child: Text('close', style: TextStyle(color: Colors.blue),)),
                        ],
                      );
                    });
                  },
                  color: Colors.white,
                  textColor: Colors.grey,
                  elevation: 0.2,
                  child: Row(
                    children: [
                      Expanded(
                        child: Text('Qty'),
                      ),
                      Expanded(
                        child: Icon(Icons.arrow_drop_down),
                      ),
                    ],
                  ),

                ),
              ),
            ],
          ),


          //Second Button
          Row(
            children: [
              //Button Buy Now
              Expanded(
                child: MaterialButton(
                  onPressed: () {},
                  color: Colors.lightBlue,
                  textColor: Colors.white,
                  elevation: 0.2,
                  child: Text('Buy Now'),
                ),
              ),

              IconButton(icon: Icon(Icons.add_shopping_cart, color: Colors.lightBlue,), onPressed: (){}),
              IconButton(icon: Icon(Icons.favorite_border, color: Colors.lightBlue,), onPressed: (){}),
            ],
          ),
          Divider(color: Colors.lightBlue,),
          ListTile(
            title: Text('Product Details'),
            subtitle: Text(" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),
          ),
          Divider(color: Colors.lightBlue,),

          Row(children: [
            Padding(padding: const EdgeInsets.fromLTRB(12.0, 5.0, 5.0, 5.0),
            child: Text('Product Name ', style: TextStyle(color: Colors.grey),),),
            Padding(padding: const EdgeInsets.all(5.0), 
            child: Text(widget.productDetailsName),
            ),

            
          ],),
          //waiting to create product brand
          Row(children: [
            Padding(padding: const EdgeInsets.fromLTRB(12.0, 5.0, 5.0, 5.0),
            child: Text('Product Brand ', style: TextStyle(color: Colors.grey),),),
            Padding(padding: const EdgeInsets.all(5.0), 
            child: Text(widget.productDetailsName),
            ),
            
          ],),
          //waiting to create product condition
          Row(children: [
            Padding(padding: const EdgeInsets.fromLTRB(12.0, 5.0, 5.0, 5.0),
            child: Text('Product Condition ', style: TextStyle(color: Colors.grey),),),
            Padding(padding: const EdgeInsets.all(5.0), 
            child: Text(widget.productDetailsName),
            ),
            
          ],),
          Divider(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text('Similar Product'),
          ),
          // Similar Product Section
          Container(
            height: 310.0,
            child: SimilarProduct(),
          ),
        ],
      ),
    );
  }
}


class SimilarProduct extends StatefulWidget {
  @override
  _SimilarProductState createState() => _SimilarProductState();
}

class _SimilarProductState extends State<SimilarProduct> {
  
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
        return SingleProduct(
          productName: productList[index]['name'],
          productImage: productList[index]['picture'],
          productOldPrice: productList[index]['old_price'],
          productPrice: productList[index]['price'],
        );
      },
    );
  }
}