# React-Native Practice
 
 ## DESCRIPTION
 *프로젝트에 대한 간단한 설명 기술 추후 추가 .. 리액트 네이티브 연습용 .. !*
 
 최종적으로 구현하고자하는 기능 : **D-day count & chat**
 

 ## ENVIRONMENT 
 *실행환경 기술 ( os .. 패키지버전등 .. )*
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
  *실행하기 전 설치해야할 패키지*
 > AndroidSDK 
 >  - Android SDK Platform 28
 >  - Intelx86 Atom System Image
 >  - Google APIs Intel x86 Atom System Image
 >  - Google APIs Intel x86 Atom_64 System Image
 >  환경변수 .. 프로젝트 JDK 버전 잘 확인 .... 
 >  
 >  *일단 성공한 블로그 포스팅 첨부 ....https://wpioneer.tistory.com/55*

---

 ## Project Component
### **Setting**
- **TouchableOpacity** : 자신이 감싼 범위의 컴포넌트를 터치할 수 있는 버튼으로 만들어주는 역할

  아래의 코드에서는 Image 를 버튼으로 만들어준다
```javascript
<TouchableOpacity>
        <Image source={require('./icon/setting.png')}/>
</TouchableOpacity>
```
### **D-day**
- **Text**
### **Chat**
- **ScrollView** : 과거 로그를 보여주기 위해 
```javascript
...
```
