from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=70, db_index=True, unique=True)
    slug = models.CharField(max_length=70)

    class Meta:
        db_table = 'category'
        ordering = ('name',)

    def __str__(self) -> str:
        return self.name
