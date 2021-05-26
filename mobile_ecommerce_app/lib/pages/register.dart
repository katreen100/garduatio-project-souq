import 'package:flutter/material.dart';
import 'package:mobile_ecommerce_app/serivce/auth_service.dart';
import 'package:provider/provider.dart';

class Register extends StatefulWidget {
  final Function toogleScreen;

  const Register({Key key, this.toogleScreen}) : super(key: key);
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  TextEditingController _emailController;
  TextEditingController _passwordController;
  final _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    _emailController = TextEditingController();
    _passwordController = TextEditingController();

    super.initState();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final loginProvider = Provider.of<AuthService>(context);
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                
                children: [
                  IconButton(icon: Icon(Icons.arrow_back_ios),
                  color: Theme.of(context).primaryColor,
                   onPressed: (){}),
                  SizedBox(
                    height: 60,
                  ),
                  
                  Text(
                    'Welcome ',
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Text(
                    'Create Account to continue ',
                    style: TextStyle(fontSize: 14, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 30,
                  ),
                  TextFormField(
                    controller: _emailController,
                    validator: (val) =>
                        val.isNotEmpty ? null : 'Please Enter Email Address',
                    decoration: InputDecoration(
                      hintText: 'Enter Email Address',
                      prefixIcon: Icon(Icons.email),
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20)),
                    ),
                  ),
                  SizedBox(
                    height: 30,
                  ),
                  TextFormField(
                    validator: (val) => val.length < 6
                        ? 'Please Enter password more than 6 char '
                        : null,
                    controller: _passwordController,
                    decoration: InputDecoration(
                      hintText: 'Enter Password',
                      prefixIcon: Icon(Icons.lock),
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20)),
                    ),
                  ),
                  SizedBox(
                    height: 30,
                  ),
                  MaterialButton(
                      height: 60,
                      minWidth: loginProvider.isLoading? null : double.infinity,
                      color: Theme.of(context).primaryColor,
                      textColor: Colors.white,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20)),
                      child: loginProvider.isLoading? CircularProgressIndicator(
                        valueColor: new AlwaysStoppedAnimation<Color>(Colors.white),
                      ) : Text(
                        'Register',
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.bold),
                      ),
                      onPressed: () async{
                        if (_formKey.currentState.validate()) {
                          print('${_emailController.text}');
                          print('${_passwordController.text}');
                          await loginProvider.register(_emailController.text.trim(), 
                          _passwordController.text.trim()); 
                        }
                      }),
                  SizedBox(
                    height: 20,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                    Text("Already have an account ? "),
                    SizedBox(width: 10,),
                    TextButton(onPressed: () { 
                      widget.toogleScreen();
                     },
                  child: Text("Login"),),
                  ],),
                  SizedBox(height: 20,),
                  if(loginProvider.errorMessage != null)
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    color: Colors.amberAccent,
                    child: ListTile(
                      title: Text(loginProvider.errorMessage),
                      leading: Icon(Icons.error),
                      trailing: IconButton(icon: Icon(Icons.close), onPressed: (){
                        loginProvider.setMessage(null);
                      }),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
