import React from 'react'
import { View } from 'react-native';
import { AppBTN, AppController } from '../../Common';
import { useForm } from "react-hook-form";
import { nameRules, phoneRules } from '../../Common/Utils/inputRules/';

export default function ProfileForm(props) {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const { userObj, loading, onSubmitClicked } = props;
    const {
        firstName,
        lastName,
        phone,
        email
    } = userObj;

    const onSubmit = data => {
        onSubmitClicked(data);
    };


    return (
        <View>
            <AppController defaultValue={firstName} iconName={'account'}
                rules={[nameRules(), { required: false }]} control={control} error={errors.FirstName}
                name={'FirstName'} placeholder={'First Name'} />

            <AppController defaultValue={lastName} iconName={'account'}
                rules={[nameRules(), { required: false }]} control={control} error={errors.LastName}
                name={'LastName'} placeholder={'Last Name'} />

            <AppController defaultValue={phone} keyboardType={'numeric'}
                iconName={'cellphone'} rules={phoneRules()} control={control}
                error={errors.Phone} name={'Phone'} placeholder={'Phone'} />

            <AppController editable={false} defaultValue={email}
                keyboardType={'email-address'} control={control} error={errors.Email}
                name={'Email'} placeholder={'Email'} />

            <AppBTN onPress={handleSubmit(onSubmit)} text={'Save'} marginTop={45} loading={loading} />
        </View>
    );

}