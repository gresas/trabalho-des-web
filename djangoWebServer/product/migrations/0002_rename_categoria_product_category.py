# Generated by Django 4.1.3 on 2022-11-01 21:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='categoria',
            new_name='category',
        ),
    ]