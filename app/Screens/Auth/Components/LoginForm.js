import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { AppBTN, AppController, AppText } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules, passwordRules } from '../../Common/Utils/inputRules/';
import { heightPixel } from '../../Common/Utils/PixelNormalization';
const GLOBAL = require('../../Common/Globals');

export default function LoginForm(props) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const { onForgotPasswordClick, loading } = props;

    const onSubmit = data => {
        props.onSubmit(data);
    };


    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.Email} name={'email'} placeholder={'Email'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.Password} name={'Password'} placeholder={'Password'} />
            <TouchableOpacity onPress={onForgotPasswordClick} style={{ marginTop: heightPixel(10) }}><AppText text={"Forget Password?"} color={GLOBAL.Color.darkGrey}
                size={14} fontFamily={'Montserrat-SemiBold'} />
            </TouchableOpacity>
            <AppBTN onPress={handleSubmit(onSubmit)} text={'Login'} marginTop={45} loading={loading} />
        </View>
    );

}