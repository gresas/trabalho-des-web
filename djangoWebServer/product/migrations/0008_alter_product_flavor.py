# Generated by Django 4.1.3 on 2022-11-03 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_alter_product_flavor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='flavor',
            field=models.CharField(blank=True, default='', max_length=50),
            preserve_default=False,
        ),
    ]
