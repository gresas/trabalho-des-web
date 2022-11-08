from django.shortcuts import render
from djangoWebServer.decorators import get_user_session_middleware

@get_user_session_middleware
def index(request, cart):
    if not cart.has_products():
         # anonymous user
         return render(request, 'cart/empty_cart.html', {'cart': cart})
    return render(request, 'cart/index.html', {'cart': cart})