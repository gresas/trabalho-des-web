from django.shortcuts import render
from .decorators import get_user_session_middleware


@get_user_session_middleware
def index(request, cart):
    # Something to generate a anonymous session and control user experience
    # request.set_signed_cookie('sessionid', value, salt='salto1', max_age=None, expires=None, path='/', domain=None, secure=False, httponly=False, samesite=None)
    print(cart.has_products())
    response = render(request, 'index.html', { 'cart': cart })
    return response
