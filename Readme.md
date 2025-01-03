# COUNTRY FULLSTACK

This app provides detailed information about countries, including borders, flags, and population data, allowing users to explore and navigate through different countries.

## How to use

1. **Clone the repository**

   ```bash
   git clone https://github.com/Subm1s/country-fullstack
   cd country-fullstack
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Create backend .env file**

   ```bash
    COUNTRY_ENDPOINT = https://example.com
    POPULATION_ENDPOINT = https://example.com

    PORT = example
   ```

4. **Forward port**

   Run the development port

```bash
 npm run dev
```

Foward port, make visibility public and copy it, so that you can paste it in frontend .env. Port forwarded should be the same as port your server is running on.

5. **Go to front folder and install dependencies**

   ```bash
   cd ..
   cd front
   npm install

   ```

6. **Create frontend .env file**

   Here you should paste forwarded port link

   ```bash
   VITE_APP_KEY=https://example.com
   ```

7. **Run port**

   Run the development port

```bash
 npm run dev
```

8. **Open app link**

```bash
http://localhost:5173
```
