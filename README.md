# 3 занятие

## Домашнее задание

- указать в readme.md декомпозицию, оценку, реально затраченное время
- перевести 1, 2, 3 страницу на redux-form (в отдельной ветке)
- подключить 3 страницу к редаксу
- сделать перевод валюты через 2 текстовых инпута
- для создания экшнов использовать библиотеку по типу redux-act или redux-actions
- Реализовать логику компонента DeliveryTime (по клику на время должно открываться модальное окно с выбором времени доставки)


### Ссылки:

redux https://redux.js.org/  
redux-persist https://github.com/rt2zz/redux-persist  
reselect https://github.com/reduxjs/reselect  
connected-react-router https://github.com/supasate/connected-react-router  
redux-form https://redux-form.com/8.2.0/  
redux-saga https://redux-saga.js.org/  

### Дедлайн

Понедельник, 15 апреля, 12:00 KGD

# Процесс выполнения

## Результат

https://blissful-jennings-be36e0.netlify.com/  

Contents:  
- SignIn (redux-act)
- SignInConfirm
- Exchange (redux-act)
  - SelectCountry (with Routing)
  - Convertation (render prop)
  - Timing (Modal with createPortal)
- Receipt summary
- Branch redux-form

### Time

|Task|Est|Fact|
|-|-|-|
|Setup (extra branching)|2 hours|2 hours|
|redux-form|3 hours|5 hours|
|Exchange with Redux|3 hours|3 hours|
|Convertation|2 hours|4 hours|
|Timing for DeliveryTime|3 hours|4 hours|
|redux-act|3 hours|2 hours|

