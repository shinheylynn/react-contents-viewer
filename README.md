# React 로 구현하는 콘텐츠 뷰

## 🖥️ 해상도

- [x] 해상도는 width 425px에 최적화 되어 있다.

<br/>

## 📋 카테고리

- [x] 카테고리는 "차트", "Whook", "이벤트", "뉴스", "스토어", "충전소"로 이루어져 있다.
- [x] 카테고리 버튼을 누르면 선택된 카테고리만 색이 바뀐다.
- [x] 카테고리간 이동은 좌<->우 슬라이드 터치를 통해서 가능하다.
- [x] 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되어 있다.
- [x] 카테고리에 속한 콘텐츠는 무한 스크롤이 가능한 형태이다.
- [ ] 카테고리 별로 동일한 리스트 페이지가 구현된다. 🐞
- [ ] 카테고리간 이동은 상단의 탭 메뉴 클릭으로 가능하다. 🐞

> 1. 컴포넌트의 재사용을 위해 `Categories.jsx` 내에서 `Banners.jsx` 와 `Rankings.jsx` 에게 `props` 로 `categoriesData.json` 의 `id` 값을 전달.
>
> ```
> // Categories.jsx
> <Banners data={selectedCategoryData ? selectedCategoryData.id : null} />
> <Rankings data={selectedCategoryData ? selectedCategoryData.id : null} />
> ```
>
> 2. `Banners.jsx` 와 `Rankings.jsx` 에서 전달 받은 `id` 값을 `categoryId` 로 불러와 `useEffect` 를 이용한 비동기 처리.
>
> ```
> const Banners = ({ data: categoryId }) => { ... }
> const Rankings = ({ data: categoryId }) => { ... }
> ```
>
> 3. 어떤 카테고리가 클릭되느냐에 따라 `categoryId` 값이 바뀌고, 그에 상응하는 `bannersData.json` 데이터 혹은 `rankingsData.json` 데이터를 불러와 리스트 페이지를 동적으로 렌더링 처리하고자 한 게 최종 목표
>
> - categoryId 값이 undefined로 불러와지는 오류
>   -> 시간 부족으로 오류를 해결하지 못하였음. 🐞 🔧

<br/>

## 🖼️ 배너

- [x] 중단의 배너 영역은 슬라이드형이다.
- [x] 중단의 배너는 최소 3개의 배너로 구성되어 있다.
- [x] 중단의 배너는 무한루프 동작이 가능하다.
- [x] 중단의 배너를 클릭 시 링크 이동이 가능하다.

<br/>

## 📁 세로형 콘텐츠

- [x] 순위형 콘텐츠는 무한 스크롤이 가능한 형태이다.
- [x] 순위형 콘텐츠 아이템들은 스크롤을 실행한 경우에만 추가로 로딩된다.

<br/>
<br/>

# 방향성

컴포넌트의 재사용성 및 확장성을 용이하게 하기 위해 구조를 수정하고자
