# store-e2e-playwright

## Предустановки

### 1. Установка Playwright и браузеров

- `npm init playwright@latest` — инициализация проекта и установка браузеров.
- При необходимости браузеры можно доустановить отдельно: `npx playwright install`.

### 2. Установка ESLint для TypeScript

- `npm install --save-dev eslint @eslint/js typescript-eslint`
- Конфигурация (`eslint.config.mjs`, Flat Config) перенесена из предыдущего проекта.

## Скрипты для запуска (package.json)

- `"test": "playwright test"` — запуск тестов без UI.
- `"test:ui": "playwright test --ui"` — запуск тестов в UI-режиме (удобно для просмотра и отладки).
- `"lint": "eslint ."` — проверка кода линтером.

## Техническая информация

1. Тесты запускаются только в **Blink (Chromium)**.
2. Проектирование тестовой архитектуры по паттерну **Page Object Model (POM)**.
3. Написание e2e-тестов с использованием **кастомных фикстур (custom fixtures)**.

## Описание проекта и цели

1. E2E-тесты для стороннего сайта-песочницы.
2. Практика и закрепление имеющихся навыков в роли AQA.
3. Освоение новых навыков AQA в Playwright + TypeScript.

## Используемые технологии и инструменты

- **IDE:** VS Code
- **Расширения VS Code:**
  - Atom Material Icons
  - Atom One Light Theme
  - Auto Import
  - ESLint
  - Git Graph
  - Git History
  - Playwright Test for VSCode
- **Язык:** TypeScript
