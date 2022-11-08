from django.contrib import admin

from product.models import Product, Flavor

class FlavorAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']

class FlavorInline(admin.StackedInline):
    model = Product.flavors.through

class ProductAdmin(admin.ModelAdmin):
    fields = ('category', 'name', 'slug', 'image_name', 'quantity', 'price', 'flavors', 'available')
    list_display = ['name', 'slug', 'category', 'image_name', 'quantity', 'price', 'available']
    search_fields = ['name', 'image_name']
    list_filter = ['category']
    list_editable = ['category', 'image_name', 'quantity', 'price', 'available']
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Product, ProductAdmin)
admin.site.register(Flavor, FlavorAdmin)
