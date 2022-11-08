from cart.models import Cart

MAX_AGE = 24 * 60 * 60

def get_user_session_middleware(func):
    def process_view(self, request, view_func, view_args, view_kwargs):
        print(request)
        print(view_args)
        print(view_kwargs)
    
    def wrapper(request, *args, **kwargs):
        
        sessionid_cookie = request.COOKIES.get('sessionid', '')
        if not sessionid_cookie:
            cart = Cart()
            cart.save()
        else:
            cart = Cart.objects.filter(user_session=sessionid_cookie)[0]
        if not cart:
            raise 'invalid access'
        kwargs['cart'] = cart
        response = func(request, *args, **kwargs)
        response.set_cookie('sessionid', cart, max_age=MAX_AGE)
        return response

    return wrapper