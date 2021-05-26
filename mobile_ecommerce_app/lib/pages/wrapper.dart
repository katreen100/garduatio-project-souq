import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:mobile_ecommerce_app/home.dart';
import 'package:mobile_ecommerce_app/pages/authentication.dart';
import 'package:provider/provider.dart';

class Wrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final user = Provider.of<User>(context);
    if(user != null){
      return HomePage();
    }
    else {
      return Authentication();
    }
    
  }
}