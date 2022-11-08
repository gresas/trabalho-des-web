from django.shortcuts import render
from django.core.paginator import Paginator
from product.models import Product
from djangoWebServer.decorators import get_user_session_middleware


ITEMS_PER_PAGE = 9

@get_user_session_middleware
def index(request, cart):
    # frase = "Estou aqui"
    product_list = Product.objects.all()
    paginator = Paginator(product_list, ITEMS_PER_PAGE)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    print(page_number)
    
    return render(request, 'loja/index.html', { 'page_obj': page_obj, 'cart': cart })