import React, { useEffect } from 'react'
import { View } from 'react-native';
import { AppBTN, AppController } from '../../Common';
import { useForm } from "react-hook-form";
import { nameRules, phoneRules } from '../../Common/Utils/inputRules/';

export default function ProfileForm(props) {

    const { userObj, loading, onSubmitClicked } = props;
    const {
        FirstName,
        LastName,
        Phone,
        Email
    } = userObj;
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            FirstName: FirstName,
            LastName: LastName,
            Phone: Phone,
            Email: Email
        }
    });

    const onSubmit = data => {
        onSubmitClicked(data);
    };

    return (
        <View>
            <AppController defaultValue={FirstName} iconName={'account'}
                rules={[nameRules(), { required: false }]} control={control} error={errors.FirstName}
                name={'FirstName'} placeholder={'First Name'} />

            <AppController defaultValue={LastName} iconName={'account'}
                rules={[nameRules(), { required: false }]} control={control} error={errors.LastName}
                name={'LastName'} placeholder={'Last Name'} />

            <AppController defaultValue={Phone} keyboardType={'numeric'}
                iconName={'cellphone'} rules={[phoneRules(), { required: false }]} control={control}
                error={errors.Phone} name={'Phone'} placeholder={'Phone'} />

            <AppController editable={false} defaultValue={Email}
                keyboardType={'email-address'} control={control} error={errors.Email}
                name={'email'} placeholder={'Email'} />

            <AppBTN onPress={handleSubmit(onSubmit)} text={'Save'} marginTop={45} loading={loading} />
        </View>
    );

}