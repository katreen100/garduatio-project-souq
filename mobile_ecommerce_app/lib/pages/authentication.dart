import 'package:flutter/material.dart';
import 'package:mobile_ecommerce_app/pages/login.dart';
import 'package:mobile_ecommerce_app/pages/register.dart';

class Authentication extends StatefulWidget {
  @override
  _AuthenticationState createState() => _AuthenticationState();
}

class _AuthenticationState extends State<Authentication> {
  bool isToggle = false;
  void toogleScreen(){
    setState(() {
      isToggle = !isToggle;
    });
  }
  @override
  Widget build(BuildContext context) {
    if(isToggle){
      return Register(toogleScreen : toogleScreen);
    }
    else{
      return Login(toogleScreen: toogleScreen);
    }
  }
}