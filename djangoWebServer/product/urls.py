from django.urls import path
from product import views

app_name = 'product'

urlpatterns = [
    path(r'<int:product_id>', views.index, name='index')
]