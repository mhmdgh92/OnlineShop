import React from 'react'
import { View } from 'react-native';
import { AppBTN, AppController } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules } from '../../Common/Utils/inputRules/';

export default function ForgetPassForm(props) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const { onSubmitClicked, loading } = props;

    const onSubmit = data => {
        onSubmitClicked(data);
    };

    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.Email} name={'email'} placeholder={'Email'} />
            <AppBTN onPress={handleSubmit(onSubmit)} text={'Send'} marginTop={45} loading={loading} />
        </View>
    );

}