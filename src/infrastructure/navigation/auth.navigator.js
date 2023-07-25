import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens/login/login.screen";
import { RegisterScreen } from "../../screens/register/register.screen";
import { PasswordForgot } from "../../screens/passwordForgot/passwordForgot.screen";

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPswd" component={PasswordForgot} />
    </AuthStack.Navigator>
  );
};
