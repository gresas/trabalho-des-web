# Generated by Django 4.1.3 on 2022-11-01 21:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=100, unique=True)),
                ('slug', models.CharField(max_length=100)),
                ('images', models.CharField(blank=True, max_length=50)),
                ('quantity', models.IntegerField(default=0)),
                ('preco', models.DecimalField(decimal_places=2, default=0, max_digits=5)),
                ('available', models.BooleanField(default=False)),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='category.category')),
            ],
            options={
                'db_table': 'product',
            },
        ),
    ]
