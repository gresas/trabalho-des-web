# Manual do Mochileiro de Python

## Django WebFramework
Django é um sistema de gerenciamento e renderização de dados de um Modelo Entidade Relacional, também capaz de iniciar e manter servidores web utilizados para servir conteúdo estático aos browsers mais comuns.

### Django project

### Django application
When `$ django-admin startapp app-name` is executed, a python module is created. We call this module a Django App.
An application is defined in Django's Documentation as:
> "A app is a web application that does something - i.e., a weblog or a simple survey"

First of all, *Django Application* are not exactly a *Web Application*. In Django context, a web application is more related to the Django Project, although it is possible to have a project with only one Django App, isn't the best way to develop in Django Framework.

Why? 
It's very important that each Django App have a well defined funcionality. This makes it possible to reuse and simplifies the maintenance of your code.

When few apps are created to contain the system's main models and views, these apps will end up swelling up to accommodate other satellite features of the project. Consequently, the following appear in the project:

- Caos;
- Impossibility to code reuse;
- Duplicated code;
- Difficulty developing tests;
- Hard and expensive system maintenance;

<br>[Ref](https://henriquebastos.net/desmistificando-o-conceito-de-django-apps/)

### A way to render database data in HTML Templates: View
The views are...

### Setting up Django Environment

### Creating a virtual environment and installing django
```
$ python -m virtualenv venv
$ source ./venv/Scripts/activate
$ pip install django
```

### Creating a django project
This command create the project main folder, where resides ./manage.py file, used to start the server and do many other things.
```
$ django-admin startproject project-name
``` 

### Creating a application
Django has the concept of application, which means
```
$ django-admin startapp app-name
``` 

### Creating superuser
```
$ py .\manage.py createsuperuser
``` 

### Making table migrations
```
$ py .\manage.py makemigrations
$ py .\manage.py migrate
``` 

### Accessing Django interative Shell
```
$ py .\manage.py shell
``` 

### Por Dentro dos Django Templates

#### Iterando sobre dados em Templates
Para executar loops em um array é necessário seguir a estrutura de loop do Django para Templates: 
```
{% for item in item_set %}
    Do something...
{% endfor %}
```

Mais detalhes, consulte a [documentação](https://docs.djangoproject.com/en/4.1/ref/templates/builtins/#for)

Use `{{ variable_name }}` para acessar os dados que foram passados da View para o Template.
Ex.:
```
## In views.py ...
def loja_view(request):
    page_obj = Pagination(product_list, ITEMS_PER_PAGE)
    # More stuffs ...
    return render(request, 'loja/index.html', { 'page_obj': page_obj })

## In the template file
{% for product in page_obj %}
    <div class="pagination">
        ...
        <a href="{{ product.url }}">{{ product.name }}</a>
    </div>
{% endfor %}
``` 


#### Sistema de paginação em View
Componente da biblioteca `django.core.paginator.Paginator` que auxilia o gerenciamento de Templates de paginação renderizados por uma view.
Ex.:
```
# In views.py
from django.core.paginator import Paginator
from product.models import Product

ITEMS_PER_PAGE = 9

def index(request):
    product_list = Product.objects.all()
    paginator = Paginator(product_list, ITEMS_PER_PAGE)
    page_number = request.GET.get('page') # request querystring
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'loja/index.html', { 'page_obj': page_obj })

## In template HTML
## Paginator Component has useful properties
## like has_previous, has_next
{% if not page_obj.has_previous and not page_obj.has_next %}
    Do Stuffs ...
{% endif %}

## Also, carries the information about the previous, current and next pages
<li class="page-item active">
    <a class="page-link" href="?page={{ page_obj.previous_page_number }}">
        {{ page_obj.previous_page_number }}
    </a>
</li>
<li class="page-item">
    <a class="page-link" href="?page={{ page_obj.number }}">
        {{ page_obj.number }}   
    </a>
    (current)
</li>
<li class="page-item">
    <a class="page-link" href="?page={{ page_obj.number|add:'1' }}">
        {{ page_obj.next_page_number }}
    </a>
</li>
```

[Veja mais sobre, aqui](https://docs.djangoproject.com/en/4.1/topics/pagination/#pagination)


