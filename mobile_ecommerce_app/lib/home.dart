import 'package:flutter/material.dart';
import 'package:carousel_pro/carousel_pro.dart';
// my own package
import 'package:mobile_ecommerce_app/components/horizontal_list_view.dart';
import 'package:mobile_ecommerce_app/components/products.dart';
import 'package:mobile_ecommerce_app/pages/cart.dart';
import 'package:mobile_ecommerce_app/serivce/auth_service.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  
  @override
  Widget build(BuildContext context) {
    final loginProvider = Provider.of<AuthService>(context);
    Widget imageCarsoul = new Container(
      height: 200,
      child: Carousel(
        boxFit: BoxFit.cover,
        images: [
          AssetImage('images/shoses2.jpg'),
          AssetImage('images/watches.jpg'),
          AssetImage('images/clothes.jpg'),
          AssetImage('images/all.jpg'),
          
        ],
        autoplay: true,
        animationCurve: Curves.fastOutSlowIn,
        animationDuration: Duration(milliseconds: 1000),
        dotSize: 4.0,
        indicatorBgPadding: 2.0,
        dotColor: Colors.red,
        dotBgColor: Colors.transparent,
        

      ),
    );
    return Scaffold(
      appBar: AppBar(
        elevation: 0.1,
        backgroundColor: Colors.red,
        title: Text('Ecommerce App'),
        actions: [
          IconButton(
              icon: Icon(
                Icons.search,
                color: Colors.white,
              ),
              onPressed: () {}),
          IconButton(
              icon: Icon(
                Icons.shopping_cart,
                color: Colors.white,
              ),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context)=> CartPage()));
              })
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            // header
            UserAccountsDrawerHeader(
              accountName: Text('Mostafa'),
              accountEmail: Text('mostafasaqly12gmail.com'),
              currentAccountPicture: GestureDetector(
                child: CircleAvatar(
                  backgroundColor: Colors.grey,
                  child: Icon(Icons.person, color: Colors.white),
                ),
              ),
              decoration: BoxDecoration(color: Colors.red),
            ),
            //body
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Home'),
                leading: Icon(Icons.home, color: Colors.red,),
              ),
            ),

            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('My Account'),
                leading: Icon(Icons.person, color: Colors.red,),
              ),
            ),

            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Orders'),
                leading: Icon(Icons.shopping_basket, color: Colors.red,),
              ),
            ),

            InkWell(
              onTap: () {
                Navigator.push(context, MaterialPageRoute(builder: (context)=> CartPage()));
              },
              child: ListTile(
                title: Text('Shopping Cart'),
                leading: Icon(Icons.shopping_cart, color: Colors.red,),
              ),
            ),

            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Favories'),
                leading: Icon(Icons.favorite, color: Colors.red,),
              ),
            ),

            Divider(),
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Settings'),
                leading: Icon(Icons.settings),
              ),
            ),
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('About'),
                leading: Icon(Icons.help),
              ),
            ),

            InkWell(
              onTap: () async{
                await loginProvider.logout();
              },
              child: ListTile(
                title: Text('LogOut'),
                leading: Icon(Icons.logout),
              ),
            ),


            

          ],
        ),
      ),
      body: Column(children: [
        //imageCarsoul
        imageCarsoul,
        // padding
        Padding(padding: const EdgeInsets.all(8.0),
        child: Container(
          alignment: Alignment.centerLeft,
          child: Text('Categories')),
        ),
        //Horizontal list
        HorizontalList(),

        Padding(padding: const EdgeInsets.all(20.0),
        child: Container(
          alignment: Alignment.centerLeft,
          child: Text('Recent Product')),
        ),

        Flexible(
        child: Products(),
        ),
        
      ],
      ),
    );
  }
}
