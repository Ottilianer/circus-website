from ottilianer.config.settings.base import *

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


SECRET_KEY = "django-insecure-78oxbd$l4lf)#@(*8y$-h=la#@9#f3y@^$@sq#4moru(%v*jx6"

# SECURITY WARNING: don't run with debug turned on in production!

ALLOWED_HOSTS = []
