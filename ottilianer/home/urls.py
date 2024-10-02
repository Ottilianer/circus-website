from django.contrib import admin
from django.urls import path

from ottilianer.home.views import home_view

urlpatterns = [
    path("", home_view, name="home"),
]
