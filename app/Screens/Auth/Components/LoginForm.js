import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { AppBTN, AppController, AppText } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules, passwordRules } from '../../Common/Utils/inputRules/';
import { loginFromStyle } from "./styles";
const GLOBAL = require('../../Common/Globals');

export default function LoginForm(props) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const { onForgotpasswordClick, loading } = props;

    const onSubmit = data => {
        props.onSubmit(data);
    };


    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.email} name={'email'} placeholder={'Email'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.password} name={'password'}
             placeholder={'Password'} />
            <TouchableOpacity onPress={onForgotpasswordClick} style={loginFromStyle.forgetPassBTN}><AppText text={"Forget password?"} color={GLOBAL.Color.darkGrey}
                size={14} fontFamily={'Montserrat-SemiBold'} />
            </TouchableOpacity>
            <AppBTN onPress={handleSubmit(onSubmit)} text={'Login'} marginTop={45} loading={loading} />
        </View>
    );

}