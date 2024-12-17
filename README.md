# SHOWDOWN

## Installation

1. Cloning

```bash
git clone https://github.com/elhanbthomas/SHOWDOWN.git
```

2. Create virtual environment inside SHOWDOWN folder and activate
```bash
python -m venv venv

.\venv\Scripts\activate
```
3. Go to backend folder and install dependencies
```bash
cd backend

pip install -r requirements.txt
```

4. Modify settings.py
    - give appropriate postgres database name, username, password and port number.

5. Run the command
```bash
python manage.py migrate
```