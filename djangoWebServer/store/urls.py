from django.urls import path
from store import views

app_name = 'store'

urlpatterns = [
    path(r'', views.index, name='index')
]