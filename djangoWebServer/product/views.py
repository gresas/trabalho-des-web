from django.shortcuts import render
from product.models import Product
from djangoWebServer.decorators import get_user_session_middleware

@get_user_session_middleware
def index(request, product_id, cart):
    
    product = Product.objects.get(pk=product_id)
    return render(request, 'product/index.html', {'product': product, 'cart': cart})
