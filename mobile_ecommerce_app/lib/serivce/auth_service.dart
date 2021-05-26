
import 'dart:io';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';

class AuthService with ChangeNotifier{
  bool _isloading = false;
  bool get isLoading => _isloading;
  String _errorMeassge;
  String get errorMessage => _errorMeassge;
  FirebaseAuth firebaseAuth = FirebaseAuth.instance;

  Future register(String email, String password) async{
    setLoading(true);
    try{
      UserCredential authResult = await firebaseAuth.createUserWithEmailAndPassword(
        email: email, password: password);
        User user = authResult.user;
        setLoading(false);
        return user;
    } on SocketException {
      setLoading(true);
      setMessage('No Internet Please connect to network ');
      }
    catch (e){
      setLoading(true);
      setMessage(e.message);
    }
    notifyListeners();
  }



  
  Future login(String email, String password) async{
    setLoading(true);
    try{
      UserCredential authResult = await firebaseAuth.signInWithEmailAndPassword(
        email: email, password: password);
        User user = authResult.user;
        setLoading(false);
        return user;
    } on SocketException {
      setLoading(true);
      setMessage('No Internet Please connect to network ');}
    catch (e){
      setLoading(true);
      setMessage(e.message);
    }
    notifyListeners();
  }

  Future logout()async {
    await firebaseAuth.signOut();
  }

  void setLoading(val){
    _isloading = val;
    notifyListeners();

  }

  void setMessage(message){
    _errorMeassge = message;
    notifyListeners();
  }
  Stream <User> get user => firebaseAuth.authStateChanges().map((event)=>event);
}