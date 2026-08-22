# Notes REST API

Бекенд-додаток для керування нотатками, створений на Node.js, Express та MongoDB за допомогою Mongoose.

## Функціонал

- Отримання списку всіх нотаток (`GET /notes`)
- Отримання нотатки за її ID (`GET /notes/:noteId`)
- Створення нової нотатки (`POST /notes`)
- Оновлення існуючої нотатки (`PATCH /notes/:noteId`)
- Видалення нотатки (`DELETE /notes/:noteId`)
- Глобальний логер запитів `pino-http`
- Централізована обробка помилок `http-errors`

## Стек технологій

- Node.js (ES-модулі)
- Express.js
- MongoDB Atlas & Mongoose
- Pino & Pino-Pretty

## Як запустити локально

1. Встановіть залежності проєкту:
   npm install

2. Створіть у корені проєкту файл `.env` та додайте ваші змінні оточення:
   PORT=3000
   MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/my_database

3. Запустіть сервер у режимі розробки:
   npm run dev
