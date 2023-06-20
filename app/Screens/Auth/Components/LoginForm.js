import React, { useImperativeHandle, forwardRef } from 'react'
import { View, TouchableOpacity } from 'react-native';
import { AppController, AppText } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules, passwordRules } from '../../Common/Utils/inputRules/';
import { loginFromStyle } from "./styles";
const GLOBAL = require('../../Common/Globals');

const LoginForm = (props, ref) => {

    const { control, getValues, handleSubmit, formState: { errors } } = useForm();

    const { onForgotpasswordClick } = props;

    useImperativeHandle(ref, () => ({
        onLoginClicked: () => {
            handleSubmit(onSubmit)()
        },
    }))

    const onSubmit = () => {
        props.onSubmit(getValues());
    };

    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.email} name={'email'} placeholder={'Email'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.password} name={'password'}
                placeholder={'Password'} />
            <TouchableOpacity onPress={onForgotpasswordClick} style={loginFromStyle.forgetPassBTN}><AppText text={"Forget password?"} color={GLOBAL.Color.darkGrey}
                size={14} fontFamily={'Montserrat-SemiBold'} />
            </TouchableOpacity>
        </View>
    );

}
export default forwardRef(LoginForm);