# List Kelompok
- 22201278 - Muhammad Andika Dayu AP
- 22201152 - Wahyu Hendriansyah

# Installation
- install venv
    ```bash
    python -m venv .venv
    ```
- activate venv
    - Windows
    ```cmd
    .venv\Scripts\activate
    ```
    - Mac / Linux
    ```bash
    source .venv/bin/activate
    ```
- install all requirement file
  ```bash
  pip install -r requirements.txt
  ```



# Run Server
- change directory
  ```bash
  cd my_landing_page
  ```
- create superuser (skip when has already created)
  ```bash
  python manage.py createsuperuser
  ```
- run server
  ```bash
  python manage.py runserver
  ```