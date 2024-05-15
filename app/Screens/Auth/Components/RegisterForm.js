import React, { useImperativeHandle, forwardRef } from 'react'
import { View, TouchableOpacity } from 'react-native';
import { AppBTN, AppController, AppText, AppCheckBox } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules, passwordRules, phoneRules } from '../../Common/Utils/inputRules/';
const GLOBAL = require('../../Common/Globals');
import { registerFormStyle } from "./styles";

const RegisterForm = (props, ref) => {

    const { control, getValues, handleSubmit, formState: { errors } } = useForm();

    const { onPrivacyClick, onTermsClick } = props;

    useImperativeHandle(ref, () => ({
        onRegisterClicked: () => { handleSubmit(onSubmit)() },
    }))

    const onSubmit = () => {
        props.onSubmit(getValues());
    };

    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.email} name={'email'} placeholder={'Email'} />
            <AppController keyboardType={'numeric'} iconName={'cellphone'} rules={phoneRules()} control={control} error={errors.phone} name={'phone'} placeholder={'Phone'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.password} name={'password'} placeholder={'Password'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.confirmPassword} name={'confirmPassword'} placeholder={'Confirm password'} />
            <View style={registerFormStyle.innerView}>
                <AppCheckBox />
                <AppText text={"\t \t I agree to the "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'} />
                <TouchableOpacity onPress={onPrivacyClick}><AppText text={"privacy policy"} textStyle={{ textDecorationLine: 'underline' }} color={'blue'} size={12} fontFamily={'Montserrat-SemiBold'} /></TouchableOpacity>
                <AppText text={" and "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'} />
                <TouchableOpacity onPress={onTermsClick}><AppText text={"terms of use"} color={'blue'} textStyle={{ textDecorationLine: 'underline' }} size={12} fontFamily={'Montserrat-SemiBold'} /></TouchableOpacity>
            </View>
        </View>
    );

}

export default forwardRef(RegisterForm);