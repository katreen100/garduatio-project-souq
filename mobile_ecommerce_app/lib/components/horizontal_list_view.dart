import 'package:flutter/material.dart';

class HorizontalList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50.0,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          Category(
            imageLocation: 'images/cat/clothesCategory.png',
            imageCaption: 'clothes',
          ),
          Category(
            imageLocation: 'images/cat/shosesCategory.png',
            imageCaption: 'shoses',
          ),
          Category(
            imageLocation: 'images/cat/watchesCategory.png',
            imageCaption: 'watches',
          ),
        ],
      ),
    );
  }
}

class Category extends StatelessWidget {
  final String imageLocation;
  final String imageCaption;

  Category({ this.imageCaption, this.imageLocation });
  @override
  Widget build(BuildContext context) {
    return Padding(padding: const EdgeInsets.all(2.0),
    child: InkWell(onTap: (){},
    child: Container(
      width: 80.0,

      child: ListTile(
        title: Image.asset(imageLocation, width: 40, height: 40,),
        subtitle: Container(
          alignment: Alignment.topCenter,
          child: Text(imageCaption, style: TextStyle(fontSize: 12.0),),
        ),
      ),
    ),
    ),  
    );
  }
}