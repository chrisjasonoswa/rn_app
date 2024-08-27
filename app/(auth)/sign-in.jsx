import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  });
  

  return (
    <SafeAreaView
      className="bg-primary h-full"
    >
      <View className="w-full h-full px-4 my-6">
        <Image 
          source={images.logo} 
          resizeMode="contain"
          className="w-[115px] h-[35px]"
        />
        
        <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({... form, 
            email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({... form, 
            password: e})}
          otherStyles="mt-7"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
