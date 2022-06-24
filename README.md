# React Native Practice 🌍
 
 ## DESCRIPTION
 리액트 네이티브 연습용 repo 입니다
 
 최종적으로 구현하고자하는 기능은 **D-day count & chat** !

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
 >  환경변수 .. 프로젝트 JDK 버전 잘 확인 .... 

---

 ## Project Component
### **Setting**
✔ **TouchableOpacity** : 자신이 감싼 범위의 컴포넌트를 터치할 수 있는 버튼으로 만들어주는 역할

  아래의 코드에서는 Image 를 버튼으로 만들어준다
```javascript
<TouchableOpacity>
        <Image source={require('./icon/setting.png')}/>
</TouchableOpacity>
```

### **Chat**
✔ **ScrollView** : 과거 로그를 보여주기 위해 
```javascript
<ScrollView style={styles.chatScrollView}>

</ScrollView>
```

✔ **Modal** : 설정 버튼을 통해 date 설정을 하기 위한 창으로 모든 컴포넌트를 덮어 렌더링되기 때문에 가장 하단부에 선언해야한다
              
✔ **props** : settings Modal 의 state 은 App.js 에 정의 -> 모달창의 외부를 누르는 버튼은 setting.js 에 정의 이러한 경우 읽기전용 데이터인 props 를 이용하여 부모 컴포넌트의 값을 자식 컴포넌트로 전달할 수 있다  .. 추가예정
