import React from 'react'
import { View } from 'react-native';
import { AppBTN, AppController } from '../../Common';
import { useForm } from "react-hook-form";
import { nameRules, phoneRules } from '../../Common/Utils/inputRules/';

export function ProfileForm(props) {

    const { userObj, loading, onSubmitClicked } = props;
    const {
        firstName,
        lastName,
        phone,
        email
    } = userObj;
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        }
    });

    const onSubmit = data => {
        onSubmitClicked(data);
    };

    return (
        <View>
            <AppController defaultValue={firstName} iconName={'account'}
                rules={[nameRules(), { required: false }]} control={control} error={errors.firstName}
                name={'firstName'} placeholder={'First Name'} />

            <AppController defaultValue={lastName} iconName={'account'}
                rules={[nameRules(), { required: false }]} control={control} error={errors.lastName}
                name={'lastName'} placeholder={'Last Name'} />

            <AppController defaultValue={phone} keyboardType={'numeric'}
                iconName={'cellphone'} rules={[phoneRules(), { required: false }]} control={control}
                error={errors.phone} name={'phone'} placeholder={'Phone'} />

            <AppController editable={false} defaultValue={email}
                keyboardType={'email-address'} control={control} error={errors.email}
                name={'email'} placeholder={'Email'} />

            <AppBTN onPress={handleSubmit(onSubmit)} text={'Save'} marginTop={45} loading={loading} />
        </View>
    );

}