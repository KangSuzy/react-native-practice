# React Native Practice ๐
 
 ## DESCRIPTION
 ๋ฆฌ์กํธ ๋ค์ดํฐ๋ธ ์ฐ์ต์ฉ repo ์๋๋ค
 
 ์ต์ข์ ์ผ๋ก ๊ตฌํํ๊ณ ์ํ๋ ๊ธฐ๋ฅ์ **D-day count & chat** !

 ## ENVIRONMENT 
> Python Version 3.9.7 (Window)
> 
> Chocolatey 1.1.0
> 
> Node 18.3.0
> 
> Npm 8.12.1
> 
> React-Native-cli 2.0.1
> 
> Java 11


 ## PREREQUISTITE
 > AndroidSDK 
 >  - Android SDK Platform 28
 >  - Intelx86 Atom System Image
 >  - Google APIs Intel x86 Atom System Image
 >  - Google APIs Intel x86 Atom_64 System Image
 >  ํ๊ฒฝ๋ณ์ .. ํ๋ก์ ํธ JDK ๋ฒ์  ์ ํ์ธ .... 

---

 ## Project Component
### **Setting**
โ **TouchableOpacity** : ์์ ์ด ๊ฐ์ผ ๋ฒ์์ ์ปดํฌ๋ํธ๋ฅผ ํฐ์นํ  ์ ์๋ ๋ฒํผ์ผ๋ก ๋ง๋ค์ด์ฃผ๋ ์ญํ 

  ์๋์ ์ฝ๋์์๋ Image ๋ฅผ ๋ฒํผ์ผ๋ก ๋ง๋ค์ด์ค๋ค
```javascript
<TouchableOpacity>
        <Image source={require('./icon/setting.png')}/>
</TouchableOpacity>
```

### **Chat**
โ **ScrollView** : ๊ณผ๊ฑฐ ๋ก๊ทธ๋ฅผ ๋ณด์ฌ์ฃผ๊ธฐ ์ํด 
```javascript
<ScrollView style={styles.chatScrollView}>

</ScrollView>
```

โ **Modal** : ์ค์  ๋ฒํผ์ ํตํด date ์ค์ ์ ํ๊ธฐ ์ํ ์ฐฝ์ผ๋ก ๋ชจ๋  ์ปดํฌ๋ํธ๋ฅผ ๋ฎ์ด ๋ ๋๋ง๋๊ธฐ ๋๋ฌธ์ ๊ฐ์ฅ ํ๋จ๋ถ์ ์ ์ธํด์ผํ๋ค
              
โ **props** : settings Modal ์ state ์ App.js ์ ์ ์ -> ๋ชจ๋ฌ์ฐฝ์ ์ธ๋ถ๋ฅผ ๋๋ฅด๋ ๋ฒํผ์ setting.js ์ ์ ์ ์ด๋ฌํ ๊ฒฝ์ฐ ์ฝ๊ธฐ์ ์ฉ ๋ฐ์ดํฐ์ธ props ๋ฅผ ์ด์ฉํ์ฌ ๋ถ๋ชจ ์ปดํฌ๋ํธ์ ๊ฐ์ ์์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌํ  ์ ์๋ค  .. ์ถ๊ฐ์์ 
