from email.policy import default
from tokenize import blank_re
from django.db import models
from category.models import Category
from pathlib import Path


class Flavor(models.Model):    
    name = models.CharField(max_length=100, db_index=True, unique=True)
    slug = models.CharField(max_length=100)

    class Meta:
        db_table = 'flavors'
        ordering = ('name',)
    
    def __str__(self) -> str:
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', null=True, on_delete=models.PROTECT)
    name = models.CharField(max_length=100, db_index=True, unique=True)
    slug = models.CharField(max_length=100)
    image_name = models.CharField(max_length=50, blank=True)
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    available = models.BooleanField(default=False)
    flavors = models.ManyToManyField(Flavor, related_name='flavors', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'product'

    def __str__(self) -> str:
        return self.name

    def get_flavors_list(self):
        return self.flavors.all()

    def create_cart_for_session(self):
        pass

    def add_product_for_cart_session(self):
        pass