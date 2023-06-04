import AsyncStorage from '@react-native-async-storage/async-storage';

//////////////////////
// USER OBJECT
// FirstName
// LastName
// Phone
// Email
//////////////////////

export default class user {

    static userObj = null;

    static async loadData() {
        this.userObj = JSON.parse(await AsyncStorage.getItem('user'));
    }

    static async saveCurData() {
        await AsyncStorage.setItem('user', JSON.stringify(this.userObj))
    }

    static async saveNewData(user) {
        this.userObj = user;
        await AsyncStorage.setItem('user', JSON.stringify(this.userObj))
    }

    static async removeUser() {
        await AsyncStorage.removeItem('user')
    }
}