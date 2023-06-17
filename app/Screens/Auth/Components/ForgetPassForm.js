import React, { useImperativeHandle, forwardRef } from 'react'
import { View } from 'react-native';
import { AppBTN, AppController } from '../../Common';
import { useForm } from "react-hook-form";
import { emailRules } from '../../Common/Utils/inputRules/';

ForgetPassForm = (props, ref) => {

    const { control, getValues, handleSubmit, formState: { errors } } = useForm();

    useImperativeHandle(ref, () => ({
        onSendClicked: () => {
            handleSubmit(onSubmit)()
        },
    }))

    const onSubmit = () => {
        props.onSubmit(getValues());
    };

    return (
        <View>
            <AppController keyboardType={'email-address'} rules={emailRules()} control={control} error={errors.email} name={'email'} placeholder={'Email'} />
        </View>
    );

}

export default forwardRef(ForgetPassForm);