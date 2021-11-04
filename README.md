# :pushpin: The_2nd_half-To_do(작업중)
>다가오는 크리스마스와 연말 D-day counter를 보며 하반기 To Do List를
간단하게 계획할 수 있는 웹페이지입니다

>https://irrpl-ar.github.io/The_2nd_half-To_do/

</br>

## 1. 제작 기간 & 참여 인원
- 2021년 10월 31일 ~ ing
- 개인 프로젝트

</br>

## 2. 사용 기술
#### `Front-end`
  - Javascript
  - HTML/CSS

</br>

## 3. 핵심 기능
- (작업한 파일들은 gh-pages 브랜치에 업로드)   

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### D-day Counter
- 현재 시각 기준(대한민국 표준시)으로 하여 올해 크리스마스와 연말 남은 시간을 보여주는
단순한 D-day Counter를 구현했습니다
- Date와 getTime 으로 남은 일 수, 시간을 구하고 setInterval을 1초마다 작동시켜
실시간으로 남은 일수와 시간을 알 수 있게 했습니다

### To Do List
- 간단한 To Do를 작성하고 엔터키를 누르면 화면에 표시되도록 구현했습니다
- localStorage.setItem과 getItem을 통해 새로고침을 해도 화면에 To Do List가
저장되어있도록 했습니다

</div>
</details>

</br>

## 4. 디버깅

### 4-2. 각종 디버깅
<details>
<summary>원격 저장소 연결 시 발생 오류</summary>
<div markdown="1">

fatal : not a git repository <or any of the parent directories>: .git
git init을 먼저 하고 원격 저장소 연결 해야함

</div>
</details>
    
</br>

<details>
<summary>quotes(랜덤 명언).js 파일이 화면에 안 나타남</summary>
<div markdown="1">

id가 quote인 div 의 span을 가져올 때
document.getElementsbyId(“quote span:first-child”)로 가져오니 화면에 안 나타남

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

위와 같이 수정하니 작동함
</div>
</details>
    
</br>

<details>
<summary>.classlist.add 로 여러개 클래스 추가시 잘 안되는 문제</summary>
<div markdown="1">

000.classlist.add(“class1 class2”); 공백으로 구분하니 적용 안됨
000.classlist.add(“class1”, “class2”); 로 해결

</div>
</details>
    
</br>

<details>
<summary>D-day가 화면에 출력 안 되는 문제</summary>
<div markdown="1">

const dday = document.querySelector("#xmasdday span:first-child");
const hms = document.querySelector("#xmasdday span:last-child");

▼기존 코드
function ddayCounter() {
    const dday = new Date("Dec 25,2021,00:00:00").getTime();

▼수정한 코드
function ddayCounter() {
    const xmas = new Date("2021-12-25T00:00:00+0900");
    const now = new Date();
    const distance = xmas.getTime() - now.getTime();

날짜 표시 방식을 수정하고 getTime을 밑으로 내리니 해결이 됨.
이 부분에 대해서는 왜 그런지 더 고민해봐야할듯함.

</div>
</details>
    
</br>

<details>
<summary>dday라는 변수가 두 개 있어서 생긴 문제</summary>
<div markdown="1">

HTML의 span 요소를 가져오는 변수와 함수 내 변수명이 동일해서 작동이 잘 안됨.
ddayCounter 함수 안의 변수 xmas 로 변수명 바꿔주니 해결됨

</div>
</details>
    
</br>

<details>
<summary>dday counter가 제대로 안되는 문제</summary>
<div markdown="1">

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
여기에 1000 부분을 10000으로 해서 날짜가 이상하게 나옴
console.log(xmas, now, distance) 로 찍어보고 이상한 부분 발견함

</div>
</details>
    
</br>

<details>
<summary>padStart 적용 문제</summary>
<div markdown="1">

const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");

괄호를 잘못 사용해서 문제가 생겼음. String 적용은 Math부터 *60까지의 숫자에만 해야하는데, padStart까지 적용시켜서 제대로 작동 안함. 괄호 수정 후 제대로 작동함

</div>
</details>
    
</br>

<details>
<summary>todo list가 나타나지 않는 문제</summary>
<div markdown="1">

맨 처음 to do list를 만들 때는 form을 썼다가, 이번에는 입력폼에 css 애니메이션이 들어가서 div로 묶었었다. 그러니까 설치한 submit 이벤트가 전혀 안먹힘.
form으로 바꾸니 해결

</div>
</details>
    
</br>


## 5. 회고 / 느낀점
>완료되면 적기
