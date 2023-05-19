import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { AppBTN, AppController, AppText, AppCheckBox } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules, passwordRules, phoneRules } from '../../Common/Utils/inputRules/';
import { heightPixel } from '../../Common/Utils/PixelNormalization';
const GLOBAL = require('../../Common/Globals');

export default function RegisterForm(props) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const { onPrivacyClick, onTermsClick, loading } = props;

    const onSubmit = data => {
        props.onSubmit(data);
    };

    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.Email} name={'Email'} placeholder={'Email'} />
            <AppController keyboardType={'numeric'} iconName={'cellphone'} rules={phoneRules()} control={control} error={errors.Phone} name={'Phone'} placeholder={'Phone'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.Password} name={'Password'} placeholder={'Password'} />
            <AppController secureTextEntry iconName={'lock'} rules={passwordRules()} control={control} error={errors.ConfirmPassword} name={'ConfirmPassword'} placeholder={'Confirm Password'} />
            <View style={{ marginTop: heightPixel(15), flexDirection: 'row', justifyContent: 'center' }}>
                <AppCheckBox />
                <AppText text={"\t \t I agree to the "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'} />
                <TouchableOpacity onPress={onPrivacyClick}><AppText text={"privacy policy"} textStyle={{ textDecorationLine: 'underline' }} color={'blue'} size={12} fontFamily={'Montserrat-SemiBold'} /></TouchableOpacity>
                <AppText text={" and "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'} />
                <TouchableOpacity onPress={onTermsClick}><AppText text={"terms of use"} color={'blue'} textStyle={{ textDecorationLine: 'underline' }} size={12} fontFamily={'Montserrat-SemiBold'} /></TouchableOpacity>
            </View>
            <AppBTN onPress={handleSubmit(onSubmit)} text={'Register'} marginTop={45} loading={loading} />
        </View>
    );

}