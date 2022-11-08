from email.policy import default
from itertools import product
from django.db import models
import uuid
from product.models import Product


class Cart(models.Model):
    user_session = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # cart_bag = models.ForeignKey(CartBag, related_name='carts', null=True, on_delete=models.CASCADE)

    class Meta:
        db_table = 'carts'
        ordering = ('updated_at',)
    
    def set_bag(self, product: Product, quantity: int) -> None:
        # Verify if .bag already have passed product
        def create_bag(product: Product, quantity: int) -> None:
            bag = CartBag(product=product, cart=self, quantity=quantity)
            bag.save()

        if self.bag.exists():
            bag = self.bag.filter(product=product)
            if bag:
                bag.quantity = quantity
                bag.save()
                return
        create_bag(product, quantity)
        return

    def delete_product_from_cart(self, product: Product) -> None:
        self.products.add(product)
        if not self.bag.exists():
            raise 'Tentando deletar de um Carrinho vazio, isso não é normal'
        bag = self.bag.filter(product=product)
        bag.delete()
        return

    def has_products(self):
        return self.bag.exists()

    def product_list_length(self):
        return len(self.bag.all())
    
    def get_product_list(self):
        return self.bag.all()

    def __str__(self) -> str:
        return str(self.user_session)


class CartBag(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    cart = models.ForeignKey(Cart, related_name='bag', on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(default=0)    
    
    # How to guarantee cart integrity with products remaigning

