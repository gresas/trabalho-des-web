# Generated by Django 4.1.3 on 2022-11-01 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=70, unique=True)),
                ('slug', models.CharField(max_length=70)),
            ],
            options={
                'db_table': 'category',
                'ordering': ('name',),
            },
        ),
    ]